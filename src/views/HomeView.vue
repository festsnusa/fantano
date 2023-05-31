<template lang="pug">
AppHeader(:currentIndex="0")
.reviews 
  .reviews__header 
    span.reviews__title Reviews
    RouterLink(to="/reviews")
      span.reviews__show Show all
  .reviews__content
    RouterLink.review(v-for="(item, index) in reviews" v-show="index<4" :to="`/review/${item.id}`")
      AppPreloader(v-show="!item.imageShow")
      img.review__image(v-show="item.imageShow" :src="getThumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
      p.review__title {{ item.title }}
.wtr
  .wtr__header 
    span.wtr__title Weekly Track Roundups
    RouterLink(to="/wtr")
      span.reviews__show Show all
.nmf 
.list-week 

AppFooter
    
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppPreloader from '@/components/AppPreloader.vue'

import json from '../assets/data/main-channel.json'

export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppFooter,
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
    }
  },
}
</script>

<style lang="scss" scoped>
.reviews {

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2rem;
    gap: 2rem;
  }

}

.review {
  &__image {
    width: 300px;
  }
}
</style>