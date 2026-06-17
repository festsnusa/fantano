const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../src/assets/data/main-channel.json');
const progressPath = path.join(__dirname, '.am-links-progress.json');

// Load progress from previous runs
function loadProgress() {
  if (fs.existsSync(progressPath)) {
    return JSON.parse(fs.readFileSync(progressPath, 'utf8'));
  }
  return { processed: [], failed: [] };
}

// Save progress
function saveProgress(progress) {
  fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
}

async function getAppleMusicLink(id, albumTitle, artistName, retries = 2) {
  const searchQuery = `${albumTitle} ${artistName}`;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    searchQuery
  )}&entity=album&limit=1`;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url, { timeout: 10000 });
      
      if (!response.ok) {
        if (response.status === 429) {
          const waitTime = Math.pow(2, attempt) * 3000;
          console.log(`⏸️  Rate limited (${response.status}). Waiting ${waitTime}ms...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }
        throw new Error(`HTTP ${response.status}`);
      }
      
      const text = await response.text();
      if (!text) {
        if (attempt < retries - 1) {
          console.log(`⏸️  Empty response, retrying...`);
          await new Promise(resolve => setTimeout(resolve, 1500));
          continue;
        }
        throw new Error('Empty response');
      }
      
      const data = JSON.parse(text);
      
      if (data.results && data.results.length > 0) {
        const album = data.results[0];
        return {
          id,
          link: album.collectionViewUrl
        };
      } else {
        return null;
      }
    } catch (error) {
      if (attempt < retries - 1) {
        const waitTime = Math.pow(2, attempt) * 1500;
        console.error(`⚠️  Attempt ${attempt + 1} failed: ${error.message}. Waiting ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      } else {
        throw error;
      }
    }
  }
}

async function populateAppleMusicLinks(limitPerRun = 50) {
  try {
    const progress = loadProgress();
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    // Filter items that are reviews and don't have Apple Music links
    const itemsToFetch = jsonData.filter((e) => {
      if (e.type !== 'review') return false;
      if (!Array.isArray(e.externalLinks)) return false;
      if (e.externalLinks.some(link => link.title === 'AM')) return false;
      // Skip already processed items
      if (progress.processed.includes(e.id)) return false;
      return true;
    });

    console.log(`\n📊 Progress: ${progress.processed.length} processed, ${progress.failed.length} failed`);
    console.log(`📝 Found ${itemsToFetch.length} items to fetch (limiting to ${limitPerRun} per run)`);
    console.log(`⏱️  Estimated time: ~${(limitPerRun * 3) / 60} minutes\n`);

    const toProcess = itemsToFetch.slice(0, limitPerRun);
    let successCount = 0;

    for (let i = 0; i < toProcess.length; i++) {
      const item = toProcess[i];
      process.stdout.write(`[${i + 1}/${toProcess.length}] Processing id ${item.id}... `);
      
      try {
        const result = await getAppleMusicLink(item.id, item.albumTitle, item.artistName);
        
        if (result) {
          const index = jsonData.findIndex(e => e.id === result.id);
          if (index !== -1) {
            jsonData[index].externalLinks.push({
              title: 'AM',
              source: result.link
            });
            successCount++;
            console.log('✓');
          }
        } else {
          console.log('(not found)');
        }
        
        progress.processed.push(item.id);
        saveProgress(progress);
        
        // Delay between requests
        if (i < toProcess.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      } catch (error) {
        console.log(`✗ ${error.message}`);
        progress.failed.push(item.id);
        saveProgress(progress);
        
        if (i < toProcess.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
    }

    // Write the updated JSON back to file
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
    
    console.log(`\n✓ Added ${successCount} new Apple Music links`);
    console.log(`✓ Total processed so far: ${progress.processed.length + successCount}`);
    console.log(`✓ File saved: ${jsonPath}`);
    
    const remaining = itemsToFetch.length - limitPerRun;
    if (remaining > 0) {
      console.log(`\n⚠️  ${remaining} items remaining. Run again to continue.`);
    } else {
      console.log(`\n🎉 All items processed!`);
      if (fs.existsSync(progressPath)) fs.unlinkSync(progressPath);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

const limit = process.argv[2] ? parseInt(process.argv[2]) : 50;
populateAppleMusicLinks(limit);
