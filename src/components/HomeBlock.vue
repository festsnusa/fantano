<template lang="pug">
.header 
  h2.header__title {{title}}
  RouterLink(:to="`/${link}`")
    a-button(type="dashed") Show all
.content
  RouterLink.content__element(v-for="(item, index) in arr" v-show="index<5" :to="`/videos/${item.id}`")
    AppPreloader(v-show="!item.imageShow")
    img.content__image(v-show="item.imageShow" :src="thumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
    p.content__title {{ item.title }}
</template>

<script>
import AppPreloader from '@/components/AppPreloader.vue'
import { getThumbnail } from '@/includes/helper'

export default {
  name: "HomeBlock",
  props: ["title", "link", "arr"],
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
@import '@/assets/vars';

.header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;

  h2 {
    margin-bottom: 0;
  }

  a {
    color: #000;
  }

  &__show {
    &:hover {
      border-bottom: 1px solid $green;
    }
  }
}

.content {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 2rem;

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