import { createApp } from 'vue'
import App from './App.vue'   // if no alias
// or
// import App from '@/views/App.vue'  // if alias is properly set

import router from './router'

createApp(App).use(router).mount('#app')


