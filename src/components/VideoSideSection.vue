<template lang="pug">
.video
  iframe(:src="video(current.video)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
ul.external-links(v-show="current.externalLinks")
  li(v-for="link in current.externalLinks" @click="changePlayer(link.title)")
    a-button {{link.title}}
.player(v-show="current.externalLinks")
  iframe.iframe(v-for="link in current.externalLinks"
    v-show="player == link.title" style="border-radius:12px" :src="toEmbedLink" width="100%" height="452" frameBorder="0" allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy")

</template>

<script>
import { transformYouTubeLink } from '@/includes/helper'
export default {
  name: "VideoSideSection",
  props: ["current"],
  data() {
    return {
      video: transformYouTubeLink,
      player: this.current.externalLinks.length ? this.current.externalLinks[0].title : 'spotify',
    }
  },
  computed: {
    toEmbedLink() {
      if (this.player === 'spotify') {

        let obj = this.current.externalLinks.find(e => e.title == 'spotify')
        if (obj == undefined) return ""
        return obj.source.replace("/album/", "/embed/album/")
      }

      else if (this.player === 'AM') {

        let obj = this.current.externalLinks.find(e => e.title == 'AM')
        if (obj == undefined) return ""
        return obj.source.replace("music.apple.com", "embed.music.apple.com")

      } else {
        let obj = this.current.externalLinks.find(e => e.title == this.player)
        if (obj == undefined) return ""
        return obj.source
      }

      return this.current.externalLinks
    }
  },
  methods: {
    changePlayer(title) {
      this.player = title
    },

  }
}
</script>

<style lang="scss" scoped>
.video,
.player {
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

.iframe {
  @media (min-width: 1524px) {
    max-height: 25rem;
  }

}

.external-links {

  display: flex;
  gap: 1rem;
  padding: 1rem;

  img {
    width: 2rem;
    background-color: black;
    border-radius: 20px;
    cursor: pointer;
  }

  button {
    text-transform: capitalize;
    border-radius: 20px;
  }

  @media (max-width: 820px) {
    padding: 0;
  }
}
</style>