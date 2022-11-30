import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return { 
        theme: 'dark' 
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})