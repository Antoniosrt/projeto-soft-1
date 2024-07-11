import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            
                {
                    path: '/puzzle',
                    name: 'Puzzle',
                    component: () => import('../views/CadastroPuzzle.vue')
                },
                {
                    path: '/puzzle-list',
                    name: 'PuzzleList',
                    component: () => import('../views/ListarPuzzle.vue')
                },
            ]
    },
    {
        path: '/curiosidades',
        name: 'Curiosidades',
        component: () => import('../views/PuzzlePage.vue')
    },

    {
        path: '/unauthorized',
        name: 'ErroAutenticacao',
        component: () => import('../views/Unauthorized.vue')
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})
const withoutAuthorization = [
    "ErroAutenticacao",
    'Home',
    'Curiosidades',
    "Login"
  ]
router.beforeEach((to, from, next) => {
    let token = window.localStorage.getItem("auth_token")
    
    // Se a rota não precisa de autorização ou o token existe, então a navegação é permitida

    if( withoutAuthorization.includes(to.name) || token ) {
      next()
    } else {
      next({ name: "ErroAutenticacao" })
    }
  })
  

export default router