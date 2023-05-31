<template lang="pug">
AppHeader(:currentIndex="1")
.reviews
  section.reviews__left
    .reviews__header 
      span.reviews__title Reviews
    .reviews__content
      RouterLink.review(v-for="(item, index) in paginatedData" :key="index" :to="`/review/${item.id}`")
        img.review__image(:src="getThumbnail(item.video)", :alt="item.title")
        p.review__title {{ item.title }}
  aside.reviews__right
    AppFilter
.pagination 
  button(@click="backPage") prev
  button(
    v-for="item in Math.ceil(data.length / perPage)"
    :key="item"
    @click="() => goToPage(item)"
  ) {{ item }}
  button(@click="nextPage") next
AppFooter

div(v-for="item in paginatedData" :key="item.index") {{ item.id }}
button(@click="backPage") prev
button(
  v-for="item in Math.ceil(data.length / perPage)"
  :key="item"
  @click="() => goToPage(item)"
) {{ item }}
button(@click="nextPage") next
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppFilter from '@/components/AppFilter.vue'

import json from '../assets/data/main-channel.json'
import handlePagination from "../includes/handlePagination";

export default {
  name: "ReviewsView",
  components: {
    AppHeader,
    AppFooter,
    AppFilter,
  },
  setup() {
    const handlePaginationValue = handlePagination();

    return { ...handlePaginationValue };
  },
  data() {
    return {
      reviews: json.filter(e => e.type == 'review'),
    }
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
}
</script>

<style lang="scss" scoped>
.reviews {
  padding: 3rem;
  display: flex;

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
    gap: 2rem;
  }
}

.review {
  max-width: 20rem;

  &__image {
    width: 300px;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

    &:hover {
      transform: scale(1.05);
      transition: all 0.5s ease-in;
    }
  }
}
</style>