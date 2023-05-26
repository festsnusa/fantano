<template lang="pug">
AppHeader(:currentIndex="4")
.list-week 
  h1.title YEAR END LISTS
  .list-week__albums 
    h1.title ALBUMS
      .thumbnail(v-for="item in albums")
        img.thumbnail__img(:src="item.imgSrc" :alt="item.year")
        span.thumbnail__caption {{ item.year }}
  .list-week__singles 
    h1.title SINGLES
  .list-week__eps 
    h1.title EPs
  .list-week__honorable-mentions
    h1.title HONORABLE MENTIONS
  .list-week__worst-albums 
    h1.title WORST ALBUMS
  .list-week__worst-singles
    h1.title WORST SINGLES
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: "ListWeekView",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      albums: [
        { "year": "2022", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/2052.jpg" },
        { "year": "2021", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/1861.jpg" },
        { "year": "2020", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/1665.jpg" },
        { "year": "2019", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/1409.jpg" },
        { "year": "2018", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/1183.jpg" },
        { "year": "2017", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/950.jpg" },
        { "year": "2016", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/730.jpg" },
        { "year": "2015", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/782.jpg" },
        { "year": "2014", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/781.jpg" },
        { "year": "2013", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/783.jpg" },
        { "year": "2012", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/169.jpg" },
        { "year": "2011", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/784.jpg" },
        { "year": "2010", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/785.jpg" },
        { "year": "2010s", "imgSrc": "https://cdn.albumoftheyear.org/list/thumbs/1455.jpg" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>