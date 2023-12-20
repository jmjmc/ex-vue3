import './assets/main.css'
import './assets/dist/css/bootstrap.min.css'
import './assets/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/components/router'

const app = createApp(App);
app.use(router);
app.use(App);
app.mount('#app');
