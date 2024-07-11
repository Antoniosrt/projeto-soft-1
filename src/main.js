import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { apiPlugin } from "./components/utils/api";
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apiPlugin)
app.mount('#app')

window.addEventListener("message", (ev)=> {
    if (ev.data == "login-expirado") {
      app.$router.push({ name: "ErroAutenticacao" })
    }
  });