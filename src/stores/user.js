import {useStore} from '../stores/authStore'



const storeData = useStore()


const getters = {
  oauthTokens () {
      return storeData.tokens
  },
  currentUser () {
      return storeData.authUser
  },
  isAuthenticated() {
      return storeData.isAuthenticated;
  },
}

export default {
  getters
}