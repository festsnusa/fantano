<template lang="pug">
AppHeader
.review
  .review__left
    YouTube.video(:src="current.video" @ready="onReady" ref="youtube" :width="calculateWidth")
    iframe.spotify(v-if="current.spotify !=''" style="border-radius:12px" :src="`${current.spotify}&theme=0`" width="100%" height="452" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy")
  .review__right
    .review__header
      h1.review__title {{ current.title }} ({{ current.year }})
      Toggle.review__toggle(v-show="current.type=='review'" v-model="en" name="toggle" onLabel="EN" offLabel="RU")

    ReviewStar(v-for="n in current.rating" v-show="!isNaN(current.rating)")
    .text-field.multiline
      Markdown(v-if="en" :source="textEn")
      Markdown(v-else :source="textRu")

AppFooter
</template>

<script>
import Markdown from 'vue3-markdown-it';

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ReviewStar from '@/components/ReviewStar.vue'

import YouTube from 'vue3-youtube'
import Toggle from '@vueform/toggle'
import { useMediaQuery } from '@vueuse/core'

import json from '../assets/data/main-channel.json'

export default {
  components: {
    AppHeader,
    AppFooter,
    ReviewStar,
    YouTube,
    Toggle,
    Markdown
  },
  data() {
    return {
      arr: json.filter(e => e.type == 'review'),
      current: null,
      en: true,
      isLargeScreen: useMediaQuery('(min-width: 1024px)'),
      textEn: '',
      textRu: ''
    }
  },
  computed: {
    calculateWidth() {
      return this.isLargeScreen ? 640 : 400
    }
  },
  methods: {
    updateScreen() {
      this.isLargeScreen = useMediaQuery('(min-width: 1024px)')
    }
  },
  created() {
    this.current = json.filter((e) => e.id == this.$route.params.video)[0]

    import(`@/assets/text/${this.$route.params.video}-en.md`).then((module) => {
      this.textEn = module.default
    })

    import(`@/assets/text/${this.$route.params.video}-ru.md`).then((module) => {
      this.textRu = module.default
    })
  },
}
</script>

<style lang="scss" scoped>
.review {
  padding: 3rem;
  display: grid;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  &__left {
    gap: 3rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 640px;
  }
}

.multiline {
  white-space: pre-wrap;
}

@media (max-width: 1300px) {
  .review {
    flex-direction: column;

    &__left {
      flex-direction: row;
    }
  }

  .video {
    width: 10rem;
  }

  .spotify {
    max-height: 22.5rem;
  }
}

@media (max-width: 820px) {
  .review {
    &__left {
      flex-direction: column;
    }
  }
}
</style>