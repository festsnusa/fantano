<template lang="pug">
AppHeader(:currentIndex="4")
AppVideos(type="podcast" :years="years" title="podcasts")
a-back-top
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "PodcastsView",
  components: {
    AppHeader,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(6), (_, i) => i + 2015).reverse()
    }
  }
}
</script>

<style lang="scss" scoped></style>