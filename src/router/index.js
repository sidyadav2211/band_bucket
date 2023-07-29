import { createRouter, createWebHistory } from "vue-router";
import HomePage from  '../views/HomePage'
import MensWatch from '../views/MensWatch'
import NotFoundPage from '../views/NotFoundPage'

const routes = [
    {
        path:'/',
        name:'HomePage',
        component:HomePage,
    },
    {
        path:'/mens-watch',
        name: 'MensWatch',
        component:MensWatch
    },
    {
        path:'/:catchAll(.*)',
        component: NotFoundPage,
        name:'NotFoundPage'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    mode:'history',
    routes
})

export default router;