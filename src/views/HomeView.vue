<template lang="pug">
AppHeader(:currentIndex="0")
.reviews 
  .reviews__header 
    span.reviews__title Reviews
    RouterLink(to="/reviews")
      span.reviews__show Show all
  .reviews__content
    RouterLink.review(v-for="(item, index) in reviews.slice().reverse()" v-show="index<4" :to="`/review/${item.id}`")
      img.review__image(:src="item.imgSrc", :alt="item.title")
      p.review__title {{ item.title }}
.wtr 
.nmf 
.list-week 

AppFooter
    
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import json from '@/assets/data/reviews.json'

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

<style lang="scss" scoped>
.reviews {

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    padding: 2rem;
  }

}

.review {
  &__image {
    width: 300px;
  }
}
</style>