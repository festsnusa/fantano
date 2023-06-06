<template lang="pug">
AppHeader(:currentIndex="1")
AppVideos
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
}
</script>