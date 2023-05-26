<template lang="pug">
footer.footer
  ul.list 
    a(href="https://vk.com/mbdtfisstill6" target="_blank") 
      li.item VK
</template>

<script>
export default {
  name: "AppFooter",
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.footer {
  background-color: $darkShade50;
}
</style>