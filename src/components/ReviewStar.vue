<template lang="pug">
SvgIcon(type="mdi" :path="path")
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiStarOutline } from '@mdi/js';

export default {
  name: "ReviewStar",
  components: {
    SvgIcon
  },
  data() {
    return {
      path: mdiStarOutline,
    }
  }
}
</script>

<style lang="scss" scoped></style>