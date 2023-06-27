import './assets/main.scss'
import 'ant-design-vue/dist/antd.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import json from '@/assets/data/main-channel.json'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Antd from 'ant-design-vue'

import { faSortDown } from '@fortawesome/free-solid-svg-icons'
library.add(faSortDown)

async function initializeApp() {
  try {
    const app = createApp(App)

    const pinia = createPinia()
    pinia.use(piniaPluginPersistedState)

    app.component('font-awesome-icon', FontAwesomeIcon)

    app.use(pinia)
    app.use(router)
    app.use(VueAxios, axios)
    app.use(Antd)

    app.provide('json', json)

    app.mount('#app')

  } catch (error) {
    console.error('Failed to initialize app:', error)
  }
}

initializeApp();
