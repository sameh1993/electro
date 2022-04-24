
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


import "font-awesome/css/font-awesome.min.css"


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

