import {createRouter, createWebHistory} from "vue-router";
import Home from '../components/home.vue';
import AboutUs from "../components/aboutUs.vue";
import Services from "../components/services.vue";
import Blog from "../components/blog.vue";

const routes = [
    {path: 'allset/', component: Home},
    {path: 'allset/about',component: AboutUs},
    {path: 'allset/services',component: Services},
    {path: 'allset/blog',component: Blog}
];

const router = createRouter({
    history:createWebHistory(),routes
});

export default router;