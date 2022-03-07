import { createApp } from 'vue'
import App from './App.vue'

// Plugins
import quasar from './plugins/quasar'
import VueScreen from 'vue-screen'

// Import icon libraries
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

import 'quasar/src/css/index.sass'

import router from './router'

// Import global styles
import './styles/index.scss'

createApp(App).use(router).use(quasar).use(VueScreen, 'bootstrap').mount('#app')
