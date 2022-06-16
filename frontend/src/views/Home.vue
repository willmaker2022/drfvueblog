<!--  frontend/src/views/Home.vue  -->

<template>
    <el-container :style="{ height: clientHeight +'px' }">
        <el-header>
            <el-col :span="4" class="header_left">
                <img class="myimg" :src="logourl">&nbsp;
                <a href="http://www.insaoptics.com/">荧飒光学</a>
            </el-col>
            <el-col :span="16" class="header_div">
                <el-menu
                        background-color="#95d475"
                        :router="true"
                        :ellipsis="false"
                        mode="horizontal">
                    <el-sub-menu index="product" popper-class="el-popper">
                        <template #title>
                            <span class="sub-menu-font">生产计划</span>
                        </template>
                        <el-menu-item index="product">订单管理</el-menu-item>
                        <el-menu-item index="elsta">电路板状态</el-menu-item>
                        <el-menu-item index="scsta">干涉仪状态</el-menu-item>
                        <el-menu-item index="mesta">机械件状态</el-menu-item>
                        <el-menu-item index="assta">装配状态</el-menu-item>
                        <el-menu-item index="tssta">测试状态</el-menu-item>
                        <el-menu-item index="swsta">软件状态</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="service" popper-class="el-popper">
                        <template #title>
                            <span class="sub-menu-font">维修记录</span>
                        </template>
                        <el-menu-item index="service">维修记录</el-menu-item>
                        <el-menu-item index="batchno">编号生成</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="storage" popper-class="el-popper">
                        <template #title>
                            <span class="sub-menu-font">库存管理</span>
                        </template>
                        <el-menu-item index="storage">库存表</el-menu-item>
                        <el-menu-item index="outstorage">出库记录</el-menu-item>
                        <el-menu-item index="instorage">入库记录</el-menu-item>
                        <el-menu-item index="buystorage">购买记录</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-col>
            <el-col class="welcome" :span="4">
                <span v-if="hasLogin">欢迎，{{ username }}  &nbsp;&nbsp;</span>
                <div>
                    <el-button type="primary" @click.prevent="loginOut()">退出</el-button>
                </div>
            </el-col>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                logourl: require('@/assets/logo1.png'),
                hasLogin: true,
                username: '',
                clientHeight: document.body.clientHeight
            }
        },
        mounted() {
            const that = this;
            const storage = localStorage;
            // 过期时间
            const expiredTime = Number(storage.getItem('expiredTime.product'));
            // 当前时间
            const current = (new Date()).getTime();
            // 刷新令牌
            const refreshToken = storage.getItem('refresh.product');
            // 用户名
            that.username = storage.getItem('username.product');

            // 初始 token 未过期
            if (expiredTime > current) {
                that.hasLogin = true;
            }
                // 初始 token 过期
            // 如果有刷新令牌则申请新的token
            else if (refreshToken !== null) {
                axios
                    .post('/api/token/refresh/', {
                        refresh: refreshToken,
                    })
                    .then(function (response) {
                        const nextExpiredTime = Date.parse(response.headers.date) + 60000;
                        storage.setItem('access.product', response.data.access);
                        storage.setItem('expiredTime.product', nextExpiredTime);
                        storage.removeItem('refresh.product');
                        that.hasLogin = true;
                    })
                    .catch(function () {
                        // .clear() 清空当前域名下所有的值
                        // 慎用
                        storage.clear();
                        that.hasLogin = false;
                    })
            }
            // 无任何有效 token
            else {
                storage.clear();
                that.hasLogin = false;
                this.$router.push({name: 'Login'})
            }
            window.onresize = () => {
                return (() => {
                    window.screenHeight = document.body.clientHeight
                    that.clientHeight = window.screenHeight
                })()
            }
        },
        methods: {
            loginOut() {
                localStorage.clear();
                this.hasLogin = false;
                this.$router.push({name: 'Login'})
            }
        },
        // mounted() {
        //     const that = this
        //
        // },
        watch: {
            clientHeight(val) {
                // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
                if (!this.timer) {
                    // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                    this.clientHeight = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // 打印screenWidth变化的值
                        console.log(that.clientHeight)
                        that.timer = false
                    }, 400)
                }
            }
        }
    }
</script>

<style scoped="scoped">
    /*.home_content {*/
    /*    background: antiquewhite;*/
    /*    height: 100%;*/
    /*}*/

    .el-header {
        background: #95d475;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        line-height: 60px;
        font-size: 14px;
        vertical-align: middle;
    }

    .el-main {
        /*height: 100%;*/
        background: rgb(234, 237, 241);
        padding: 0px;
    }

    .welcome {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        vertical-align: middle;
        font-size: 14px;
    }

    .sub-menu-font {
        font-size: 14px;
    }

    .el-menu-item {
        font-size: 14px;
    }

    .header_left {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
    }

    .header_left >>> .myimg {
        width: 70px;
        height: 40px;
        border-radius: 4px;
    }

    /*.el-card {*/
    /*    height: 100%;*/
    /*}*/

    .el-container {
        height: 100%;
    }

</style>