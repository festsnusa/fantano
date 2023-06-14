<template lang="pug">
header.header   
  RouterLink(to="/")
    img.header__logo(src="@/assets/images/fantano-logo.png" alt="#")
  nav
    .header__right
      Dropdown(:arr="arr")
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
export default {
  name: "AppHeader",
  props: ["currentIndex"],
  components: {
    Dropdown
  },
  data() {
    return {
      arr: [
        { "title": "reviews", "link": "videos" },
        { "title": "wtr", "link": "wtr" },
        { "title": "ynr", "link": "ynr" },
        { "title": "list week", "link": "list-week" },
        { "title": "podcasts", "link": "podcasts" },
        { "title": "vinyls", "link": "vinyls" },
        { "title": "trkrvws", "link": "trkrvws" },
        { "title": "other", "link": "other" },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/vars';

.header {

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $darkShade100;
  padding: 3rem;

  &__logo {
    border-radius: 50%;
    max-width: 4rem;
  }

  &__right {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
  }
}

nav {
  text-align: right;
}

.icon {
  color: #fff;
  cursor: pointer;
  transform: scale(1.5);
}

.item {
  text-transform: uppercase;
  font-size: 2rem;
  color: #fff;

  &:hover {
    border-bottom: 1px solid;
  }
}

.active {
  color: $green;
}

@media (max-width: 800px) {
  .list {
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>