import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, '../src/assets/data/main-channel.json');
const accessToken = process.env.VITE_SPOTIFY_ACCESS_TOKEN;

if (!accessToken) {
  console.error('Error: VITE_SPOTIFY_ACCESS_TOKEN environment variable is not set');
  process.exit(1);
}

async function getSpotifyLink(id, albumTitle, artistName) {
  const searchQuery = `album:${encodeURIComponent(albumTitle)} artist:${encodeURIComponent(
    artistName
  )}`;

  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const data = await response.json();
    
    if (data.albums && data.albums.items && data.albums.items.length > 0) {
      const album = data.albums.items[0];
      const albumLink = album.external_urls.spotify;
      console.log(`✓ Found Spotify link for id ${id}: ${albumTitle}`);
      return {
        id,
        link: albumLink
      };
    } else {
      console.log(`✗ No album found for id ${id}: ${albumTitle} by ${artistName}`);
      return null;
    }
  } catch (error) {
    console.error(`✗ Error fetching link for id ${id}:`, error.message);
    return null;
  }
}

async function populateSpotifyLinks() {
  try {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    // Filter items with empty externalLinks that are reviews
    const itemsToFetch = jsonData.filter((e) => 
      e.type === 'review' && 
      Array.isArray(e.externalLinks) && 
      e.externalLinks.length === 0
    );
    
    console.log(`\nFound ${itemsToFetch.length} items to fetch Spotify links for\n`);
    
    let successCount = 0;
    
    for (const item of itemsToFetch) {
      const result = await getSpotifyLink(item.id, item.albumTitle, item.artistName);
      
      if (result) {
        // Find the item in the main array and update it
        const index = jsonData.findIndex(e => e.id === result.id);
        if (index !== -1) {
          jsonData[index].externalLinks.push({
            title: 'Spotify',
            source: result.link
          });
          successCount++;
        }
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Write the updated JSON back to file
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
    
    console.log(`\n✓ Successfully updated ${successCount} items with Spotify links`);
    console.log(`✓ File saved: ${jsonPath}`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

populateSpotifyLinks();
