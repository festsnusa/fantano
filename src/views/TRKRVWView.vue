<template lang="pug">
AppHeader(:currentIndex="6")
AppVideos(type="TRACK REVIEW" :years="years" title="TRACK REVIEW")
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "TRKRVWView",
  components: {
    AppHeader,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(8), (_, i) => i + 2010).reverse()
    }
  }
}
</script>

<style lang="scss" scoped></style>