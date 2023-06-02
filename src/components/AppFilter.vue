<template lang="pug">
.search
  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
  input.search__input(type="text" v-model="text" @input="searchReview(text)" placeholder="Search for a review...")
  select.search__select(v-model="year" name="select" @change="filter")
    option(value="") Filter by year
    option(v-for="item in years" :value="item") {{item}}
</template>

<script>
import { mapStores } from 'pinia'
import useYearStore from '@/stores/year'

export default {
  name: "AppFilter",
  props: ["filter", "searchReview"],
  data() {
    return {
      text: '',
      year: '',
      years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
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
  padding: 1rem;
  align-items: center;
  gap: 1.5rem;

  &__input {
    width: 100%;
    padding: 1rem;
  }

  &__select {
    padding: 1rem 1.5rem;
  }
}
</style>