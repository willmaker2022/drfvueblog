<template>
    <el-form ref="serviceformRef" :model="serviceform" label-width="100px">
        <el-form-item label="问题描述：">
            <el-col>
                <el-row :gutter="1">
                    <el-col :span="14">
                        <el-input v-model="desc"></el-input>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="primary" plain @click="addDesc" size="small">添加</el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="danger" plain @click="removeDesc" size="small">删除</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col justfy="start">
                <div v-for="(item,index) in serviceform.desc.split('-').slice(0,-1)" :key="item" class="text item">{{
                    index+1 +" . "+ item }}
                </div>
            </el-col>
        </el-form-item>
        <el-form-item label="采取措施：">
            <el-col>
                <el-row :gutter="1">
                    <el-col :span="14">
                        <el-input v-model="record"></el-input>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="primary" plain @click="addAction" size="small">添加</el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-button type="danger" plain @click="removeAction" size="small">删除</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col justfy="start">
                <div v-for="(item,index) in serviceform.record.split('-').slice(0,-1)" :key="item" class="text item">{{
                    index+1 +" . "+ item }}
                </div>
            </el-col>
        </el-form-item>
        <el-form-item label="上传图片：">
            <el-col>
                <upload @imagefile="getImage" :uploadHide="showupload"></upload>
            </el-col>
        </el-form-item>
        <el-form-item label="报告类型：">
            <div>
                <el-select v-model="serviceform.style"
                           style="width: 100%"
                           placeholder="请选择报告类型">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
        </el-form-item>
        <el-form-item label="备注：">
            <el-input v-model="serviceform.remark"
                      :rows="10"
                      type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
            <div align="left">
                <el-select v-model="this.serviceform.orderid_id"
                           style="width: 100%"
                           placeholder="选择所属订单"
                           filterable>
                    <el-option
                            v-for="item in orderOptions"
                            :key="item.customer"
                            :label="item.customer"
                            :value="item.id"
                    >
                    </el-option>
                </el-select>
            </div>
        </el-form-item>
        <el-form-item>
            <el-col>
                <el-button type="primary" round @click="onSubmit">添加</el-button>
                <el-button type="warning" round>取消</el-button>
            </el-col>
        </el-form-item>
    </el-form>
</template>

<script>
    import {BIconPlus} from 'bootstrap-icons-vue'
    import {Plus} from '@element-plus/icons-vue'
    import upload from './upload'
    import authorization from "../../utils/authorization";
    import axios from "axios";
    import products from "./product";
    //为刷新页面而添加
    import {inject} from 'vue'

    export default ({
        name: "report",
        components: {
            BIconPlus,
            Plus,
            upload
        },
        setup() {
            const reload = inject('reload')
            const refreshPage = () => {
                console.log('from setup refreshPage, relaoding')
                reload && reload()
            }
            return {
                refreshPage
            }
        },
        data() {
            return {
                products: products.orders,
                options: [
                    {
                        value: 'servicein',
                        label: '保内维修',
                    },
                    {
                        value: 'serviceout',
                        label: '保外维修',
                    },
                    {
                        value: 'production',
                        label: '工艺改进',
                    },
                ],
                serviceform: {
                    desc: "",
                    record: "",
                    pictures: "",
                    orderid_id: '',
                    style: "servicein",
                    remark: "",
                },
                desc: "",
                record: "",
                showupload: true,
                //填写维修报告时，选择所属订单（用户名，序列号）
                orderOptions: [],
            }
        },
        methods: {
            addDesc() {
                this.serviceform.desc += this.desc + '-'
            },
            addAction() {
                this.serviceform.record += this.record + '-'
            },
            removeAction() {
                let temp = this.serviceform.record.split('-').slice(0, -1)
                this.serviceform.record = temp.join('-')
            },
            removeDesc() {
                let temp = this.serviceform.desc.split('-').slice(0, -1)
                this.serviceform.desc = temp.join('-')
            },
            getImage(data) {
                this.serviceform.pictures = data.raw
                this.showupload = data === "";
            },
            async onSubmit() {
                let param = new FormData()
                param.append('pictures', this.serviceform.pictures)
                param.append('orderid_id', this.serviceform.orderid_id)
                param.append('description', this.serviceform.desc)
                param.append('style', this.serviceform.style)
                param.append('actions', this.serviceform.record)
                param.append('remark', this.serviceform.remark)
                //记录入库条目
                let auth = true;
                authorization().then(function (response) {
                    // 检查登录状态
                    if (!response[0]) {
                        alert('登录已过期，请重新登录');
                        auth = false;
                    }
                });
                // 在出入库记录中记录一行，包括借库人，数量，以及归属于哪个订单
                if (auth) {
                    await axios.post('/api/home/service/', param,
                        {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('access.product'),
                            }
                        })
                        .then(res => {
                            this.refreshPage()
                            console.log(res)
                        })
                }
            },
            // 因为维修记录需要记录所属订单,所以这里要获取一下订单信息
            async getProduct() {
                let a = {};
                await axios.get('/api/home/product/').then(res => {
                    a = res.data.results;
                })
                return a;
            },
        },
        // 页面初始化
        async created() {
            // 出库时，选择订单
            this.orderOptions = this.products.allorder;
            // console.log('orderOptions:', this.orderOptions)
        }
    })

</script>

<style>
    .el-form-item {
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
    }

    .el-form-item__content {
        margin-right: 5px;
    }
</style>

