
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// import "./assets/frontend/assets/css/rtl.css";
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/animate.min.css"
import "./assets/css/owl-carousel.min.css"
import "./assets/css/font-electro.min.css"
import "./assets/css/style.css"
import "./assets/css/colors/yellow.css"


// import "./assets/js/jquery.min.js"
// import "./assets/js/tether.min.js"
// import "./assets/js/bootstrap.min.js"
// import "./assets/js/bootstrap-hover-dropdown.min.js"
// import "./assets/js/owl.carousel.min.js"
// import "./assets/js/echo.min.js"
// import "./assets/js/wow.min.js"
// import "./assets/js/jquery.easing.min.js"
// import "./assets/js/jquery.waypoints.min.js"
// import "./assets/js/electro.js"



const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

