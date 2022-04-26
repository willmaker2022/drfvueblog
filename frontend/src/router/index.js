// frontend/src/router/index.js
// import Vue from 'vue';
import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue";
import Login from "../views/Login";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
        redirect: '/home/product',
        meta: {
            title: "荧飒光学"
        },
        children: [
            {
                path: 'elsta',
                name: 'elsta',
                component: () => import("../components/elsta"),
                meta: {
                    title: "电路板状态"
                },
            },
            {
                path: 'product',
                name: 'product',
                component: () => import("../components/product"),
                meta: {
                    title: "订单管理"
                },
            },
            {
                path: 'scsta',
                name: 'scsta',
                component: () => import("../components/scsta"),
                meta: {
                    title: "干涉仪状态"
                },
            },
            {
                path: 'mesta',
                name: 'mesta',
                component: () => import("../components/mesta"),
                meta: {
                    title: "机械件状态"
                },
            },
            {
                path: 'assta',
                name: 'assta',
                component: () => import("../components/assta"),
                meta: {
                    title: "调试状态"
                },
            },
            {
                path: 'tssta',
                name: 'tssta',
                component: () => import("../components/tssta"),
                meta: {
                    title: "测试状态"
                },
            },
            {
                path: 'swsta',
                name: 'swsta',
                component: () => import("../components/swsta"),
                meta: {
                    title: "软件状态"
                },
            },
            {
                path: 'service',
                name: 'service',
                component: () => import("../components/service"),
                meta: {
                    title: "维修报告"
                },
            },
            {
                path: 'storage',
                name: 'storage',
                component: () => import("../components/storage"),
                meta: {
                    title: "库存管理"
                },
            },
            {
                path: 'outstorage',
                name: 'outstorage',
                component: () => import("../components/outstorage"),
                meta: {
                    title: "出库记录"
                },
            },
            {
                path: 'instorage',
                name: 'instorage',
                component: () => import("../components/instorage"),
                meta: {
                    title: "入库记录"
                },
            },
            {
                path: 'buystorage',
                name: 'buystorage',
                component: () => import("../components/buystorage"),
                meta: {
                    title: "购买记录"
                },
            },
            {
                path: 'batchno',
                name: 'batchno',
                component: () => import("../components/batchno"),
                meta: {
                    title: "编号生成"
                },
            },
        ]
    },
    {
        path: "/",
        name: "Login",
        component: Login,
        meta: {
            title: "荧飒光学"
        }
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes, // `routes: routes` 的缩写
})

router.beforeEach((to, form, next) => {
    if (to.path === '/') {
        next()
    } else {
        const token = localStorage.getItem('username.product');
        if (!token) {
            next('/')
        } else {
            next()
        }
    }
})

export default router;