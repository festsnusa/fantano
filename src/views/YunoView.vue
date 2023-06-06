<template lang="pug">
AppHeader(currentIndex="3")
AppVideos(type="YUNOREVIEW" :years="years")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppVideos from '../components/AppVideos.vue'

export default {
  name: "YunoView",
  components: {
    AppHeader,
    AppFooter,
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