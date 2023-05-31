<template lang="pug">
.search
  //- font-awesome-icon.search__icon(icon="fa-solid fa-magnifying-glass")
  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
  input.search__input(type="text" v-model="text" @input="searchReview(text)" placeholder="Search for a review...")
  select.search__select(name="select" @change="filter")
    option(value="") Filter by year
    option(v-for="item in years" :value="item") {{item}}
</template>

<script>
export default {
  name: "AppFilter",
  props: ["filter", "searchReview"],
  data() {
    return {
      text: '',
      years: [2023, 2022, 2021, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010],
    }
  },
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