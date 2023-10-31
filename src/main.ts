import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import('preline');


import './assets/css/index.css'

createApp(App).use(router).mount('#app')
