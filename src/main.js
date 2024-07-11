import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { apiPlugin } from "./components/utils/api";
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apiPlugin)
app.use(VueSweetalert2)
app.mount('#app')

window.addEventListener("message", (ev)=> {
    if (ev.data == "login-expirado") {
      app.$router.push({ name: "ErroAutenticacao" })
    }
  });