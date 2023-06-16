<template lang="pug">
AppHeader(:currentIndex="7")
AppVideos(type="other" :years="years" title="other")
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
      years: Array.from(Array(14), (_, i) => i + 2010).reverse(),
    }
  }
}
</script>
  
<style lang="scss" scoped></style>