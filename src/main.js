import { createApp } from 'vue'
import App from './App.vue'
import ljyUI from '../dist/ljy-ui.umd.js'
import '../dist/ljy-ui.css'
createApp(App).use(ljyUI).mount('#app')
