<template lang="pug">
.listweek
  h1.title {{ name }}
  .listweek__left
    YouTube.video(:src="current.video" @ready="onReady" ref="youtube")
  .listweek__right 
    ul.list 
      li.item(v-for="item in current.list") {{ item }}

</template>

<script>
import albumsJson from "@/assets/data/loved-list_albums.json"
import singlesJson from "@/assets/data/loved-list_singles.json"
import epsJson from "@/assets/data/loved-list_EPs.json"

import YouTube from 'vue3-youtube'

export default {
  name: "ListWeekPostView",
  components: {
    YouTube,
  },
  data() {
    return {
      current: null,
      year: '',
      name: '',
    }
  },
  created() {
    const { name, year } = this.$route.params
    this.year = year
    this.name = name

    let items

    if (this.name == 'albums') {
      items = albumsJson
    }
    else if (this.name == 'singles') {
      items = singlesJson
    }
    else if (this.name == 'eps') {
      items = epsJson
    }

    this.current = items.filter(e => e.year == this.year)[0]
    console.log(this.current.list)
  }
}
</script>

<style lang="scss" scoped></style>