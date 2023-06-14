<template lang="pug">
a-affix(:offset-top="top")
  VideoSideSection(:current="current" :transformYouTubeLink="transformYouTubeLink")
</template>

<script>
import VideoSideSection from '@/components/VideoSideSection.vue';
export default {
  name: "AppAffix",
  props: ["current", "transformYouTubeLink"],
  components: {
    VideoSideSection,
  },
  data() {
    return {
      top: 20,
    }
  }
}
</script>