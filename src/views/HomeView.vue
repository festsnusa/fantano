<template lang="pug">
AppHeader(:currentIndex="0")
.reviews 
  .reviews__header 
    span.reviews__title Reviews
    RouterLink(to="/reviews")
      span.reviews__show Show all
  RouterLink.review(v-for="(item, index) in reviews.slice().reverse()" v-show="index<4" :to="`/review/${item.id}`")
    img(:src="item.imgSrc", :alt="item.title")
    span.review__title {{ item.title }}
.wtr 
.nmf 
.list-week 

AppFooter
    
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import json from '@/assets/data.json'

export default {
  name: "HomeView",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      reviews: json,
    }
  },
}
</script>
