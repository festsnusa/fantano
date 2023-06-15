<template lang="pug">
.pagination
  .pagination__header
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
  .pagination__footer 
    .gotoPage
      span Go to page
      input(type="number" v-model="gotoNumber")
      button(@click="gotopage(Number(gotoNumber))") Go
</template>

<script>
import { mapStores } from 'pinia'
import usePageStore from '@/stores/page'

export default {
  name: "AppPagination",
  props: ["reviews", "totalPages"],
  data() {
    return {
      page: 1,
      perPage: 16,
      maxVisibleButtons: 8,
      gotoNumber: ''
    }
  },
  computed: {
    ...mapStores(usePageStore),
    paginatedData() {
      return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage)
    },
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
      this.gotoNumber = ''
      if (isNaN(num) || num < 1 || num > this.totalPages) {
        return
      }
      this.setIndex(num)
    },
  },
  created() {
    this.page = this.pageStore.currentPage

    this.pageStore.$subscribe((mutation, state) => {
      this.page = state.currentPage
    })
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/vars';

$primary: #39e;
$text: #666;
$size: 24px;

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 12px;
  color: $text;
  font-size: $size * 0.625;
  font-weight: bold;
  user-select: none;

  &__header {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
  }

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
  padding: 0.7rem;

  &:hover {
    background: rgba($primary, 0.2);
  }

  &.on {
    background: $primary;
    color: white;
    cursor: auto;
  }

  @media (min-width: 700px) {
    padding: 1.5rem;
  }
}

.gotoPage {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    max-width: 3rem;
  }

  button {
    padding: 0 1rem;
  }
}
</style>