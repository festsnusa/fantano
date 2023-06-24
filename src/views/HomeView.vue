<template lang="pug">
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
// import tags from '@/assets/data/tags.json'

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
    async fetchLastFm(id, artistName, albumTitle) {

      const apiKey = '9be755d7287c977402ce830fc6b09896'

      fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${encodeURIComponent(artistName)}&album=${encodeURIComponent(albumTitle)}&format=json`)
        .then(response => response.json())
        .catch(error => {
          console.error('Error:', error);
          // return
        })
        .then(data => {

          // const content = data.album.wiki.content
          // console.log(id, content)

          const album = data.album

          if (!Array.isArray(album.tags.tag)) {
            return
          }

          let tags = album.tags.tag.map(tag => tag.name)
          console.log(id, tags)
          // return tags
        })
        .catch(error => {
          console.error('Error:', error);
          // return
        })
    },
    splitMarkdownParagraphs(mdText) {
      // mdText = mdText.replace(/\r/g, '');
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
      const accessToken = 'BQBAspwrTtcoSz8Q3eFdU0bWP-ayX-TuV-sMLh-baVdxzFO5iwIB_DLrrFvuF6qg-LRLjXUDmgSCEtqSGbVLepJY9xi7ie6WHZ8-4nxoZzYb1PeL3I7Zwr6DLI0Q7QeN-UPyj3ga2vYgbtDnOp4UzVH56Sh6v2ahvgC-qu0CwANaG5t065zeovXlBNbgTkOiDqQiM61h1wjAmL5TC7_IivBMZx3ihbAYphU5cZikq_Kjvn6bZiWgQ2Gj3Sip9tiKE9U-GBrqAkoWRiDvHINlu6Bw'

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

            console.log(id, albumLink);
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

      const searchQuery = `${albumTitle} ${artistName}`;
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&entity=album&limit=1`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.results && data.results.length > 0) {
            const album = data.results[0];
            const albumLink = album.collectionViewUrl;
            console.log(albumLink)
          } else {
            return null;
          }
        })
        .catch(error => {
          console.error('Error:', error);
          return null;
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

  },
  async created() {

    // import('../assets/data/spotifyLinks.md')
    //   .then((module) => {
    //     let md = module.default
    //     let result = this.splitMarkdownParagraphs(md)
    //     console.log(result)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })

    // json.forEach(e => {

    // const result = spotifyLinks.filter(obj => obj.id === e.id);

    // if (result.length > 0) {
    //   e.spotifyLink = result[0].spotifyLink
    // }

    // if (e.type !== 'review') {
    //   return
    // }

    // if (e.tags.length == 0) {
    //   console.log(e.id)
    // }

    // if (e.spotifyLink !== '') {
    //   return
    // }
    // if (e.tags.length !== 0) {
    //   return
    // }

    // let desiredObj = tags.find(obj => obj.id == e.id)

    // if (desiredObj) {
    //   e.tags = desiredObj.tags
    // }

    // console.log(e.id)
    // this.fetchLastFm(e.id, e.artistName, e.albumTitle)
    // this.getSpotifyLink(e.id, e.albumTitle, e.artistName)

    // })

    // console.log(json)

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