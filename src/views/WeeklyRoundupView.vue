<template lang="pug">
AppHeader(:currentIndex="1")
AppVideos(type="weekly" :years="years" title="Weekly Track Roundups")
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "WeeklyRoundupView",
  components: {
    AppHeader,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(8), (_, i) => i + 2016).reverse()
    }
  }
}
</script>

<style lang="scss" scoped></style>