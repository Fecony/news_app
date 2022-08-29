import { createApp } from 'vue'
import 'preline';
import App from './App.vue'
import router  from "./router.js";
import store from "./store.js";
import './style.css'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
