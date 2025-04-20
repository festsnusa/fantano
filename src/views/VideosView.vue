<template lang="pug">
AppHeader(:currentIndex="0")
AppVideos(type="review" :years="years" title="Reviews")
a-back-top
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "ReviewsView",
  components: {
    AppHeader,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(16), (_, i) => i + 2010).reverse()
    }
  }
}
</script>