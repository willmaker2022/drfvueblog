<template>
    <router-view v-if="isRouterAlive"/>
</template>

<script>
    import Login from './views/Login.vue'
    //为刷新页面而添加
    import {nextTick, provide, ref} from 'vue'
    //为缩放页面而添加
    import DevicePixelRatio from "../utils/devicePixelRatio";

    export default ({
        name: "App",
        components: {
            Login,
        },
        created() {
            new DevicePixelRatio().init();
        },
        setup() {
            const isRouterAlive = ref(true)
            const reload = () => {
                isRouterAlive.value = false
                nextTick(() => {
                    isRouterAlive.value = true
                })
            }
            provide('reload', reload)
            return {
                isRouterAlive
            }
        }
    })
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
        min-width: 1000px;
    }

    html, body, #app {
        height: 100%;
        width: 100%;
    }
</style>
