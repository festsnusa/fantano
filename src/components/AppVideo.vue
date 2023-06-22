<template lang="pug">
Breadcrumb.breadcrumb(:arr="breadcrumbArr" :title="current.title")
main.review
  .review__right
    .review__header
      h1.review__title {{ current.title }} ({{ current.year }})
      .tags-section
        ul.tags
          li.tag(v-for="tag in current.tags")
            RouterLink(:to="`/tags/${tag}`")
              a-button {{ tag }}
      Toggle.toggle(v-if="filesLoaded == 2" :toggleValue="toggleValue" :checked="en")
      ReviewStar(v-for="n in current.rating" v-show="!isNaN(current.rating)")
    .text-field.multiline
      .markdown__ru(v-show="!en")
      .markdown__en(v-show="en")
  .review__left
    Affix(v-if="isAffix" :current="current")
    VideoSideSection(v-else :current="current")
  
  
</template>

<script>
import ReviewStar from '@/components/ReviewStar.vue'
import Toggle from '@/components/Toggle.vue'
import Affix from '@/components/Affix.vue'
import VideoSideSection from '@/components/VideoSideSection.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

import { useMediaQuery } from '@vueuse/core'
import json from '@/assets/data/main-channel.json'

export default {
  name: "AppVideo",
  components: {
    ReviewStar,
    Toggle,
    Affix,
    VideoSideSection,
    Breadcrumb,
  },
  data() {
    return {
      arr: json.filter(e => e.type == 'review'),
      current: null,
      en: false,
      isLargeScreen: useMediaQuery('(min-width: 1024px)'),
      textEn: '',
      textRu: '',
      filesLoaded: 0,
      isAffix: useMediaQuery('(min-width: 1300px)'),
      breadcrumbArr: [
        { "title": "Home", "link": "/" },
      ],
    }
  },
  computed: {
    calculateWidth() {
      return this.isLargeScreen ? 640 : 400
    }
  },
  methods: {
    toggleValue(value) {
      this.en = value
    },
    updateScreen() {
      this.isLargeScreen = useMediaQuery('(min-width: 1024px)')
    },
    addBreadcrumbLink(type) {
      let obj = {}
      if (type == 'review') {
        obj.title = 'Reviews'
        obj.link = '/videos'
        this.breadcrumbArr.push(obj)
      } else if (type == 'weekly') {
        obj.title = 'Weekly Track Roundups'
        obj.link = '/wtr'
        this.breadcrumbArr.push(obj)
      } else if (type == 'YUNOREVIEW') {
        obj.title = 'YUNOREVIEWs'
        obj.link = '/ynr'
        this.breadcrumbArr.push(obj)
      } else if (type == 'TRACK REVIEW') {
        obj.title = 'TRACK REVIEW'
        obj.link = '/trkrvws'
        this.breadcrumbArr.push(obj)
      } else if (type == 'list-week') {
        obj.title = 'list week'
        obj.link = '/list-week'
        this.breadcrumbArr.push(obj)
      } else if (type == 'podcast') {
        obj.title = 'podcasts'
        obj.link = '/podcasts'
        this.breadcrumbArr.push(obj)
      } else if (type == 'vinyl') {
        obj.title = 'vinyls'
        obj.link = '/vinyls'
        this.breadcrumbArr.push(obj)
      } else if (type == 'other') {
        obj.title = 'other'
        obj.link = '/other'
        this.breadcrumbArr.push(obj)
      }
    },
    stringToHTML(str) {
      let dom = document.createElement('div')
      dom.innerHTML = str
      return dom
    }
  },
  created() {
    this.current = json.filter((e) => e.id == this.$route.params.video)[0]
    this.addBreadcrumbLink(this.current.type)

    import(`@/assets/text/${this.$route.params.video}-en.md`)
      .then((module) => {
        this.textEn = this.stringToHTML(module.default)
        this.en = true
        this.filesLoaded++
        console.log(this.filesLoaded)
        document.querySelector('.markdown__en').appendChild(this.textEn)
        // this.textEn = module.default

      })
      .catch((e) => {
        console.log(e)
      })

    import(`@/assets/text/${this.$route.params.video}-ru.md`)
      .then((module) => {
        this.textRu = this.stringToHTML(module.default)
        this.en = false
        this.filesLoaded++
        console.log(this.filesLoaded)
        document.querySelector('.markdown__ru').appendChild(this.textRu)

      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.breadcrumb {
  padding: 2rem 3rem;
}

.review {
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  &__left,
  &__right {
    width: 100%;
  }

  &__right {
    flex: 70%;
  }

  &__left {
    flex: 30%;
    gap: 3rem;
    display: flex;
    flex-direction: column;
  }
}

.toggle {
  padding: 2rem 0;
}

.text-field {
  // font-family: 'knileregular', 'Programme', 'Montserrat';
  font-size: 1.25rem;
  text-align: justify;

  @media (min-width: 100px) {
    font-size: 0.85rem;
    line-height: 1.2rem;
  }

  @media (min-width: 700px) {
    font-size: 1rem;
    line-height: 2rem;
  }

  // @media (min-width: 1024px) {
  //   font-size: 2rem;
  //   line-height: 3.5rem;
  // }

  // @media (min-width: 1280px) {
  //   font-size: 3rem;
  //   line-height: 4.5rem;
  // }
}

.multiline {
  white-space: pre-wrap;
}

.markdown {
  &__ru {
    font-family: 'PP Neue Machina Inktrap';
  }

  &__en {
    font-family: 'Knile';
  }
}

@media (max-width: 1300px) {
  .review {
    flex-direction: column;

    &__left {
      flex-direction: row;
    }
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