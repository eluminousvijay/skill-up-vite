
<template>
  <RouterView />
  <!-- <HomeView /> -->
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import {useStore} from '../src/stores/authStore'
import axios from 'axios'

export default {
  created() {
    let useData = useStore()
    let token = useData.tokens
    if (token) {
      axios.interceptors.request.use(function (config) {
        if (token) {
          // console.log(JSON.parse(token).access_token)
          // config.headers.authorization = 'Bearer ' + JSON.parse(token).access_token
          config.headers.authorization = 'Bearer ' + token
          config.headers.accept = 'application/json'
        }
        return config
      })
    }
   },

}
</script>


