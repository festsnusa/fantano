<template lang="pug">
.content
  .content__element(v-if="arr.length" v-for="(item, index) in arr" v-show="index<contentCount")
    RouterLink(:to="`/videos/${item.id}`")
      AppPreloader(v-show="!item.imageShow")
      img.content__image(v-show="item.imageShow" :src="thumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
      p.content__title {{ item.title }}
  .content__element(v-else)
    span No videos
</template>

<script>
import { getThumbnail } from '@/includes/helper'
import AppPreloader from '@/components/AppPreloader.vue'

export default {
  name: "AppContent",
  props: ["arr", "contentCount"],
  components: {
    AppPreloader,
  },
  data() {
    return {
      thumbnail: getThumbnail,
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;

  &__element,
  &__image {
    max-width: 19rem;
  }

  &__image {
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

    &:hover {
      transform: scale(1.05);
      transition: all 0.5s ease-in;
    }
  }
}

@media (max-width: 752px) {
  .content {

    &__element,
    &__image {
      max-width: 100%;
    }
  }
}
</style>