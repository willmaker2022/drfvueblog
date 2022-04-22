// frontend/src/router/index.js
// import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Login from "../views/Login";

const routes =[
    {
        path: "/home",
        name: "Home",
        component: Home,
        redirect: '/home/product',
        children:[
            {
                path: 'elsta',
                name: 'elsta',
                component:()=>import("../components/elsta")
            },
            {
                path: 'product',
                name: 'product',
                component:()=>import("../components/product")
            },
            {
                path: 'scsta',
                name: 'scsta',
                component:()=>import("../components/scsta")
            },
            {
                path: 'mesta',
                name: 'mesta',
                component:()=>import("../components/mesta")
            },
            {
                path: 'assta',
                name: 'assta',
                component:()=>import("../components/assta")
            },
            {
                path: 'tssta',
                name: 'tssta',
                component:()=>import("../components/tssta")
            },
            {
                path: 'service',
                name: 'service',
                component:()=>import("../components/service")
            },
            {
                path: 'storage',
                name: 'storage',
                component:()=>import("../components/storage")
            },
            {
                path: 'outstorage',
                name: 'outstorage',
                component:()=>import("../components/outstorage")
            },
            {
                path: 'instorage',
                name: 'instorage',
                component:()=>import("../components/instorage")
            },
            {
                path: 'buystorage',
                name: 'buystorage',
                component:()=>import("../components/buystorage")
            },
            {
                path: 'batchno',
                name: 'batchno',
                component:()=>import("../components/batchno")
            },
        ]
    },
    {
        path: "/",
        name: "Login",
        component: Login,
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes:routes, // `routes: routes` 的缩写
})

router.beforeEach((to,form,next)=>{
    if(to.path ==='/'){
        next()
    }
    else{
        const token = localStorage.getItem('username.product');
        if(!token){
            next('/')
        }else{
            next()
        }
    }
})

export default router;