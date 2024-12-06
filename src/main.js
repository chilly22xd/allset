import { createApp } from 'vue'
import './style.css'
import router from './router/index.js'
import App from './App.vue'
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init({
    duration: 900,
    once:false
});

const app = createApp(App)
app.use(router)
app.mount('#app')