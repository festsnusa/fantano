<template lang="pug">
.header 
  span.header__title {{title}}
  RouterLink(:to="`/${link}`")
    span.header__show Show all
.content
  RouterLink.content__element(v-for="(item, index) in arr" v-show="index<5" :to="`/review/${item.id}`")
    AppPreloader(v-show="!item.imageShow")
    img.content__image(v-show="item.imageShow" :src="getThumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
    p.content__title {{ item.title }}
</template>

<script>
import AppPreloader from '@/components/AppPreloader.vue'

export default {
  name: "HomeBlock",
  props: ["title", "link", "arr"],
  components: {
    AppPreloader,
  },
  methods: {
    getThumbnail(url) {
      return `http://img.youtube.com/vi/${this.getVideoID(url)}/0.jpg`
    },
    getVideoID(url) {
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      let match = url.match(regExp)
      return (match && match[7].length == 11) ? match[7] : false
    }
  }
}
</script>

<style lang="scss" scoped>
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