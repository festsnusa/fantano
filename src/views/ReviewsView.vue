<template lang="pug">
AppHeader(:currentIndex="1")
.reviews
  section.reviews__left
    .reviews__content
      RouterLink.review(v-for="(item, index) in paginatedData" :key="index" :to="`/review/${item.id}`")
        AppPreloader(v-show="!item.imageShow")
        img.review__image(v-show="item.imageShow" :src="getThumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
        p.review__title {{ item.title }}
  aside.reviews__right
    AppFilter(:filterByYear="filterByYear" :searchReview="searchReview" :filterByRating="filterByRating")
.pagination 
  button.pagination__prev(@click="backPage") &laquo
  button.pagination__button(:class="{active: item == page}"
    v-for="item in Math.ceil(reviews.length / perPage)"
    :key="item"
    @click="() => goToPage(item)"
  ) {{ item }}
  button.pagination__next(@click="nextPage") &raquo
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppFilter from '@/components/AppFilter.vue'

import AppPreloader from '@/components/AppPreloader.vue'

import json from '../assets/data/main-channel.json'

import { mapStores } from 'pinia';
import usePageStore from '@/stores/page'
import useYearStore from '@/stores/year'
import useRatingStore from '@/stores/rating'

export default {
  name: "ReviewsView",
  components: {
    AppHeader,
    AppFooter,
    AppFilter,
    AppPreloader,
  },
  data() {
    return {
      reviews: json.filter(e => e.type == 'review'),
      page: 1,
      perPage: 16,
    }
  },
  computed: {
    paginatedData() {
      return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage)
    },
    ...mapStores(usePageStore, useYearStore, useRatingStore)
  },
  methods: {
    getThumbnail(url) {
      return `http://img.youtube.com/vi/${this.getVideoID(url)}/0.jpg`
    },
    getVideoID(url) {
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      let match = url.match(regExp)
      return (match && match[7].length == 11) ? match[7] : false
    },
    nextPage() {
      if (this.page !== Math.ceil(this.reviews.length / this.perPage)) {
        this.pageStore.currentPage += 1
      }
    },
    backPage() {
      if (this.page !== 1) {
        this.pageStore.currentPage -= 1
      }
    },
    goToPage(numPage) {
      this.pageStore.currentPage = numPage
    },
    filterByYear() {
      this.reviews = json.filter(e => e.type == 'review')
      this.pageStore.currentPage = 1
      document.querySelector('.search__input').value = ''
      this.yearStore.currentYear = document.querySelector('.search__select').value
      if (this.yearStore.currentYear == '') return
      this.reviews = this.reviews.filter(e => e.year == this.yearStore.currentYear)
    },
    filterByRating() {
      this.reviews = json.filter(e => e.type == 'review')
      this.pageStore.currentPage = 1
      document.querySelector('.search__input').value = ''
      this.ratingStore.currentRating = document.querySelector('.search__select_rating').value
      if (this.ratingStore.currentRating == '') return
      this.reviews = this.reviews.filter(e => e.rating == this.ratingStore.currentRating)
    },
    searchReview(text) {
      this.reviews = json.filter(e => e.type == 'review')
      this.pageStore.currentPage = 1
      document.querySelector('.search__select').value = ''
      if (text.length == 0) return
      this.reviews = this.reviews.filter(e => e.title.toLowerCase().includes(text.toLowerCase()))
    }
  },
  created() {
    this.page = this.pageStore.currentPage

    this.pageStore.$subscribe((mutation, state) => {
      this.page = state.currentPage
    })
  },
  mounted() {
    if (this.yearStore.currentYear != '') {
      this.reviews = this.reviews.filter(e => e.year == this.yearStore.currentYear)
    }

  }
}
</script>

<style lang="scss" scoped>
.reviews {
  padding: 3rem;
  display: flex;

  &__left {
    flex-grow: 2;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.pagination {
  display: inline-block;

  button {
    background-color: #fff;
    text-transform: uppercase;
    padding: 1rem;

    &:hover:not(.active) {
      background-color: #DDD;
    }
  }
}

.active {
  background-color: #0096FF;
  // color: #FFFFFF;
  border: 1px solid #0096FF;
}

@media (max-width: 1700px) {
  .reviews {

    flex-direction: column;

    &__left {
      order: 2;
    }

    &__right {
      order: 1;
    }
  }
}
</style>