<template lang="pug">
h2.title Random Reviews
a-carousel(arrows dots-class="slick-dots slick-thumb")
  template(#customPaging="props")
    a
      img(:src="getImgUrl(props.i)")
  .carousel(v-for="item in reviews" :key="item.id")
    .carousel__left
      img(:src="item.image" :alt="item.title")
    .carousel__right
      RouterLink(:to="`/videos/${item.id}`")
        h1.carousel__title {{ item.title }}
      .links
        a(:href="link.source" target="_blank" v-for="link in item.externalLinks") 
          a-button {{ link.title }}
      .text-field.multiline {{ captions[item.id] || "Loading..."}}
</template>

<script>
import { getYoutubeCaption } from '@/includes/helper'

export default {
  name: "CarouselApp",
  inject: ["json"],
  data() {
    return {
      reviews: this.json.sort(() => 0.5 - Math.random()).filter(e => e.type === 'review').slice(0, 10),
      captions: {}
    }
  },
  methods: {
    getImgUrl(i) {
      return this.reviews[i].image;
    },
    async getCaption(video) {

      try {
        const captionData = await getYoutubeCaption(video)
        if (captionData !== undefined) {
          return captionData
        }
      } catch (error) {
        console.log(error)
        return ""
      }
    },
    async loadCaptions() {
      for (const item of this.reviews) {
        const caption = await this.getCaption(item.video)
        this.captions[item.id] = caption
      }
    },
  },
  created() {
    this.loadCaptions()
  }
}

</script>
<style scoped lang="scss">
.carousel {
  display: flex !important;
  max-height: 35rem;

  &__title {
    text-decoration: underline;
  }
}

.links {
  display: flex !important;
  gap: 1rem !important;
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
  white-space: pre-line;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 200px;

  ::selection {
    background-color: #FEE27B;
    color: black;
  }
}

.title {
  text-transform: uppercase;
}

/* For demo */
.ant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}

.ant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}

.ant-carousel :deep(.slick-arrow) {
  display: none !important;
}

.ant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}

.ant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}

.ant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}

.ant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>