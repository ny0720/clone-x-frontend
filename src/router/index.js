import DemoPage from "@/views/DemoPage.vue"
import LifeCycle from "@/views/LifeCycle.vue";
import LoginPage from "@/views/LoginPage.vue";
import MainPage from "@/views/MainPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";

import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LoginPage
        },
        {
            path: '/demo',
            component: DemoPage
        },
        {
            path: '/Login',
            component: LoginPage
        },
        {
            path: '/Life',
            component: LifeCycle
        },
        {
            path: '/signup',
            component: SignUpPage
        },
        {
            path: '/main',
            component: MainPage
        }
    ]
})

export default router