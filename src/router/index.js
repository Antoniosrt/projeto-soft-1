import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/curiosidades',
        name: 'Curiosidades',
        component: () => import('../views/PuzzlePage.vue')
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router