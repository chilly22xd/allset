import {createRouter, createWebHistory} from "vue-router";
import Home from '../components/home.vue';
import AboutUs from "../components/aboutUs.vue";
import Services from "../components/services.vue";
import Contact from "../components/contact.vue";
import HireUS from "../components/home/Section5.vue"

const routes = [
    {path: '/allset/', component: Home},
    {path: '/allset/about',component: AboutUs},
    {path: '/allset/services',component: Services},
    {path: '/allset/contact',component: Contact},
    {path: '/allset/hireus',component: HireUS},
];

const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior( to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }

    }
});

export default router;