import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import NewsPage from "./pages/NewsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/news/:slug', name: 'news', component: NewsPage },
    ],
});

export default router;
