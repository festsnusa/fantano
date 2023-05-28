<template lang="pug">
h1.title {{ title }}
  RouterLink.thumbnail(v-for="item in data" 
    :to="{ name: 'list-post', params: { name: title, year: item.year} }"
    )
    img.thumbnail__img(:src="item.imgSrc" :alt="item.year")
    span.thumbnail__caption {{ item.year }}
</template>

<script>
export default {
  name: "AppThumbnail",
  props: ["title", "data"],
}
</script>

<style lang="scss" scoped></style>