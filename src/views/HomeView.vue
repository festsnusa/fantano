<template lang="pug">
//- <div id="content"></div>
AppHeader
Breadcrumb.breadcrumb(title="Home")
main
  .reviews
    HomeBlock(title="REVIEWS" link="videos" :arr="reviews")
  .wtr
    HomeBlock(title="WTRs" link="wtr" :arr="wtr")
  .ynr 
    HomeBlock(title="YUNOREVIEWS" link="ynr" :arr="ynr")
  .list-week 
AppFooter
a-back-top
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import AppFooter from '@/components/AppFooter.vue'
import HomeBlock from '@/components/HomeBlock.vue'
import AppPreloader from '@/components/AppPreloader.vue'

import json from '@/assets/data/main-channel.json'
// import { storage } from '../includes/firebase'
// import { ref, getDownloadURL } from "firebase/storage";
// import { marked } from 'marked'

export default {
  name: "HomeView",
  components: {
    AppHeader,
    Breadcrumb,
    AppFooter,
    HomeBlock,
    AppPreloader,
  },
  data() {
    return {
      reviews: json.filter(e => e.type == 'review').slice(0, 5),
      wtr: json.filter(e => e.type == 'weekly').slice(0, 5),
      ynr: json.filter(e => e.type == 'YUNOREVIEW').slice(0, 5),
    }
  },
  methods: {
    async fetchLastFm(id, apiKey, artistName, albumTitle) {

      fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artistName}&album=${albumTitle}&format=json`)
        .then(response => response.json())
        .catch(error => {
          return
        })
        .then(data => {

          const content = data.album.wiki.content
          console.log(id, content)
          // if (!Array.isArray(album.tags.tag)) {
          //   return
          // }
          // let tags = album.tags.tag.map(tag => tag.name)
          // console.log(id, tags)
          // return tags
        })
        .catch(error => {
          // console.error('Error:', error);
          return
        })
    },
    splitMarkdownParagraphs(mdText) {
      mdText = mdText.replace(/\r/g, '');
      const paragraphs = mdText.split(/\n\s*\n|\n/);

      let arrObj = []

      paragraphs.forEach(element => {
        let arr = element.split(" / ")

        let obj = {}
        obj.id = arr[0]
        obj.tags = arr[1]

        arrObj.push(obj)
      })
      return arrObj
    },
    getSpotifyLink(id, albumTitle, artistName) {
      // const accessToken = 'BQAoGruW4vQOUL3ioFMFpRV-Yhe29_Wl25idYydLqm9uOta-tW0Z2TThAdNzPgM8abQLnVlTbGhkL-Jq4wCwvN0VWw2P5ZBGXrteL1kwZkjajz6aKhXFKpz0vSYh-1aAw7tdJj9pthugPFPur4Njh8yiSZhz9svGDjmDTOyCUK3h-YEknu72ExDmNf_NXlG2Lkhm5jx0uwtQuVA4O_ghQCC4Qrz7S30X8xq0oF_gWYdkZVVFIjRk1rz7YN5MG4Ymg1JYGSLYu7WbXEwbIj_ryb0l';
      // const accessToken = "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11"
      const accessToken = 'BQCEnGj27hh87UeMWlCfasxLWrPoylscanWowbKapzVMBK7MvWB5yCRFL64gXek8JnWrZ2V4JF16UA376bgqAuA2ky-a2rh5N4uykP6loxP-XO2z2oNf8iutrFSy1_W6CloLltJogkTjjaBhNYTYsC4nDmEZ1RHjbMc3aVA-y4FudDEeHOmZM1KbHSOAlELB-8cn7dsvXCdiZbTXBYrDaCbJvW2nzVauOkLJwAacLaGFL7v2Sqw9IAEiQ6GI2x64mTG4EZkZ39OiccbGH0plUkyg'

      const searchQuery = `album:${encodeURIComponent(albumTitle)} artist:${encodeURIComponent(artistName)}`;

      fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => {
          const albums = data.albums.items;
          if (albums.length > 0) {
            const album = albums[0]; // Assuming the first album in the search results is the one you want
            const albumLink = album.external_urls.spotify;

            console.log([id, albumLink]);
            // Do something with the album link, such as redirecting the user to that page
          } else {
            console.log('No album found with the specified title and artist');
          }
        })
        .catch(error => {
          console.error('Error retrieving album:', error);
        });
    },
    getAppleMusicLink(id, albumTitle, artistName) {
      const countryCode = 'us';

      const searchUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(albumTitle)}+${encodeURIComponent(artistName)}&entity=album&country=${countryCode}`;

      fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
          const albums = data.results;
          if (albums.length > 0) {
            const album = albums[0]; // Assuming the first album in the search results is the one you want
            const albumLink = album.collectionViewUrl;

            console.log([id, albumLink]);
            // Do something with the album link, such as redirecting the user to that page
          } else {
            console.log('No album found with the specified title and artist');
          }
        })
        .catch(error => {
          console.error('Error retrieving album:', error);
        });
    },
    getYouTubeLink(id, albumTitle, artistName) {
      const searchQuery = `${albumTitle} ${artistName} album`;
      const APIKEY = 'AIzaSyD8veGTCgXd1xMkSnd_yljDUFQk3edSFaM'

      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=10&key=${APIKEY}`)
        .then(response => response.json())
        .then(data => {
          const videos = data.items;
          if (videos.length > 0) {
            const albumVideo = videos.find(video => video.snippet.title.toLowerCase().includes(albumTitle.toLowerCase()));
            if (albumVideo) {
              const albumLink = `https://www.youtube.com/watch?v=${albumVideo.id.videoId}`;

              console.log(albumLink);
              // Do something with the album link, such as redirecting the user to that page
            } else {
              console.log('No album found with the specified title and artist');
            }
          } else {
            console.log('No videos found with the specified title and artist');
          }
        })
        .catch(error => {
          console.error('Error retrieving album:', error);
        });
    },
    getBandcampLink(id, albumTitle, artistName) {

      const APIKEY = ''
      const searchUrl = `https://api.bandcamp.com/api/album/2/search?key=${APIKEY}&q=${encodeURIComponent(albumTitle)}+${encodeURIComponent(artistName)}`;

      fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
          if (data.results.length > 0) {
            const album = data.results[0];
            const albumLink = album.url;

            console.log(albumLink);
            // Do something with the album link, such as redirecting the user to that page
          } else {
            console.log('No album found with the specified title and artist');
          }
        })
        .catch(error => {
          console.error('Error retrieving album:', error);
        });
    },
    getSoundcloudLink(id, trackTitle, artistName) {

      const clientId = 'YOUR_CLIENT_ID'; // Replace with your SoundCloud API client ID

      const searchUrl = `https://api.soundcloud.com/tracks?q=${encodeURIComponent(trackTitle)}+${encodeURIComponent(artistName)}&client_id=${clientId}`;

      fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            const track = data[0];
            const trackLink = track.permalink_url;

            console.log(trackLink);
            // Do something with the track link, such as redirecting the user to that page
          } else {
            console.log('No track found with the specified title and artist');
          }
        })
        .catch(error => {
          console.error('Error retrieving track:', error);
        });
    },
    getDeezerLink(id, albumTitle, artistName) {
      const searchUrl = `https://api.deezer.com/search/album?q=${encodeURIComponent(albumTitle)}&artist=${encodeURIComponent(artistName)}`;

      fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
          if (data.data.length > 0) {
            const album = data.data[0];
            const albumLink = album.link;

            console.log(albumLink);
            // Do something with the album link, such as redirecting the user to that page
          } else {
            console.log('No album found with the specified title and artist');
          }
        })
        .catch(error => {
          console.error('Error retrieving album:', error);
        });
    },
    getYoutubeVideoCaption() {
      const videoId = 'nY0l3urHSPM'; // Replace with the actual YouTube video ID

      const apiKey = 'AIzaSyD8veGTCgXd1xMkSnd_yljDUFQk3edSFaM'; // Replace with your YouTube Data API key

      const apiUrl = `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const captions = data.items;

          if (captions.length > 0) {
            const captionTracks = captions.map(caption => {
              return {
                language: caption.snippet.language,
                url: caption.snippet.url
              };
            });

            console.log('Caption Tracks:', captionTracks);
          } else {
            console.log('No captions found for the video');
          }
        })
        .catch(error => {
          console.error('Error retrieving captions:', error);
        });
    }

  },
  async created() {

    // const albumTitle = 'Artpop'
    // const artistName = 'Lady Gaga'
    // const apiKey = '5fa8f750d3b2ed959fd1a754a6bc7ca0';

    // this.getSpotifyGenres(1, albumTitle, artistName)
    // this.getYoutubeVideoCaption()

    // fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=${encodeURIComponent(artistName)}&album=${encodeURIComponent(albumTitle)}&api_key=${apiKey}&format=json`)
    //   .then(response => response.json())
    //   .then(data => {
    //     const album = data.album;
    //     const streamingLinks = album.streamable;
    //     console.log('Streaming Links:', streamingLinks);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    // import('../assets/data/tags.md')
    //   .then((module) => {
    //     // console.log(module.default)

    //     const paragraphsArray = this.splitMarkdownParagraphs(module.default);
    //     console.log(paragraphsArray);
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })

    // let arrData = json

    // arrData.forEach((e) => {

    //   const albumTitle = e.albumTitle
    //   const artistName = e.artistName
    //   const apiKey = '5fa8f750d3b2ed959fd1a754a6bc7ca0';

    //   if (albumTitle == undefined || artistName == undefined) {
    //     return
    //   }

    //   new Promise((resolve) => {
    //     setTimeout(() => {
    //       this.fetchLastFm(e.id, apiKey, artistName, albumTitle)
    //     }, 2000)
    //   })
    //     .then((result) => {
    //       // e.tags = result
    //       // console.log("The result is:", result);
    //     });

    // });

    // console.log(arrData)

  }
}
</script>

<style lang="scss" scoped>
.reviews,
.wtr,
.ynr,
.list-week {
  padding: 0 3rem;
}

.breadcrumb {
  padding: 2rem 3rem;
}
</style>