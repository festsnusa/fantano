<template lang="pug">
a-carousel(arrows dots-class="slick-dots slick-thumb")
  template(#customPaging="props")
    a
      img(:src="getImgUrl(props.i)")
  .carousel(v-for="item in reviews" :key="item.id")
    .carousel__left
      img(:src="item.image")
    .carousel__right
      RouterLink(:to="`/videos/${item.id}`")
        h1 {{ item.title }}
      div.carousel__links(v-for="link in item.externalLinks")
        a(:href="link.source" target="_blank") 
          a-button {{ link.title }}

</template>

<script>
// import json from '@/assets/data/main-channel.json'

export default {
  name: "CarouselApp",
  inject: ["json"],
  data() {
    return {
      reviews: this.json.sort(() => 0.5 - Math.random()).filter(e => e.type === 'review').slice(0, 10),
    }
  },
  methods: {
    getImgUrl(i) {
      return this.reviews[i].image;
    }
  }
}

</script>
<style scoped>
.carousel {
  display: flex !important;

  &__links {
    display: flex !important;
  }
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