function interceptors() {
    const config = setting => setting
    const error = erro => {
      const invalidToken = "Token expirado" // Mensagem de erro que será comparada com a mensagem de erro da API
      const extractMessage = erro?.response?.data?.message || null
      const message = extractMessage
  
      if( invalidToken.match(message) ) {
        window.localStorage.removeItem("auth_token")
        // Este evento será usado para redirecionar a rota no caso de falta de autorização por token expirado em qualquer chamada de requisição do usuário
        window.postMessage("login-expirado") 
      }
      return Promise.reject(erro.response)
    }
  
    return {config, error}
  }

  //api.js
import axios from 'axios';
const urlApi = 'https://geoparque-spring.onrender.com/'
const api = () => {
  const token = window.localStorage.getItem("auth_token")
  
  //inicializamos nosso axios e suas configurações
  const configAxios = axios.create({
    baseURL: urlApi,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ... token ?  { 'Authorization' : `Bearer ${token}` } : {},
    },
  })
  
  //Alteramos as configurações customizadas dos interceptadores
  const { config, error } = interceptors()
  configAxios.interceptors.response.use(config, error)

  return configAxios
}
export const apiPlugin = {
    install(app, options) {
      app.config.globalProperties.$api = api
    }
  }