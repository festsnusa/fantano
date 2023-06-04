<template lang="pug">
.search
  input.search__input(type="text" v-model="text" @input="searchReview(text)" placeholder="Search for a review...")
  select.search__select(v-model="year" name="select" @change="filterByYear")
    option(value="") Filter by year
    option(v-for="item in years" :value="item") {{item}}
  select.search__select_rating(v-model="rating" name="select_rating" @change="filterByRating")
    option(value="") Filter by rating
    option(v-for="item in ratings" :value="item") {{item}}
</template>

<script>
import { mapStores } from 'pinia'
import useYearStore from '@/stores/year'

export default {
  name: "AppFilter",
  props: ["filterByYear", "searchReview", "filterByRating"],
  data() {
    return {
      text: '',
      year: '',
      years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
      rating: '',
      ratings: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 'NOT GOOD', 'NOT BAD', '-']
    }
  },
  computed: {
    ...mapStores(useYearStore)
  },
  mounted() {
    this.year = this.yearStore.currentYear

    this.yearStore.$subscribe((mutation, state) => {
      this.year = state.currentYear
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.search {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.5rem;
  max-width: 25rem;

  &__input {
    width: 100%;
    padding: 1rem 1.5rem;
  }

  &__select,
  &__select_rating {
    padding: 1rem 1.5rem;
  }
}
</style>