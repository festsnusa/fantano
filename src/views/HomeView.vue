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
import { marked } from 'marked'

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
    async getFile(downloadURL) {
      let link = document.createElement('a');
      link.download = downloadURL;

      let blob = new Blob(downloadURL, { type: 'text/plain' });

      link.href = URL.createObjectURL(blob);

      link.click();

      URL.revokeObjectURL(link.href);
    },
    async downloadFile(url) {

      fetch(url, {
        mode: 'no-cors',
      })
        .then((response) => {
          if (!response.ok) return "There was error with your response, please check the details and try again";
          return response.text();
        })
        .then(md => {
          // Convert the Markdown to HTML using marked.js
          console.log(md)
          let html = marked(md)

          // Display the HTML content
          document.getElementById('content').innerHTML = html
        })
        .catch(error => {
          console.error('Error:', error)
        });
    }

  },
  async created() {
    // const starsRef = ref(storage, 'texts/0-en.md')
    // getDownloadURL(starsRef)
    //   .then((url) => {
    //     // Insert url into an <img> tag to "download"
    //     console.log(url)
    //     this.downloadFile(url)
    //   })
    //   .catch((error) => {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case 'storage/object-not-found':
    //         // File doesn't exist
    //         break;
    //       case 'storage/unauthorized':
    //         // User doesn't have permission to access the object
    //         break;
    //       case 'storage/canceled':
    //         // User canceled the upload
    //         break;

    //       // ...

    //       case 'storage/unknown':
    //         // Unknown error occurred, inspect the server response
    //         break;
    //     }
    //   });
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