<template lang="pug">
AppHeader(:currentIndex="0")
AppVideos(type="review" :years="years" title="Reviews")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppVideos from '@/components/AppVideos.vue'

export default {
  name: "ReviewsView",
  components: {
    AppHeader,
    AppFooter,
    AppVideos,
  },
  data() {
    return {
      years: Array.from(Array(14), (_, i) => i + 2010).reverse()
    }
  }
}
</script>