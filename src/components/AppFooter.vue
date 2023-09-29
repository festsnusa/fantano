<template lang="pug">
footer.footer
  ul.list 
    a(href="https://vk.com/mbdtfisstill6" target="_blank") 
      li.item
        img.image(src="@/assets/images/vk.png")
  p.text Copyright © 2023 The Needle Drop
</template>

<script lang="ts">
export default {
  name: "AppFooter",
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.footer {
  background-color: $darkShade100;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: sticky;
  // bottom: 0;
  width: 100%;
}

.text {
  color: #fff;
  text-align: end;
}

.image {
  max-width: 3rem;
}
</style>