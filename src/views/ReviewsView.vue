<template lang="pug">
AppHeader(:currentIndex="1")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: "ReviewsView",
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="scss" scoped></style>