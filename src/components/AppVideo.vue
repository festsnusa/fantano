<template lang="pug">
Breadcrumb.breadcrumb(:arr="breadcrumbArr" :title="current.title")
main.review
  .review__right
    .review__header
      h1.review__title {{ current.title }} ({{ current.year }})
      ul.tags
        li.tag(v-for="tag in current.tags")
          RouterLink(:to="`/tags/${tag.toLowerCase()}`")
            a-button {{ tag.toLowerCase() }}
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
import { downloadFile, getYoutubeCaption } from '@/includes/helper'

export default {
  name: "AppVideo",
  components: {
    ReviewStar,
    Toggle,
    Affix,
    VideoSideSection,
    Breadcrumb,
  },
  inject: ["json"],
  data() {
    return {
      arr: this.json.filter(e => e.type == 'review'),
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
    },
    // async getYoutubeCaption() {
    //   const apiKey = 'AIzaSyCetglNoZRO6IU3JBIhlmIneiHFef2Q4tM'
    //   const videoId = extractVideoID(this.current.video)

    //   const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

    //   await fetch(apiUrl)
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     })
    //     .then(data => {
    //       const video = data.items[0];
    //       const description = video.snippet.description;
    //       // Process the description as needed
    //       this.textEn = description
    //       document.querySelector('.markdown__en').innerHTML = this.textEn
    //       this.en = true
    //       this.filesLoaded++
    //     })
    //     .catch(error => {
    //       console.error('Error fetching video description:', error);
    //     });
    // }
  },
  async created() {
    this.current = this.json.filter((e) => e.id == this.$route.params.video)[0]
    this.addBreadcrumbLink(this.current.type)

    let englishText = downloadFile(`${this.$route.params.video}-en`)

    englishText.then(data => {

      if (data !== '') {
        this.textEn = data
        this.en = true
        this.filesLoaded++
        document.querySelector('.markdown__en').innerHTML = this.textEn
      } else {
        let result = getYoutubeCaption(this.current.video)
        result.then(captionData => {

          if (captionData !== undefined) {
            this.textEn = captionData
            this.en = true
            this.filesLoaded++
            document.querySelector('.markdown__en').innerHTML = this.textEn
          }

        }).catch(error => {
          console.log(error); // Handle any errors that might occur during getYoutubeCaption
        });
      }

    })
      .catch((e) => {
        console.log(e)
      })

    let russianText = downloadFile(`${this.$route.params.video}-ru`)

    russianText.then(data => {

      if (data !== '') {
        this.textRu = data
        this.en = false
        this.filesLoaded++
        document.querySelector('.markdown__ru').innerHTML = this.textRu
      } else {
        throw new Error("Not found")
      }

    })
      .catch((e) => {
        console.log(e)
      })



    // console.log(this.textEn)

    // import(`@/assets/text/${this.$route.params.video}-en.md`)
    //   .then((module) => {
    //     this.textEn = this.stringToHTML(module.default)
    //     this.en = true
    //     this.filesLoaded++
    //     document.querySelector('.markdown__en').appendChild(this.textEn)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })

    // import(`@/assets/text/${this.$route.params.video}-ru.md`)
    //   .then((module) => {
    //     this.textRu = this.stringToHTML(module.default)
    //     this.en = false
    //     this.filesLoaded++
    //     document.querySelector('.markdown__ru').appendChild(this.textRu)

    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
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
    font-size: 1.1rem;
    line-height: 2.1rem;
  }

}

.multiline {
  white-space: pre-wrap;

  ::selection {
    background-color: #FEE27B;
    color: black;
  }
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