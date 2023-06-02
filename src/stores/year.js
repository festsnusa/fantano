import { defineStore } from 'pinia'

export default defineStore('year', {
  state: () => {
    return {
      currentYear: '',
    };
  },
  persist: true,
})