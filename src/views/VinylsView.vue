<template lang="pug">
AppHeader(:currentIndex="5")
AppVideos(type="vinyl" :years="years" title="Vinyls")
a-back-top
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "VinylsView",
  components: {
    AppHeader,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(10), (_, i) => i + 2012).reverse(),
    }
  }
}
</script>

<style lang="scss" scoped></style>