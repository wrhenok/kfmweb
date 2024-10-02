import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'
const pinia = createPinia()// 挂载

pinia.use(piniaPersistedState)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

const app = createApp(App)

// 全局都可以使用axios
// app.config.globalProperties.axios = axios
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
