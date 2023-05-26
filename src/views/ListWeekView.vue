<template lang="pug">
AppHeader(:currentIndex="4")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: "ListWeekView",
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="scss" scoped></style>