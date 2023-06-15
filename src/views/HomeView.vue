<template lang="pug">
AppHeader
Breadcrumb.breadcrumb(title="Home")
main
  .reviews
    HomeBlock(title="REVIEWS" link="videos" :arr="reviews")
  .wtr
    HomeBlock(title="WTRs" link="wtr" :arr="wtr")
  .ynr 
    HomeBlock(title="YUNOREVIEWS" link="ynr" :arr="ynr")
  .list-week 

AppFooter
    
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import AppFooter from '@/components/AppFooter.vue'
import HomeBlock from '@/components/HomeBlock.vue'
import AppPreloader from '@/components/AppPreloader.vue'

import json from '@/assets/data/main-channel.json'

export default {
  name: "HomeView",
  components: {
    AppHeader,
    Breadcrumb,
    AppFooter,
    HomeBlock,
    AppPreloader,
  },
  data() {
    return {
      reviews: json.filter(e => e.type == 'review').slice(0, 5),
      wtr: json.filter(e => e.type == 'weekly').slice(0, 5),
      ynr: json.filter(e => e.type == 'YUNOREVIEW').slice(0, 5),
    }
  },
  created() {
    // import('@/assets/data/fantano-channel.json')
    //   .then((module) => {

    //     let arr = module.default
    //     // let id = 1

    //     arr.reverse().forEach(e => {
    //       if (e.title.toLowerCase().includes('track review')) {
    //         e.type = 'TRACK REVIEW'
    //       } else if (e.title.toLowerCase().includes('interview')) {
    //         e.type = 'INTERVIEW'
    //       } else {
    //         e.type = 'other'
    //       }

    //     })

    //     console.log(arr.reverse())
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  }
}
</script>

<style lang="scss" scoped>
.reviews,
.wtr,
.ynr,
.list-week {
  padding: 0 3rem;
}

.breadcrumb {
  padding: 2rem 3rem;
}
</style>