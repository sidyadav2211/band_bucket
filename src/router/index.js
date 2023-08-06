import { createRouter, createWebHistory } from "vue-router";
import HomePage from  '../views/HomePage'
import MensWatch from '../views/MensWatch'
import NotFoundPage from '../views/NotFoundPage'
import MensWatchDetail from '../views/MensWatchDetail'
const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
	},
	{
		path: '/mens-watch',
		name: 'MensWatch',
		component: MensWatch,
	},
	{
		path: '/mens-watch/:id',
		name: 'MensWatchDetail',
        props:true,
		component: MensWatchDetail,
	},
	{
		path: '/:catchAll(.*)',
		component: NotFoundPage,
		name: 'NotFoundPage',
	},
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    mode:'history',
    routes
})

export default router;