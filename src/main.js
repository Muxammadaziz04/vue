import { createApp, } from 'vue'
import App from './App.vue'
import { VuelidatePlugin } from '@vuelidate/core'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
    .use(VuelidatePlugin)
    .mount('#app')
