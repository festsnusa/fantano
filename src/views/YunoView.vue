<template lang="pug">
AppHeader
.reviews
  .reviews__header 
    span.reviews__title YUNOREVIEW
  section.reviews__content
    RouterLink.review(v-for="(item, index) in arr" :key="index" :to="`/review/${item.id}`")
      AppPreloader(v-show="!item.imageShow")
      img.review__image(v-show="item.imageShow" :src="getThumbnail(item.video)", :alt="item.title" @load="item.imageShow = true")
      p.review__title {{ item.title }}
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppPreloader from '@/components/AppPreloader.vue'
import json from '@/assets/data/main-channel.json'
export default {
  name: "YunoView",
  components: {
    AppHeader,
    AppFooter,
    AppPreloader,
  },
  data() {
    return {
      arr: json.filter(e => e.type == 'YUNOREVIEW')
    }
  },
  methods: {
    getThumbnail(url) {
      return `http://img.youtube.com/vi/${this.getVideoID(url)}/0.jpg`
    },
    getVideoID(url) {
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
      let match = url.match(regExp)
      return (match && match[7].length == 11) ? match[7] : false
    },
  }
}
</script>

<style lang="scss" scoped></style>