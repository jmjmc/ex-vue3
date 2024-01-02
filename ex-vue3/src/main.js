import './assets/main.css'
import './assets/dist/css/bootstrap.min.css'
import './assets/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import {createPinia} from 'pinia' // 피니아 설치 : npm install pinia
import App from './App.vue'
import router from '@/components/router' // 라우터 설치 : npm install vue-router

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(App);
app.mount('#app');
