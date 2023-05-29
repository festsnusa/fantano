<template lang="pug">
AppHeader
.review
  .review__left
    YouTube.video(:src="current.video" @ready="onReady" ref="youtube")
    <iframe style="border-radius:12px" :src="`${current.spotify}&theme=0`" width="100%" height="452" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  .review__right
    .review__header
      h1.review__title {{ current.title }} ({{ current.year }})
      Toggle.review__toggle(v-show="'ru' in current" v-model="en" name="toggle" onLabel="EN" offLabel="RU")
    .text-field.multiline
      p(v-if="en") {{ current.en }}
      p(v-else) {{ current.ru }}
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import YouTube from 'vue3-youtube'
import Toggle from '@vueform/toggle'

import json from '@/assets/data/reviews.json'

export default {
  components: {
    AppHeader,
    AppFooter,
    YouTube,
    Toggle,
  },
  data() {
    return {
      arr: json,
      current: null,
      en: true,
    }
  },
  created() {
    this.current = json.filter((_, i) => (i + 1) == this.$route.params.review)[0]
  }
}
</script>

<style lang="scss" scoped>
.review {
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  // align-items: center;
}

.multiline {
  white-space: pre-wrap;
}
</style>