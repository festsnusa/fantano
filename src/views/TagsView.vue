<template lang="pug">
AppHeader(:currentIndex="0")
Breadcrumb.breadcrumb(:arr="breadcrumbArr" :title="tag")
main.reviews
  .reviews__content(v-if="reviews.length")
    RouterLink.review(v-for="(item, index) in paginatedData" :key="index" :to="`/videos/${item.id}`")
      AppPreloader(v-show="!item.imageShow")
      img.review__image(v-show="item.imageShow" :src="thumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
      p.review__title {{ item.title }}
  .reviews__content(v-else)
    p No videos
  AppPagination(v-show="reviews.length" :reviews="reviews" :totalPages="totalPages")
a-back-top
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '@/components/AppVideos.vue'
import AppPreloader from '@/components/AppPreloader.vue'
import AppPagination from '@/components/AppPagination.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import json from '@/assets/data/main-channel.json'

import { getThumbnail } from '@/includes/helper'
import { useMediaQuery } from '@vueuse/core'

import { mapStores } from 'pinia';
import usePageStore from '@/stores/page'

export default {
  name: "ReviewsView",
  components: {
    AppHeader,
    AppVideos,
    AppPreloader,
    AppPagination,
    Breadcrumb,
  },
  data() {
    return {
      tag: this.$route.params.tag,
      reviews: json.filter(e => e.type == 'review').filter(e => e.tags.includes(this.$route.params.tag)),
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
    ...mapStores(usePageStore),
  },
  created() {
    console.log(this.reviews.length)
    this.perPage = this.isLargeScreen ? 20 : 6
    this.totalPages = Math.ceil(this.reviews.length / this.perPage)

    this.pageStore.currentPage = 1

    this.pageStore.$subscribe((mutation, state) => {
      this.page = state.currentPage
    })
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 2rem 3rem;
}

.reviews {
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

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

@media (min-width: 280px) {
  .reviews {
    &__content {
      padding: 0;
    }
  }
}

@media (min-width: 540px) {
  .reviews {
    &__content {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
}

@media (min-width: 700px) {
  .reviews {
    &__content {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
}

@media (min-width: 1200px) {
  .reviews {
    &__content {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
  }
}

@media (min-width: 1700px) {
  .reviews {
    &__content {
      grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    }
  }
}

@media (max-width: 1700px) {
  .review {
    max-width: 13.5rem;

    &__image {
      width: 200px;
    }
  }
}
</style>