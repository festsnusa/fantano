<template lang="pug">
.video
  iframe(:src="transformYouTubeLink(current.video)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
.player(v-show="current.spotify")
  iframe.spotify(style="border-radius:12px" :src="`${current.spotify}&theme=0`" width="100%" height="452" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy")
</template>

<script>
export default {
  name: "VideoSideSection",
  props: ["current", "transformYouTubeLink"]
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
</style>