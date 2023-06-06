<template lang="pug">
AppHeader(:currentIndex="7")
AppVideos(type="other" :years="years")
AppFooter
</template>
  
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "VinylsView",
  components: {
    AppHeader,
    AppFooter,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(13), (_, i) => i + 2010).reverse(),
    }
  }
}
</script>
  
<style lang="scss" scoped></style>