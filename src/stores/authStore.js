import { defineStore } from 'pinia'
import userAPI from "../api/user";

export const useStore = defineStore('store', {
  state: () => {
    return {
      authUser: null,
      tokens: null,
      isAuthenticated: false
    }
  },
  actions: {
    userData(data) {
      this.tokens = data.access_token
      this.authUser = data
      this.isAuthenticated = true
    },

  },
  persist: {
    enabled: true
  }
})

