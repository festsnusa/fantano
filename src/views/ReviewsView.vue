<template lang="pug">
AppHeader(:currentIndex="1")
.reviews
  section.reviews__left
    .reviews__header 
      span.reviews__title Reviews
    .reviews__content
      RouterLink.review(v-for="(item, index) in reviews.slice().reverse()" :to="`/review/${item.id}`")
        img.review__image(:src="item.imgSrc", :alt="item.title")
        p.review__title {{ item.title }}
  aside.reviews__right
    AppFilter
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppFilter from '@/components/AppFilter.vue'

import json from '@/assets/data/reviews.json'

export default {
  name: "ReviewsView",
  components: {
    AppHeader,
    AppFooter,
    AppFilter,
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
  padding: 3rem;
  display: flex;

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