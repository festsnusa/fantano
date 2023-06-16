<template lang="pug">
AppHeader(currentIndex="2")
AppVideos(type="YUNOREVIEW" :years="years" title="YUNOREVIEWs")
a-back-top
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppVideos from '../components/AppVideos.vue'

export default {
  name: "YunoView",
  components: {
    AppHeader,
    AppVideos,
  },
  data() {
    return {
      years: [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]
    }
  }
}
</script>

<style lang="scss" scoped></style>