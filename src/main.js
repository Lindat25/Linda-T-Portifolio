import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Add Font Awesome for icons
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
document.head.appendChild(link)

// 🛠️ FIX: Create app, use router, then mount
const app = createApp(App)
app.use(router) // ✅ You must call this BEFORE mounting
app.mount('#app')
