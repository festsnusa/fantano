<template lang="pug">
AppHeader
YouTube(:src="current.video" @ready="onReady" ref="youtube")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import YouTube from 'vue3-youtube'
import json from '@/assets/data.json'

export default {
  components: {
    AppHeader,
    AppFooter,
    YouTube
  },
  data() {
    return {
      arr: json,
      current: null,
    }
  },
  // update() {
  //   this.current = json.filter((_, i) => i == this.route.params.review)
  //   console.log(this.current)
  // },
  created() {
    this.current = json.filter((_, i) => (i + 1) == this.$route.params.review)[0]
  }
}
</script>

<style lang="scss" scoped></style>