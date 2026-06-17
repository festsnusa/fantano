const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../src/assets/data/main-channel.json');

async function getAppleMusicLink(id, albumTitle, artistName, retries = 3) {
  const searchQuery = `${albumTitle} ${artistName}`;
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    searchQuery
  )}&entity=album&limit=1`;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 429) {
          // Rate limited, wait longer
          const waitTime = Math.pow(2, attempt) * 5000; // Exponential backoff
          console.log(`⏸️  Rate limited. Waiting ${waitTime}ms before retry...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }
        throw new Error(`HTTP ${response.status}`);
      }
      
      const text = await response.text();
      if (!text) {
        if (attempt < retries - 1) {
          console.log(`⏸️  Empty response, retrying...`);
          await new Promise(resolve => setTimeout(resolve, 2000));
          continue;
        }
        throw new Error('Empty response');
      }
      
      const data = JSON.parse(text);
      
      if (data.results && data.results.length > 0) {
        const album = data.results[0];
        const albumLink = album.collectionViewUrl;
        console.log(`✓ Found Apple Music link for id ${id}: ${albumTitle}`);
        return {
          id,
          link: albumLink
        };
      } else {
        console.log(`✗ No album found for id ${id}: ${albumTitle} by ${artistName}`);
        return null;
      }
    } catch (error) {
      if (attempt < retries - 1) {
        const waitTime = Math.pow(2, attempt) * 2000;
        console.error(`⚠️  Error fetching link for id ${id}: ${error.message}. Retrying in ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      } else {
        console.error(`✗ Error fetching link for id ${id}: ${error.message}`);
        return null;
      }
    }
  }
}


async function populateAppleMusicLinks() {
  try {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    // Filter items that are reviews and don't have Apple Music links
    const itemsToFetch = jsonData.filter((e) => {
      if (e.type !== 'review') return false;
      if (!Array.isArray(e.externalLinks)) return false;
      // Check if Apple Music link already exists
      return !e.externalLinks.some(link => link.title === 'AM');
    });
    
    console.log(`\nFound ${itemsToFetch.length} items to fetch Apple Music links for\n`);
    
    let successCount = 0;
    
    for (const item of itemsToFetch) {
      const result = await getAppleMusicLink(item.id, item.albumTitle, item.artistName);
      
      if (result) {
        // Find the item in the main array and update it
        const index = jsonData.findIndex(e => e.id === result.id);
        if (index !== -1) {
          jsonData[index].externalLinks.push({
            title: 'AM',
            source: result.link
          });
          successCount++;
        }
      }
      
      // Add longer delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Write the updated JSON back to file
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
    
    console.log(`\n✓ Successfully updated ${successCount} items with Apple Music links`);
    console.log(`✓ File saved: ${jsonPath}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

populateAppleMusicLinks();
