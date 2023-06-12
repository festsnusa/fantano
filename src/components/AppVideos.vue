<template lang="pug">
main.reviews
  section.reviews__left
    .reviews__content
      RouterLink.review(v-for="(item, index) in paginatedData" :key="index" :to="`/videos/${item.id}`")
        AppPreloader(v-show="!item.imageShow")
        img.review__image(v-show="item.imageShow" :src="getThumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
        p.review__title {{ item.title }}
    .pagination
      div(:class="{ 'arrow left': true, disabled: page == 1 }" @click="prev")
      template(v-if="totalPages > displayedPages[displayedPages.length - 2] && firstPage > 1")
        .item(@click="setIndex(1)") {{ 1 }}
        div(v-if="firstPage > 2") ...
      div(v-for="num in displayedPages" :key="`pagination-item-${num}`" :class="{ item: true, on: page == num }"
        @click="setIndex(num)") {{ num }}
      template(v-if="totalPages > displayedPages[displayedPages.length - 1]")
        div(v-if="lastPage < totalPages - 1") ...
        .item(@click="setIndex(totalPages)") {{ totalPages }}
      div(:class="{ 'arrow right': true, disabled: page == totalPages }" @click="next")
      .gotoPage 
        span Go to page
        input(type="number" v-model="gotoNumber")
        button(@click="gotopage(Number(gotoNumber))") Go

  aside.reviews__right
    AppFilter(:filterByYear="filterByYear" :searchReview="searchReview" 
    :filterByRating="filterByRating" :type="type" :years="years")
</template>

<script>
import AppPreloader from '@/components/AppPreloader.vue'
import AppFilter from '@/components/AppFilter.vue'

import json from '@/assets/data/main-channel.json'

import { mapStores } from 'pinia';
import usePageStore from '@/stores/page'
import useYearStore from '@/stores/year'
import useRatingStore from '@/stores/rating'

export default {
  name: "AppVideos",
  props: ["type", "years"],
  components: {
    AppFilter,
    AppPreloader,
  },
  data() {
    return {
      reviews: json.filter(e => e.type == this.type),
      page: 1,
      perPage: 16,
      totalPages: 1,
      maxVisibleButtons: 10,
      gotoNumber: ''
    }
  },
  computed: {
    paginatedData() {
      return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage)
    },
    ...mapStores(usePageStore, useYearStore, useRatingStore),
    firstPage() {
      return Math.max(this.page - (this.page === this.totalPages ? 2 : 1), 1)
    },
    lastPage() {
      return Math.min(this.page + (this.page === 1 ? 2 : 1), this.totalPages)
    },
    displayedPages() {
      if (this.totalPages <= this.maxVisibleButtons || this.page > this.totalPages) {
        return this.totalPages
      }

      return Array.from(
        { length: this.lastPage - this.firstPage + 1 },
        (_, index) => index + this.firstPage
      );
    }
  },
  methods: {
    prev() {
      this.pageStore.currentPage = Math.max(this.page - 1, 1)
    },
    next() {
      this.pageStore.currentPage = Math.min(this.page + 1, this.totalPages)
    },
    setIndex(num) {
      this.pageStore.currentPage = num
    },
    gotopage(num) {
      if (isNaN(num)) return
      if (num > this.totalPages) return
      this.setIndex(num)
      this.gotoNumber = ''
    },
    getThumbnail(url) {
      return `http://img.youtube.com/vi/${this.getVideoID(url)}/0.jpg`
    },
    getVideoID(url) {
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      let match = url.match(regExp)
      return (match && match[7].length == 11) ? match[7] : false
    },
    filterByYear() {
      this.reviews = json.filter(e => e.type == this.type)
      this.pageStore.currentPage = 1
      document.querySelector('.search__input').value = ''
      this.yearStore.currentYear = document.querySelector('.search__select').value
      if (this.yearStore.currentYear == '') return
      this.reviews = this.reviews.filter(e => e.year == this.yearStore.currentYear)
    },
    filterByRating() {
      this.reviews = json.filter(e => e.type == this.type)
      this.pageStore.currentPage = 1
      document.querySelector('.search__input').value = ''
      this.ratingStore.currentRating = document.querySelector('.search__select_rating').value
      if (this.ratingStore.currentRating == '') return
      this.reviews = this.reviews.filter(e => e.rating == this.ratingStore.currentRating)
    },
    searchReview(text) {
      this.reviews = json.filter(e => e.type == this.type)
      this.pageStore.currentPage = 1
      document.querySelector('.search__select').value = ''
      if (text.length == 0) return
      this.reviews = this.reviews.filter(e => e.title.toLowerCase().includes(text.toLowerCase()))
    }
  },
  created() {

    this.totalPages = Math.ceil(this.reviews.length / this.perPage)
    this.pageStore.currentPage = (this.pageStore.currentPage > this.totalPages) ? 1 : this.pageStore.currentPage
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
$primary: #39e;
$text: #666;
$size: 24px;

.reviews {
  padding: 3rem;
  display: flex;
  justify-content: center;

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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  button {
    background-color: #fff;
    text-transform: uppercase;
    padding: 1.5rem;

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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 12px;
  color: $text;
  font-size: $size * 0.625;
  font-weight: bold;
  user-select: none;

  @media (max-width: 360px) {
    gap: 4px;
  }

  .arrow {
    width: $size;
    height: $size;
    position: relative;
    cursor: pointer;

    &.disabled {
      opacity: 0.5;
      cursor: auto;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: $size/12;
      height: $size/2;
      left: 0;
      top: 0;
      background-color: $text;
      border-radius: $size/12;
    }

    &::before {
      transform: translate($size/2, $size/12) rotate(40deg);
    }

    &::after {
      transform: translate($size/2, $size/2 - $size/12) rotate(-40deg);
    }

    &.right {
      transform: rotate(180deg);
    }
  }

  .item {
    width: $size;
    height: $size;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: rgba($primary, 0.2);
    }

    &.on {
      background: $primary;
      color: white;
      cursor: auto;
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