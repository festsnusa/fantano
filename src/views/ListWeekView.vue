<template lang="pug">
AppHeader(:currentIndex="3")
AppVideos(type="list-week" :years="years" title="List week")
a-back-top
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "ListWeekView",
  components: {
    AppHeader,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(15), (_, i) => i + 2010).reverse()
    }
  }
}
</script>

<style lang="scss" scoped></style>