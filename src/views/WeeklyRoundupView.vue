<template lang="pug">
AppHeader(:currentIndex="1")
AppVideos(type="weekly" :years="years" title="Weekly Track Roundups")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "WeeklyRoundupView",
  components: {
    AppHeader,
    AppFooter,
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