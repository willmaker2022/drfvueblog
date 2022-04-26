<!-- frontend/src/views/Login.vue -->

<template>
    <div class="login">
        <div class="login_box">
            <div class="login_logo">
                <img :src="logourl"/>
            </div>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRul" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" autocomplete="off"
                              placeholder="请输入密码"
                              v-model="loginForm.password"></el-input>
                </el-form-item>
                <div class="btns">
                    <el-form-item>
                        <el-button type="primary" @click="login">登录</el-button>
                        <el-button type="info" @click="registerVisible = true">注册</el-button>
                    </el-form-item>
                </div>

            </el-form>
        </div>
        <!--    添加产品订单对话框-->
        <el-dialog
                v-model="registerVisible"
                title="注册新用户"
                width="30%"
        >
            <el-form
                    ref="addFormRef"
                    :model="addForm"
                    :rules="addFormRul"
                    label-width="300px"
                    class="addForm"
            >
                <el-row>
                    <el-form-item label="请输入用户名" prop="addusername" label-width="120px">
                        <el-input v-model="addForm.addusername"></el-input>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="请输入密码" prop="addpassword" label-width="120px">
                        <el-input type="password" v-model="addForm.addpassword"></el-input>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="请再输入密码" prop="addpassword2" label-width="120px">
                        <el-input type="password" v-model="addForm.addpassword2"></el-input>
                    </el-form-item>
                </el-row>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="registerVisible = false">取消</el-button>
                <el-button type="primary" @click="addUser">确定</el-button>
            </span>
            </template>
        </el-dialog>
    </div>
</template>
<script>
    import axios from 'axios'
    import {ElMessage} from 'element-plus'

    export default {
        data() {
            return {
                logourl: require('@/assets/logo1.png'),
                registerVisible: false,
                info: '',
                loginForm: {
                    username: '',
                    password: '',
                    password2: '',
                },
                addForm: {
                    addusername: '',
                    addpassword: '',
                    addpassword2: '',
                },
                // 表单验证
                loginFormRul: {
                    username: [
                        {
                            required: true,
                            message: '请输入用户名：',
                            trigger: 'blur',
                        },
                        {
                            min: 3,
                            max: 20,
                            message: 'Length should be 3 to 20',
                            trigger: 'blur',
                        },
                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入密码：',
                            trigger: 'blur',
                        },
                        {
                            min: 8,
                            max: 20,
                            message: 'Length should be 8 to 20',
                            trigger: 'blur',
                        },
                    ],
                    password2: [
                        {
                            required: true,
                            message: '请输入密码：',
                            trigger: 'blur',
                        },
                        {
                            min: 8,
                            max: 20,
                            message: 'Length should be 8 to 20',
                            trigger: 'blur',
                        },
                    ],
                },
                // 表单验证
                addFormRul: {
                    addusername: [
                        {
                            required: true,
                            message: '请输入用户名：',
                            trigger: 'blur',
                        },
                        {
                            min: 8,
                            max: 20,
                            message: 'Length should be 8 to 20',
                            trigger: 'blur',
                        },
                    ],
                    addpassword: [
                        {
                            pattern:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){8,20}$/,
                            required: true,
                            message: '请输入密码：',
                            trigger: 'blur',
                        },
                        {
                            min: 8,
                            max: 20,
                            message: '8-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种',
                            trigger: 'blur',
                        },
                    ],
                    addpassword2: [
                        {
                            pattern:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){8,20}$/,
                            required: true,
                            message: '请输入密码：',
                            trigger: 'blur',
                        },
                        {
                            min: 8,
                            max: 20,
                            message: '8-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种',
                            trigger: 'blur',
                        },
                    ],
                }
            }
        },
        methods: {
            login() {
                const that = this;
                this.$refs.loginFormRef.validate(vaild => {
                    if (!vaild) return;
                    axios
                        .post('/api/token/', {
                            username: that.loginForm.username,
                            password: that.loginForm.password,
                        })
                        .then(function (response) {
                            const storage = localStorage;
                            const expiredTime = Date.parse(response.headers.date) + 10080000;
                            storage.setItem('access.product', response.data.access);
                            storage.setItem('refresh.product', response.data.refresh);
                            storage.setItem('expiredTime.product', expiredTime);
                            storage.setItem('username.product', that.loginForm.username);
                            that.$router.push('/home/')
                        })
                        .catch(function (e) {
                            if (e.request.status === 401) {
                                ElMessage('密码错误！')
                            }
                        })
                })
            },
            addUser() {
                const that = this;
                if (this.addForm.addpassword !== this.addForm.addpassword2) {
                    ElMessage('两次密码输入不同，请重新输入。')
                    return;
                }
                axios.post('/api/user/', {
                        username: this.addForm.addusername,
                        password: this.addForm.addpassword,
                    })
                    .then(function (response) {
                        that.signupResponse = response.data;
                        alert('用户注册成功，快去登录吧！');
                    })
                    .catch(function (error) {
                        alert(error.message);
                    });
                this.registerVisible = false;
            }
        }
    }

</script>

<style scoped="scoped">
    .login {
        background-color: #ffffff;
        height: 100%;
        border-spacing: 0;
    }

    .login_box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #F2F2F2;
        height: 300px;
        width: 450px;
        border-radius: 10px;
        box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, .5), 0 3px 8px 0 #555a64;;
    }

    .login_logo {
        width: 160px;
        height: 100px;
        position: absolute;
        /*top: 0%;*/
        left: 50%;
        margin-left: -80px;
        /*border: 1px solid #eee;*/
        /*border-radius: 50%;*/
        padding: 10px;
    }

    .login_logo img {
        width: 100%;
        height: 100%;
        /*border-radius: 50%;*/
    }

    .login_form {
        width: 100%;
        position: absolute;
        bottom: 0;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }

</style>