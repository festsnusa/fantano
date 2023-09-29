<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, index) in arr" :key="index">
      <Router-Link :to="item.link">{{ item.title }}</Router-Link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      {{ title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
export default {
  name: "AppBreadcrumb",
  props: ["arr", "title"],
}
</script>

<style lang="scss" scoped></style>