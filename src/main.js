import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

// import store from '../src/stores/authStore'
import Toaster from "@meforma/vue-toaster"
import Paginate from "vuejs-paginate-next"
import VueApexCharts from "vue3-apexcharts"

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)

app.use(pinia)
app.use(router)
// app.use(store)
app.use(Toaster)
app.use(Paginate)
app.use(VueApexCharts)

app.mount('#app')
