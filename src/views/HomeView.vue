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
import Carousel from '@/components/Carousel.vue'

import json from '@/assets/data/main-channel.json'
import { ref, getDownloadURL } from "firebase/storage"

import { storage } from '@/includes/firebase'

export default {
  name: "HomeView",
  components: {
    AppHeader,
    Breadcrumb,
    AppFooter,
    HomeBlock,
    AppPreloader,
    Carousel,
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
          return ""
        })
        .then(data => {

          // const content = data.album.wiki.content
          // console.log(id, content)

          const album = data.album

          let images = album.image
          let lastImage = images[images.length - 1]
          return lastImage['#text']

          // if (!Array.isArray(album.tags.tag)) {
          //   return
          // }

          // let tags = album.tags.tag.map(tag => tag.name)
          // console.log(id, tags)
          // return tags
        })
        .catch(error => {
          console.error('Error:', error);
          return ""
        })
    },
    async fetchLastFmImages(id, artistName, albumTitle) {

      const apiKey = 'e44382d410187390db28095da14f7f98'

      await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${encodeURIComponent(artistName)}&album=${encodeURIComponent(albumTitle)}&format=json`)
        .then(response => response.json())
        .then(data => {

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
    getAppleMusicLink() {

      json.forEach(e => {

        if (e.type !== 'review') {
          return
        }

        if (e.externalLinks.length > 1) {
          return
        }

        const searchQuery = `${e.albumTitle} ${e.artistName}`;
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&entity=album&limit=1`;

        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data.results && data.results.length > 0) {
              const album = data.results[0];
              const albumLink = album.collectionViewUrl;
              console.log(e.id, albumLink)
            } else {
              return null;
            }
          })
          .catch(error => {
            console.error('Error:', error);
            return null;
          });
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

      console.log(json)
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

      console.log(json)
    },
    async getMediaLinks(id, title, artist) {
      try {
        // Format the search query
        const query = `site:music.apple.com ${title} ${artist}`;

        // Send a GET request to Google search
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        const response = await fetch(searchUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
          },
        });
        const htmlText = await response.text();

        // Parse the HTML response using DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        // Find the search results
        const searchResults = doc.querySelectorAll('div.g');
        if (!searchResults.length) {
          return [];
        }

        // Extract media links from the search results
        let result = searchResults[0]
        // searchResults.forEach((result) => {
        const link = result.querySelector('a').href;
        if (link && link.includes('apple')) {
          console.log(id, link)
        }
        // });
        // this.fetchData(mediaLinks[0])

      } catch (error) {
        console.error('Error:', error.message);
        return [];
      }
    },
    async fetchData(firstMediaLink) {

      let response = await fetch(firstMediaLink, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
        },
      });
      const htmlText = await response.text();

      // Create a new window or tab and load the content of the new page
      const newWindow = window.open();
      newWindow.document.open();
      newWindow.document.write(htmlText);
      newWindow.document.close();
      console.log(newWindow.document.documentElement.textContent)

      // Convert HTML content to Blob
      // const blob = new Blob([newWindow.document.documentElement.outerHTML], { type: 'text/html' });

      // // Create a download link for the Blob
      // const downloadLink = document.createElement('a');
      // downloadLink.href = URL.createObjectURL(blob);
      // downloadLink.download = 'document.html';
      // downloadLink.click();
      // Parse the HTML response using DOMParser
      // const parser = new DOMParser();
      // const doc = parser.parseFromString(htmlText, 'text/html');
      // console.log(doc.documentElement.innerHTML)

      // Replace the content of the current document
      // document.open();
      // document.write(doc.documentElement.innerHTML);
      // document.close();
      // console.log(firstMediaLink)
      // window.location.href = firstMediaLink;
      // console.log(firstMediaLink)
    },
    async downloadFile() {

      const fileRef = ref(storage, "texts/0-en.md");

      try {
        const url = await getDownloadURL(fileRef);

        // Fetch the Markdown content from the URL
        const response = await fetch(url);
        const markdownText = await response.text();

        // Perform further actions with the Markdown text
        console.log("Markdown Content:", markdownText);
      } catch (error) {
        // Handle error
        console.error("Error retrieving Markdown file:", error);
      }
    }
  },
  async created() {

    this.downloadFile()

    // this.pushImages()

    // json.forEach(e => {

    //   if (e.image !== '') {
    //     return
    //   }

    //   if (e.type == 'review') {
    //     setTimeout(this.fetchLastFmImages(e.id, e.artistName, e.albumTitle), 5000)
    //   }

    // })

    // json.forEach(e => {

    //   if (e.type == 'review' || e.type == 'TRACK REVIEW') {
    //     this.fetchLastFm(e.id, e.artistName, e.albumTitle)
    //   }

    // })

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
.list-week {
  padding: 0 3rem;
}

.breadcrumb {
  padding: 2rem 3rem;
}
</style>