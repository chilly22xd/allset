import {createRouter, createWebHistory} from "vue-router";
import Home from '../components/home.vue';
import AboutUs from "../components/aboutUs.vue";
import Services from "../components/services.vue";
import Blog from "../components/blog.vue";

const routes = [
    {path: '/allset/', component: Home},
    {path: '/about',component: AboutUs},
    {path: '/services',component: Services},
    {path: '/blog',component: Blog}
];

const router = createRouter({
    history:createWebHistory(),routes
});

export default router;