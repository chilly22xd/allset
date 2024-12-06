import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import App from './App.vue'
import 'aos/dist/aos.css'
import Aos from 'aos'

Aos.init({
    duration: 900,
    once: false
})

const app = createApp(App)
app.use(router)
app.mount('#app')