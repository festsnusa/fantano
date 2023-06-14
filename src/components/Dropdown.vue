<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      NAVIGATE
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item v-for="(item, index) in arr" :key="index">
          <RouterLink :to="`/${item.link}`">{{ item.title.toUpperCase() }}</RouterLink>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: "AppDropdown",
  props: ["arr"],
  components: {
    DownOutlined,
  },
});
</script>