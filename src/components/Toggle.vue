<template>
  <div>
    <a-switch v-model:checked="checkedFlag" checked-children="EN" un-checked-children="RU"
      @change="toggleValue(checkedFlag)" />
  </div>
</template>

<script>
export default {
  name: "AppToggle",
  props: ["toggleValue", "checked"],
  data() {
    return {
      checkedFlag: this.checked,
    }
  }
}
</script>

<style lang="scss" scoped></style>