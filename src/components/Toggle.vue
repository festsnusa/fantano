<template>
  <div>
    <a-switch v-model:checked="checkedFlag" checked-children="EN" un-checked-children="RU"
      @change="toggleValue(checkedFlag)" />
  </div>
</template>

<script lang="ts">
export default {
  name: "AppToggle",
  props: ["toggleValue", "checked"],
  data() {
    return {
      checkedFlag: this.checked as boolean,
    }
  }
}
</script>

<style lang="scss" scoped></style>