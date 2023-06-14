<template lang="pug">
AppHeader
AppVideo
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppVideo from '@/components/AppVideo.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppVideo,
  },
}
</script>