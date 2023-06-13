<template lang="pug">
AppHeader
.reviews
  HomeBlock(title="Reviews" link="videos" :arr="reviews")
.wtr
  HomeBlock(title="Weekly Track Roundups" link="wtr" :arr="wtr")
.ynr 
  HomeBlock(title="YUNOREVIEWS" link="ynr" :arr="ynr")
.list-week 

AppFooter
    
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import HomeBlock from '@/components/HomeBlock.vue'
import AppPreloader from '@/components/AppPreloader.vue'

import json from '@/assets/data/main-channel.json'

export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppFooter,
    HomeBlock,
    AppPreloader,
  },
  methods: {
    getThumbnail(url) {
      return `http://img.youtube.com/vi/${this.getVideoID(url)}/0.jpg`
    },
    getVideoID(url) {
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      let match = url.match(regExp)
      return (match && match[7].length == 11) ? match[7] : false
    }
  },
  data() {
    return {
      reviews: json.filter(e => e.type == 'review').slice(0, 5),
      wtr: json.filter(e => e.type == 'weekly').slice(0, 5),
      ynr: json.filter(e => e.type == 'YUNOREVIEW').slice(0, 5),
    }
  },
  created() {
    // import('@/assets/data/fantano-channel.json')
    //   .then((module) => {

    //     let arr = module.default
    //     // let id = 1

    //     arr.reverse().forEach(e => {
    //       if (e.title.toLowerCase().includes('track review')) {
    //         e.type = 'TRACK REVIEW'
    //       } else if (e.title.toLowerCase().includes('interview')) {
    //         e.type = 'INTERVIEW'
    //       } else {
    //         e.type = 'other'
    //       }

    //     })

    //     console.log(arr.reverse())
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  }
}
</script>

<style lang="scss" scoped>
.reviews,
.wtr,
.ynr,
.list-week {
  padding: 3rem;
}
</style>