<template lang="pug">
Breadcrumb.breadcrumb(:arr="breadcrumbArr" :title="title")
main.reviews
  section.reviews__left
    AppContent(:arr="paginatedData" :contentCount="reviews.length")
    AppPagination(v-show="reviews.length" :reviews="reviews" :totalPages="totalPages")
  aside.reviews__right
    AppFilter(ref="childRef" :filterByYear="filterByYear" :searchReview="searchReview" :sort="sort" 
    :filterByRating="filterByRating" :type="type" :years="years")
</template>

<script>
import AppPreloader from '@/components/AppPreloader.vue'
import AppContent from '@/components/AppContent.vue'
import AppFilter from '@/components/AppFilter.vue'
import AppPagination from '@/components/AppPagination.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

import { mapStores } from 'pinia';
import usePageStore from '@/stores/page'
import useYearStore from '@/stores/year'
import useRatingStore from '@/stores/rating'
import { getThumbnail } from '@/includes/helper'

import { useMediaQuery } from '@vueuse/core'

export default {
  name: "AppVideos",
  props: ["type", "years", "title"],
  inject: ["json"],
  components: {
    AppContent,
    AppFilter,
    AppPreloader,
    AppPagination,
    Breadcrumb,
  },
  data() {
    return {
      firstChannel: this.json.filter(e => e.type == this.type),
      reviews: [],
      page: 1,
      perPage: 20,
      totalPages: 1,
      gotoNumber: '',
      isLargeScreen: useMediaQuery('(min-width: 1024px)'),
      thumbnail: getThumbnail,
      breadcrumbArr: [
        { "title": "Home", "link": "/" },
      ],
    }
  },
  computed: {
    paginatedData() {
      return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage)
    },
    ...mapStores(usePageStore, useYearStore, useRatingStore),
  },
  methods: {
    sort() {
      this.reviews = this.reviews.reverse()
    },
    setTotalPages() {
      this.totalPages = Math.ceil(this.reviews.length / this.perPage)
    },
    filterByYear(year, rating) {
      this.reviews = this.json.filter(e => e.type == this.type)
      this.pageStore.currentPage = 1
      this.$refs.childRef.$refs.inputRef.value = ''
      this.yearStore.currentYear = year
      if (year != '') {
        this.reviews = this.reviews.filter(e => e.year == year)
      }

      if (this.type == 'review' && rating != '') {
        this.reviews = this.reviews.filter(e => e.rating == rating)
      }

      this.setTotalPages()
    },
    filterByRating(rating, year) {
      this.reviews = this.json.filter(e => e.type == this.type)
      this.pageStore.currentPage = 1
      this.$refs.childRef.$refs.inputRef.value = ''
      if (year !== '') {
        this.reviews = this.reviews.filter(e => e.year == year)
      }
      this.ratingStore.currentRating = rating
      if (rating === '') {
        this.setTotalPages()
        return
      }
      this.reviews = this.reviews.filter(e => e.rating == rating)
      this.setTotalPages()
    },
    searchReview(text) {
      this.reviews = this.json.filter(e => e.type == this.type)
      this.pageStore.currentPage = 1
      this.yearStore.currentYear = ''
      this.$refs.childRef.$refs.selectRef.value = ''
      this.ratingStore.currentRating = ''
      if (text.length == 0) {
        this.setTotalPages()
        return
      }
      this.reviews = this.reviews.filter(e => e.title.toLowerCase().includes(text.toLowerCase()))
      this.setTotalPages()

    },
    checkYears() {
      // check if year is in the list
      if (!this.years.includes(Number(this.yearStore.currentYear))) {
        this.yearStore.currentYear = ''
      }
    }
  },
  created() {

    this.reviews = this.firstChannel
    // this.paginatedData()

    this.perPage = this.isLargeScreen ? 20 : 6

    this.checkYears()

    if (this.yearStore.currentYear != '') {
      this.reviews = this.reviews.filter(e => e.year == +this.yearStore.currentYear)
    }

    this.totalPages = Math.ceil(this.reviews.length / this.perPage)
    this.pageStore.currentPage = (this.pageStore.currentPage > this.totalPages) ? 1 : this.pageStore.currentPage
    this.page = this.pageStore.currentPage

    this.pageStore.$subscribe((mutation, state) => {
      this.page = state.currentPage
    })

    let arr = []
    this.reviews.map(e => {
      let obj = {}
      obj.albumTitle = e.albumTitle
      obj.artistName = e.artistName
      obj.theneedledrop = e.rating
      obj.pitchfork = ""
      arr.push(obj)
    })

    console.log(arr)
  },
  mounted() {

    if (this.yearStore.currentYear != '') {
      this.reviews = this.reviews.filter(e => e.year == this.yearStore.currentYear)
    }

    if (this.ratingStore.currentRating != '') {
      this.reviews = this.reviews.filter(e => e.rating == this.ratingStore.currentRating)
    }

    this.setTotalPages()

  }
}
</script>

<style lang="scss" scoped>
$primary: #39e;
$text: #666;
$size: 24px;

.breadcrumb {
  padding: 2rem 3rem;
}

.reviews {
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  &__heading {
    text-transform: uppercase;
    padding: 2rem 0;
  }

  &__left {
    flex-grow: 2;
  }

  &__content {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: flex-start;
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

  .review {
    max-width: 13.5rem;

    &__image {
      width: 200px;
    }
  }
}
</style>