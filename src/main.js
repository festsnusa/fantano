import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import Markdown from 'vue3-markdown-it'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSortDown } from '@fortawesome/free-solid-svg-icons'
library.add(faSortDown)

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(Markdown)

app.mount('#app')
