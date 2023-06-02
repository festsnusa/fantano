import { defineStore } from 'pinia'

export default defineStore('page', {
  state: () => {
    return {
      currentPage: 1,
    };
  },
  persist: true,
})