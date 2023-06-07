<template lang="pug">
header.header   
  RouterLink(to="/")
    img.header__logo(src="@/assets/images/fantano-logo.png" alt="#")
  nav
    ul.list 
      RouterLink(:to="{ name: item.link }" v-for="(item, index) in arr") 
        li.item(:class="{active: currentIndex == index}") {{item.title}}
</template>

<script>
export default {
  name: "AppHeader",
  props: ["currentIndex"],
  data() {
    return {
      arr: [
        { "title": "home", "link": "home" },
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
}

.list {
  display: flex;
  gap: 2rem;
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