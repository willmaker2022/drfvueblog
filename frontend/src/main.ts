import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import axios from "axios";
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.use(ElementPlus, {
    locale:zhCn,
})
app.use(router)
app.mount('#app')


// axios.interceptors.request.use(config=>{
//     console.log(config)
//     return config;
// })
