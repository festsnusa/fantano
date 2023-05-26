<template lang="pug">
AppHeader(:currentIndex="2")
AppFooter
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: "WeeklyRoundupView",
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style lang="scss" scoped></style>