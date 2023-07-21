<template lang="pug">
.search
  a-button(@click="sort") Reverse
  input.search__input(ref="inputRef" type="text" v-model="text" @input="searchReview(text)" placeholder="Search by title...")
  select.search__select(ref="selectRef" v-model="year" name="select" @change="filterByYear(year, rating)")
    option(value="") Filter by year
    option(v-for="item in years" :value="item") {{item}}
  select.search__select_rating(v-model="rating" name="select_rating" @change="filterByRating(rating, year)"
    v-show="type == 'review'")
    option(value="") Filter by rating
    option(v-for="item in ratings" :value="item") {{item}}
</template>

<script>
import { mapStores } from 'pinia'
import useYearStore from '@/stores/year'
import useRatingStore from '@/stores/rating'

export default {
  name: "AppFilter",
  props: ["filterByYear", "searchReview", "filterByRating", "type", "years", "sort"],
  data() {
    return {
      text: '',
      year: '',
      rating: '',
      ratings: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 'NOT GOOD', 'NOT BAD', 'CLASSIC', '-']
    }
  },
  computed: {
    ...mapStores(useYearStore, useRatingStore)
  },
  mounted() {
    this.year = this.yearStore.currentYear
    this.rating = this.ratingStore.currentRating

    if (this.type != 'review') {
      this.ratingStore.currentRating = ''
    }

    this.yearStore.$subscribe((mutation, state) => {
      this.year = state.currentYear
    })

    this.ratingStore.$subscribe((mutation, state) => {
      this.rating = state.currentRating
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.search {
  display: flex;
  flex-direction: column;
  // padding: 1rem;
  gap: 1.5rem;
  max-width: 25rem;

  &__input {
    width: 100%;
    padding: 1rem 1.5rem;
  }

  &__select,
  &__select_sort,
  &__select_rating {
    padding: 1rem 1.5rem;
  }
}
</style>