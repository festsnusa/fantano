import { defineStore } from 'pinia'

export default defineStore('rating', {
  state: () => {
    return {
      currentRating: '',
    };
  },
  // persist: true,
  persist: {
    storage: sessionStorage,
  },
})