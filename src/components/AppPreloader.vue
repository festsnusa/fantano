<template lang="pug">
.preloader(:style="cssVars")
  span(:class="`rot-${n}`" v-for="n in 8")
</template>

<script lang="ts">
export default {
  name: 'AppPreloader',
  props: {
    color: {
      type: String,
      default: '#41b883',
    },
    scale: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color,
        '--scale': this.scale,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.preloader {
  position: relative;
  width: 125px;
  // max-width: 19rem;
  height: 125px;
  margin: auto;
  transform: scale(var(--scale));

  span {
    position: absolute;
    background-color: transparent;
    height: 22px;
    width: 22px;
    border-radius: 12px;
    animation-name: f_fadeG;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }
}

.rot-1 {
  left: 0;
  top: 51px;
  animation-delay: 0.45s;
}

.rot-2 {
  left: 15px;
  top: 15px;
  animation-delay: 0.6s;
}

.rot-3 {
  left: 51px;
  top: 0;
  animation-delay: 0.75s;
}

.rot-4 {
  right: 15px;
  top: 15px;
  animation-delay: 0.9s;
}

.rot-5 {
  right: 0;
  top: 51px;
  animation-delay: 1.05s;
}

.rot-6 {
  right: 15px;
  bottom: 15px;
  animation-delay: 1.2s;
}

.rot-7 {
  left: 51px;
  bottom: 0;
  animation-delay: 1.35s;
}

.rot-8 {
  left: 15px;
  bottom: 15px;
  animation-delay: 1.5s;
}

@keyframes f_fadeG {
  0% {
    background-color: var(--color);
  }

  100% {
    background-color: transparent;
  }
}
</style>