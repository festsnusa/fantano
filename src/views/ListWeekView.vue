<template lang="pug">
AppHeader(:currentIndex="4")
.list-week 
  h1.title YEAR END LISTS
  .list-week__albums
    AppThumbnail(title="albums" :data="albums")
  .list-week__singles 
    AppThumbnail(title="singles" :data="singles")
  .list-week__eps 
    AppThumbnail(title="eps" :data="EPs")
  .list-week__honorable-mentions
    h1.title HONORABLE MENTIONS
  .list-week__worst-albums 
    h1.title WORST ALBUMS
  .list-week__worst-singles
    h1.title WORST SINGLES
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppThumbnail from '@/components/AppThumbnail.vue'

import albumsJson from '@/assets/data/loved-list_albums.json'
import singlesJson from '@/assets/data/loved-list_singles.json'
import EpsJson from '@/assets/data/loved-list_EPs.json'

export default {
  name: "ListWeekView",
  components: {
    AppHeader,
    AppFooter,
    AppThumbnail,
  },
  data() {
    return {
      albums: albumsJson,
      singles: singlesJson,
      EPs: EpsJson,
    }
  }
}
</script>

<style lang="scss" scoped></style>