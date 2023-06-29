<template lang="pug">
.header 
  h2.header__title {{title}}
  RouterLink(:to="`/${link}`")
    a-button(type="dashed") Show all
AppContent(:arr="arr" contentCount=5)
</template>

<script>
import AppPreloader from '@/components/AppPreloader.vue'
import AppContent from '@/components/AppContent.vue'

export default {
  name: "HomeBlock",
  props: ["title", "link", "arr"],
  components: {
    AppContent,
    AppPreloader,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;

  h2 {
    margin-bottom: 0;
  }

  a {
    color: #000;
  }

  &__show {
    &:hover {
      border-bottom: 1px solid $green;
    }
  }
}
</style>