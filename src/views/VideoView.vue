<template lang="pug">
AppHeader
.review
  .review__left
    .review__video
      iframe(:src="transformYouTubeLink(current.video)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    .review__player(v-show="current.spotify")
      iframe.spotify(style="border-radius:12px" :src="`${current.spotify}&theme=0`" width="100%" height="452" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy")
  .review__right
    .review__header
      h1.review__title {{ current.title }} ({{ current.year }})
      Toggle.review__toggle(v-show="current.type=='review'" v-model="en" name="toggle" onLabel="EN" offLabel="RU")
    ReviewStar(v-for="n in current.rating" v-show="!isNaN(current.rating)")
    .text-field.multiline
      Markdown(v-if="!en" :source="textRu")
      Markdown(v-else :source="textEn")
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
      en: false,
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
    },
    transformYouTubeLink(link) {
      const videoID = this.extractVideoID(link);
      const embedURL = `https://www.youtube.com/embed/${videoID}`;
      return embedURL;
    },

    extractVideoID(link) {
      let videoID = '';

      // Regular expression pattern to match the video ID
      const pattern = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=|youtu\.be\/|[^#]*[?&]vi=))([^?&"'>]+)/;

      // Extract the video ID using the regular expression
      const match = link.match(pattern);
      if (match && match[1]) {
        videoID = match[1];
      } else {
        // Check if the link is in the youtu.be pattern
        const youtuPattern = /^https?:\/\/youtu.be\/([\w-]{11})/;
        const youtuMatch = link.match(youtuPattern);
        if (youtuMatch && youtuMatch[1]) {
          videoID = youtuMatch[1];
        }
      }

      return videoID;
    }
  },
  created() {
    this.current = json.filter((e) => e.id == this.$route.params.video)[0]

    import(`@/assets/text/${this.$route.params.video}-en.md`).then((module) => {
      this.textEn = module.default
      this.en = true
    })

    import(`@/assets/text/${this.$route.params.video}-ru.md`).then((module) => {
      this.textRu = module.default
      this.en = false
    })
  },
}
</script>

<style lang="scss" scoped>
.review {
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  &__left,
  &__right {
    width: 100%;
  }

  &__left {
    gap: 3rem;
    display: flex;
    flex-direction: column;
  }

  &__video,
  &__player {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* Adjust this value to set the desired aspect ratio (e.g., 16:9 = 56.25%) */
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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

  .spotify {
    // max-height: 22.5rem;
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