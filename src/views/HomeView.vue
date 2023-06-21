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
    }

  },
  async created() {

    // const albumTitle = 'Artpop'
    // const artistName = 'Lady Gaga'
    // const apiKey = '5fa8f750d3b2ed959fd1a754a6bc7ca0';

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