<template lang="pug">
AppHeader(:currentIndex="0")
.reviews
  HomeBlockVue(title="Reviews" link="reviews" :arr="reviews")
.wtr
  HomeBlockVue(title="Weekly Track Roundups" link="wtr" :arr="wtr")
.ynr 
  HomeBlockVue(title="YUNOREVIEWS" link="ynr" :arr="ynr")
.list-week 

AppFooter
    
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import HomeBlockVue from '@/components/HomeBlock.vue'
import AppPreloader from '@/components/AppPreloader.vue'

import json from '../assets/data/main-channel.json'

export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppFooter,
    HomeBlockVue,
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
      reviews: json.filter(e => e.type == 'review'),
      wtr: json.filter(e => e.type == 'weekly'),
      ynr: json.filter(e => e.type == 'YUNOREVIEW'),
    }
  },
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