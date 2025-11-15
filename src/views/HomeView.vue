<template lang="pug">
AppHeader
Breadcrumb.breadcrumb(title='Home')
main
  //- .carousel
  //-   Carousel
  .reviews
    HomeBlock(title='REVIEWS', link='videos', :arr='reviews')
  .wtr
    HomeBlock(title='WTRs', link='wtr', :arr='wtr')
  .ynr 
    |
    |
    |
    |
    |
    HomeBlock(title='YNRs', link='ynr', :arr='ynr')
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
import Carousel from '@/components/Carousel.vue'

import { YoutubeTranscript } from 'youtube-transcript'

// import json from '@/assets/data/main-channel.json'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    Breadcrumb,
    AppFooter,
    HomeBlock,
    AppPreloader,
    Carousel
  },
  inject: ['json'],
  data() {
    return {
      reviews: this.json.filter((e) => e.type == 'review').slice(0, 5),
      wtr: this.json.filter((e) => e.type == 'weekly').slice(0, 5),
      ynr: this.json.filter((e) => e.type == 'YUNOREVIEW').slice(0, 5)
    }
  },
  methods: {
    async fetchLastFm(id, artistName, albumTitle) {
      const apiKeyLastFm = import.meta.env.VITE_API_KEY_LASTFM

      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKeyLastFm}&artist=${encodeURIComponent(
          artistName
        )}&album=${encodeURIComponent(albumTitle)}&format=json`
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error('Error:', error)
          return ''
        })
        .then((data) => {
          // const content = data.album.wiki.content
          // console.log(id, content)

          const album = data.album

          //let images = album.image
          //let lastImage = images[images.length - 1]
          //return lastImage['#text']

          // if (!Array.isArray(album.tags.tag)) {
          //   return
          // }

          let tags = album.tags.tag.map((tag) => tag.name)
          console.log(id, tags)
          return tags
        })
        .catch((error) => {
          console.error('Error:', error)
          return ''
        })
    },
    async fetchLastFmImages(id, artistName, albumTitle) {
      const apiKey = import.meta.env.VITE_API_KEY_LASTFM_IMAGES

      await fetch(
        `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${encodeURIComponent(
          artistName
        )}&album=${encodeURIComponent(albumTitle)}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          // const content = data.album.wiki.content
          // console.log(id, content)

          const album = data.album

          let images = album.image
          let lastImage = images[images.length - 1]
          console.log(id, lastImage['#text'])

          // if (!Array.isArray(album.tags.tag)) {
          //   return
          // }

          // let tags = album.tags.tag.map(tag => tag.name)
          // console.log(id, tags)
          // return tags
        })

      // console.log(json)
    },
    splitMarkdownParagraphs(mdText) {
      // mdText = mdText.replace(/\r/g, '');
      const paragraphs = mdText.split(/\n\s*\n|\n/)

      let arrObj = []

      paragraphs.forEach((element) => {
        let arr = element.split(' / ')

        let obj = {}
        obj.id = arr[0]
        obj.tags = arr[1]

        arrObj.push(obj)
      })
      return arrObj
    },
    getSpotifyLink(id, albumTitle, artistName) {
      const accessToken = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN

      const searchQuery = `album:${encodeURIComponent(albumTitle)} artist:${encodeURIComponent(
        artistName
      )}`

      return fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const albums = data.albums.items
          if (albums.length > 0) {
            const album = albums[0]
            const albumLink = album.external_urls.spotify
            console.log(id, albumLink)
            return {
              id,
              link: albumLink
            }
          } else {
            console.log('No album found with the specified title and artist')
            return null
          }
        })
        .catch((error) => {
          console.error('Error retrieving album:', error)
          return null
        })
    },
    async populateSpotifyLinks() {
      const spotifyLinks = []
      
      // Filter items with empty externalLinks that are reviews
      const itemsToFetch = this.json.filter((e) => 
        e.type === 'review' && 
        Array.isArray(e.externalLinks) && 
        e.externalLinks.length === 0
      )
      
      console.log(`Found ${itemsToFetch.length} items to fetch Spotify links for`)
      
      for (const item of itemsToFetch) {
        try {
          const result = await this.getSpotifyLink(item.id, item.albumTitle, item.artistName)
          if (result) {
            spotifyLinks.push({
              id: result.id,
              title: 'Spotify',
              source: result.link
            })
          }
          // Add delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 500))
        } catch (error) {
          console.error(`Error fetching link for id ${item.id}:`, error)
        }
      }
      
      console.log('Spotify links to add:', spotifyLinks)
      console.log('Copy this data to your main-channel.json externalLinks arrays:')
      console.table(spotifyLinks)
      
      return spotifyLinks
    },
    getAppleMusicLink() {
      this.json.forEach((e) => {
        if (e.type !== 'review') {
          return
        }

        if (e.externalLinks.length > 1) {
          return
        }

        const searchQuery = `${e.albumTitle} ${e.artistName}`
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
          searchQuery
        )}&entity=album&limit=1`

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (data.results && data.results.length > 0) {
              const album = data.results[0]
              const albumLink = album.collectionViewUrl
              console.log(e.id, albumLink)
            } else {
              return null
            }
          })
          .catch((error) => {
            console.error('Error:', error)
            return null
          })
      })
    },
    pushAppleMusicLink() {
      // json.forEach(e => {

      //   if (e.type !== 'review') {
      //     return
      //   }

      //   if (e.externalLinks.length > 1) {
      //     return
      //   }

      //   const result = AMLinks.filter(obj => obj.id === e.id);

      //   if (result.length > 0) {
      //     let obj = {
      //       "title": "AM",
      //       "source": result[0].link
      //     }

      //     e.externalLinks.push(obj)
      //   }

      // })

      console.log(this.json)
    },
    pushImages() {
      // json.forEach(e => {

      //   if (e.type == 'review' || e.type == 'TRACK REVIEW') {

      //     const result = LastFMImages.filter(obj => obj.id === e.id);

      //     if (result.length > 0) {
      //       e.image = result[0].link
      //     }
      //   }

      // })

      console.log(this.json)
    },
    async getMediaLinks(id, title, artist) {
      try {
        // Format the search query
        const query = `site:music.apple.com ${title} ${artist}`

        // Send a GET request to Google search
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`
        const response = await fetch(searchUrl, {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
          }
        })
        const htmlText = await response.text()

        // Parse the HTML response using DOMParser
        const parser = new DOMParser()
        const doc = parser.parseFromString(htmlText, 'text/html')

        // Find the search results
        const searchResults = doc.querySelectorAll('div.g')
        if (!searchResults.length) {
          return []
        }

        // Extract media links from the search results
        let result = searchResults[0]
        // searchResults.forEach((result) => {
        const link = result.querySelector('a').href
        if (link && link.includes('apple')) {
          console.log(id, link)
        }
        // });
        // this.fetchData(mediaLinks[0])
      } catch (error) {
        console.error('Error:', error.message)
        return []
      }
    },
    async fetchData(firstMediaLink) {
      let response = await fetch(firstMediaLink, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
        }
      })
      const htmlText = await response.text()

      // Create a new window or tab and load the content of the new page
      const newWindow = window.open()
      newWindow.document.open()
      newWindow.document.write(htmlText)
      newWindow.document.close()
      console.log(newWindow.document.documentElement.textContent)
    },
    async fetchTranscript() {
      try {
        /*const transcript = await YoutubeTranscript.fetchTranscript(
          'https://www.youtube.com/watch?v=wq6yMf5JSR8'
        )
        console.log(transcript) */

        YoutubeTranscript.fetchTranscript('wq6yMf5JSR8').then(console.log)
      } catch (error) {
        console.error('Error fetching transcript:', error)
      }
    },

    async processAlbums() {

      let jsonArr = this.json.filter((e) => e.id >= 4161 && e.id <= 4200)

      jsonArr.map((e) => {
        if (e.type == 'review' || e.type == 'TRACK REVIEW') {
          this.fetchLastFm(e.id, e.artistName, e.albumTitle)
        }
      })

    }
  },
  async created() {

    let jsonArr = this.json

      jsonArr.forEach((e) => {
        console.log(e.video)
      })

    // this.processAlbums() 
    // this.fetchTranscript()
    // this.downloadFile()
    // this.pushImages()
    // json.forEach(e => {
    //   if (e.image !== '') {
    //     return
    //   }
    //   if (e.type == 'review') {
    //     setTimeout(this.fetchLastFmImages(e.id, e.artistName, e.albumTitle), 5000)
    //   }
    // })
    /*
     jsonArr.forEach(e => {
       if (e.type == 'review' || e.type == 'TRACK REVIEW') {
         this.fetchLastFm(e.id, e.artistName, e.albumTitle)
       }
    
    })
    */
    // console.log(json)
    // json.forEach(e => {
    //   if (e.type !== 'review') {
    //     return
    //   }
    //   if (e.externalLinks.length == 1) {
    //     console.log(e.id)
    //   }
    //   // setTimeout(this.getMediaLinks(e.id, e.albumTitle, e.artistName), 5000)
    // })
    // this.getAppleMusicLink()
    // this.pushAppleMusicLink()
  }
}
</script>

<style lang="scss" scoped>
.reviews,
.wtr,
.ynr,
.carousel,
.list-week {
  padding: 0 3rem;
}

.breadcrumb {
  padding: 2rem 3rem;
}
</style>