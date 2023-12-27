import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/views/HomeView.vue';
import AboutView from '@/components/views/AboutView.vue';
import ClimViewVue from '../views/ClimView.vue';

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
    },
     {
        path: '/clim',
        name: 'ClimView',
        component: ClimViewVue,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
