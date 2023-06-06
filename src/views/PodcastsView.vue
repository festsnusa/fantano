<template lang="pug">
AppHeader(:currentIndex="5")
AppVideos(type="podcast" :years="years")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "PodcastsView",
  components: {
    AppHeader,
    AppFooter,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(4), (_, i) => i + 2015).reverse()
    }
  }
}
</script>

<style lang="scss" scoped></style>