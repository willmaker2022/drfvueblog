<template>
    <el-card>
        <!--    搜索框和按钮-->
        <el-row :gutter="12" margin-bottom=20px class="row-button" >
            <el-col :span="6">
                <el-input
                        v-model="searchInfo"
                        placeholder="输入检索的内容"
                        clearable
                        @clear="goback"
                >
                </el-input>
            </el-col>
            <el-col :span="12" align="left">
                <el-button @click="search">搜索</el-button>
                <el-button type='success' @click="addProductVisible=true">增加</el-button>
                <el-button type='danger' @click="deleteVisible=true"
                           :disabled="removeDisabled?true:false">删除
                </el-button>
                <span style="font-size: 20px; padding-left: 20px; font-weight:bolder">所有订单</span>
            </el-col>
        </el-row>
        <el-table :data="product" @row-click="rowClicked" border
                  @cell-dblclick="editCell"
                  highlight-current-row
                  :row-style="{height:'20px'}">
            <el-table-column type="expand">
                <template #default="props">
                    <el-timeline>
                        <el-timeline-item
                                v-for="(item,index) in props.row.producthistory"
                                :key="index"
                                :timestamp=formatedate(item.operateday)
                                :icon=timelineconfig.icon
                                :size=timelineconfig.size
                        >
                            <el-tag class="mx-1" size="large">{{item.user}}</el-tag>
                            将
                            <el-tag class="mx-1" size="large">{{item.proitem}}</el-tag>
                            更改为
                            <el-tag class="mx-1" size="large" :type="item.newcontent ==='进行中'?'danger':''">
                                {{item.newcontent}}
                            </el-tag>
                        </el-timeline-item>
                    </el-timeline>
                </template>
            </el-table-column>
            <el-table-column prop="orderid" label="订单号" width="120"/>
            <el-table-column prop="customer" label="用户" width="160"/>
            <el-table-column prop="productid" label="仪器型号" width="80"/>
            <el-table-column prop="serial" label="序列号" width="80"/>
            <el-table-column prop="startday" label="开始日期" width="100"/>
            <el-table-column prop="endday" label="交货日期" width="100"/>
<!--            <el-table-column prop="category" label="类型" width="60" :formatter="formateCategory"/>-->
<!--            <el-table-column prop="status" label="整体状态" width="80">-->
<!--                <template v-slot:default="scope">-->
<!--                    <el-select v-model=scope.row.status placeholder="Select"-->
<!--                               @change="changeProSta(scope.row)"-->
<!--                               :class="{'pending':scope.row.status === 'pending', 'process': scope.row.status === 'process', 'finish': scope.row.status === 'finish' }"-->
<!--                    >-->
<!--                        <el-option-->
<!--                                v-for="item in staopts"-->
<!--                                :key="item.value"-->
<!--                                :label="item.label"-->
<!--                                :value="item.value"-->
<!--                                :disabled=getDisabledInfo(scope.row.status,item.value)-->
<!--                        >-->
<!--                        </el-option>-->
<!--                    </el-select>-->
<!--                </template>-->
<!--            </el-table-column>-->
            <el-table-column prop="elsta" label="电路板状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.elsta class="m-2" placeholder="Select"
                               @change="changeELSta(scope.row)"
                               :class="{'pending':scope.row.elsta === 'pending', 'process': scope.row.elsta === 'process', 'finish': scope.row.elsta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.elsta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="mesta" label="机械件状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.mesta class="m-2" placeholder="Select"
                               @change="changeMESta(scope.row)"
                               :class="{'pending':scope.row.mesta === 'pending', 'process': scope.row.mesta === 'process', 'finish': scope.row.mesta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.mesta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="scsta" label="干涉仪状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.scsta class="m-2" placeholder="Select"
                               @change="changeSCSta(scope.row)"
                               :class="{'pending':scope.row.scsta === 'pending', 'process': scope.row.scsta === 'process', 'finish': scope.row.scsta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.scsta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="assta" label="装配状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.assta class="m-2" placeholder="Select"
                               @change="changeASSta(scope.row)"
                               :class="{'pending':scope.row.assta === 'pending', 'process': scope.row.assta === 'process', 'finish': scope.row.assta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.assta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="tssta" label="测试状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.tssta class="m-2" placeholder="Select"
                               @change="changeTSSta(scope.row)"
                               :class="{'pending':scope.row.tssta === 'pending', 'process': scope.row.tssta === 'process', 'finish': scope.row.tssta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.tssta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="swsta" label="软件状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.tssta class="m-2" placeholder="Select"
                               @change="changeTSSta(scope.row)"
                               :class="{'pending':scope.row.tssta === 'pending', 'process': scope.row.tssta === 'process', 'finish': scope.row.tssta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.tssta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="pmsta" label="付款状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.tssta class="m-2" placeholder="Select"
                               @change="changeTSSta(scope.row)"
                               :class="{'pending':scope.row.tssta === 'pending', 'process': scope.row.tssta === 'process', 'finish': scope.row.tssta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.tssta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="dista" label="发货状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.tssta class="m-2" placeholder="Select"
                               @change="changeTSSta(scope.row)"
                               :class="{'pending':scope.row.tssta === 'pending', 'process': scope.row.tssta === 'process', 'finish': scope.row.tssta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.tssta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="bista" label="开票状态" width="80">
                <template v-slot:default="scope">
                    <el-select v-model=scope.row.tssta class="m-2" placeholder="Select"
                               @change="changeTSSta(scope.row)"
                               :class="{'pending':scope.row.tssta === 'pending', 'process': scope.row.tssta === 'process', 'finish': scope.row.tssta === 'finish' }"
                    >
                        <el-option
                                v-for="item in staopts"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled=getDisabledInfo(scope.row.tssta,item.value)
                        >
                        </el-option>
                    </el-select>
                </template>
            </el-table-column>
<!--            <el-table-column prop="updated" :formatter="formatUpdated" label="更新日期" width="100"/>-->
            <el-table-column prop="remark" label="备注" :show-overflow-tooltip="showtip">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.remark v-if="scope.row.tbremark"
                              @blur="commitCell(scope.row,scope.row.remark,scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.remark}}</span>
                </template>
            </el-table-column>
        </el-table>

        <div class="demo-pagination-block">
            <el-pagination
                    v-model:currentPage="currentPage"
                    v-model:page-count="pageCount"
                    layout="total, prev, pager, next"
                    v-model:total="total"
                    @current-change="CurrentChange">
            </el-pagination>
        </div>
    </el-card>
    <!--    添加产品订单对话框-->
    <el-dialog
            v-model="addProductVisible"
            title="添加产品订单"
            width="50%"
    >
        <el-form
                ref="addProductRef"
                :model="addProductForm"
                :rules="addProductRul"
                label-width="300px"
                class="addStorgeForm"
        >
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="订单号" prop="orderid" label-width="100px">
                        <el-input v-model="addProductForm.orderid"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="仪器型号" prop="productid" label-width="100px">
                        <el-input v-model="addProductForm.productid"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="序列号" prop="serial" label-width="100px">
                        <el-input v-model="addProductForm.serial"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="订单类型" prop="category" label-width="100px">
                        <el-select v-model=addProductForm.category placeholder="选择订单类型">
                            <el-option
                                    v-for="item in oropts"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="用户" prop="customer" label-width="100px">
                        <el-input v-model="addProductForm.customer"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="交货日期" prop="endday" label-width="100px">
                        <el-date-picker v-model="addProductForm.endday" type="date"
                                        value-format="YYYY-MM-DD"
                                        placeholder="Pick a day">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">

                <el-col :span="24">
                    <el-form-item label="备注" prop="remark" label-width="100px">
                        <el-input v-model="addProductForm.remark"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="addProductVisible = false">取消</el-button>
                <el-button type="primary" @click="addProduct">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <!--    删除确认对话框-->
    <el-dialog
            v-model="deleteVisible"
            title="确认删除"
            width="50%">
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="deleteVisible = false">取消</el-button>
                <el-button type="primary" @click="remove">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
    import {Search} from '@element-plus/icons-vue'
    import axios from 'axios'
    import qs from "qs";
    import authorization from "../../utils/authorization";
    import {BIconAlarm} from 'bootstrap-icons-vue'
    // 所有订单
    const orders = {
        allorder: [],
        pages: 0,
    }
    const products = async () => {
        //第一次读取，得到页数。
        await axios.get('/api/home/product/').then(res => {
            orders.pages = Math.ceil(res.data.count / 20);
            orders.allorder = res.data.results;
        })
        for (var n = 1; n < orders.pages; n++) {
            await axios.get('/api/home/product/', {params: {page: n}})
                .then(res => {
                    for (var index = 0; index < res.data.results.length; index++) {
                        orders.allorder.push(res.data.results[index]);
                    }
                })
        }
        return orders.allorder;
    }


    export default {
        name: "productPlan",
        components: {
            Search,
            BIconAlarm,
        },
        orders,
        products: products(),
        data() {
            return {
                // 删除按钮使能
                removeDisabled: true,
                deleteVisible: false,
                // 显示提示
                showtip: true,
                // 增加产品订单时的类型选择
                oropts: [
                    {
                        value: 'std',
                        label: '标准',
                    },
                    {
                        value: 'unstd',
                        label: '非标',
                    },
                ],
                staopts: [
                    {
                        value: 'pending',
                        label: '未开始',
                        disabled: false,
                    },
                    {
                        value: 'process',
                        label: '进行中',
                        disabled: false,
                    },
                    {
                        value: 'finish',
                        label: '已完成',
                        disabled: false,
                    },

                ],
                product: [],
                producthistory: [],
                searchInfo: '',
                currentPage: 1,
                total: 0,
                pageCount: 0,
                //初始化不显示添加产品订单对话框
                addProductVisible: false,
                //当前选中条目
                selectedRow: 0,
                //增加条目
                addProductForm: {
                    orderid: "",
                    customer: "",
                    productid: "",
                    serial: "",
                    endday: "",
                    category: "",
                },
                addStaForm: {
                    order_id: "",
                    status: "pending",
                },
                addStorgerul: {
                    orderid: [{
                        required: true,
                        message: '请输入订单号',
                        trigger: 'blur',
                    },
                        {
                            min: 3,
                            max: 7,
                            message: '订单号为3位数字',
                            trigger: 'blur',
                        },
                    ],
                    customer: [{
                        required: true,
                        message: '请输入用户名称',
                        trigger: 'blur',
                    },
                        {
                            min: 3,
                            max: 20,
                            message: '用户名长度最短为 3 ',
                            trigger: 'blur',
                        },
                    ],
                    productid: [{
                        required: true,
                        message: '请输入产品型号',
                        trigger: 'blur',
                    },
                        {
                            min: 3,
                            max: 20,
                            message: '产品名长度最短为 3 ',
                            trigger: 'blur',
                        },
                    ],
                    serial: [{
                        required: true,
                        message: '请输入序列号',
                        trigger: 'blur',
                    },
                        {
                            min: 3,
                            max: 7,
                            message: '序列号为3位数字',
                            trigger: 'blur',
                        },
                    ],
                    endday: [{
                        required: true,
                        message: '请输入交货日期',
                        trigger: 'blur',
                    },
                        {
                            message: '日期',
                            trigger: 'blur',
                        },
                    ],
                    category: [{
                        required: true,
                        message: '请输入订单类型',
                        trigger: 'blur',
                    },
                        {
                            message: '日期',
                            trigger: 'blur',
                        },
                    ],
                },
                timelineconfig: {
                    icon: BIconAlarm,
                    size: 'large',
                }
            }
        },
        methods: {
            // 检索，待细化
            async search() {
                var res = await axios.get('/api/home/product/', {
                    params: {
                        search: this.searchInfo
                    }
                })
                if (res.data.count !== 0) {
                    this.product = res.data.results
                } else {
                    this.product = []
                }
            },
            //修改select的disabled参数
            getDisabledInfo(sta, selectValue) {
                let dis;
                if (sta === 'pending') {
                    dis = false;
                }
                if (sta === 'process' && selectValue === 'pending') {
                    dis = true;
                }
                if (sta === 'process' && selectValue !== 'pending') {
                    dis = false;
                }
                if (sta === 'finish') {
                    dis = true;
                }
                return dis;
            },
            //修改时间显示格式
            formatedate(str) {
                var temp = str.replace('T', ' ');
                return temp.substr(0, 16, 16);
            },
            getProduct() {
                axios.get('/api/home/product/').then(res => {
                    this.product = res.data.results;
                    this.total = res.data.count;
                    this.pageCount = Math.ceil(this.total / 20);
                });
            },
            getProductPage(page) {
                axios.get('/api/home/product/', {
                    params: {
                        page: page
                    }
                }).then(res => {
                    this.product = res.data.results;
                })
            },
            CurrentChange(currentPage) {
                this.getProductPage(currentPage);
            },
            //修改更新时间为只有日期
            formatUpdated(row) {
                let date = new Date(row.updated);
                return date.toISOString().substr(0, 10, 10).replace('T', ' ');
            },
            //修改订单类型显示
            formateCategory(row) {
                if (row.category === 'std') {
                    return "标准";
                }
                if (row.category === 'unstd') {
                    return "非标";
                }
            },
            //在订单历史中添加一条，此订单历史只增加，不删除，不修改
            async addProductHistory(orderid, item, newcontent) {
                let newsta;
                if (newcontent === "process") {
                    newsta = "进行中";
                }
                if (newcontent === "finish") {
                    newsta = "已完成";
                }
                let auth = true;
                ``
                authorization().then(function (response) {
                    // 检查登录状态
                    if (!response[0]) {
                        alert('登录已过期，请重新登录');
                        auth = false;
                    }
                });
                // 在订单记录中增加一条
                if (auth) {
                    const dat = new Date();
                    //增加主要订单信息
                    await axios
                        .post('/api/home/producthistory/',
                            {orderid_id: orderid, proitem: item, newcontent: newsta, operateday: dat},
                            {headers: {Authorization: 'Bearer ' + localStorage.getItem('access.product')}})
                        .then(res => {
                            console.log(res)
                        });
                }
            },
            //增加一个订单
            async addProduct() {
                let auth = true;
                authorization().then(function (response) {
                    // 检查登录状态
                    if (!response[0]) {
                        alert('登录已过期，请重新登录');
                        auth = false;
                    }
                });
                // 在订单记录中增加一条
                if (auth) {
                    const dat = new Date();
                    const stday = dat.toISOString().substr(0, 10, 10);
                    //增加主要订单信息
                    await axios.post('/api/home/product/', qs.stringify(this.addProductForm)).then(res => {
                        this.addStaForm.order_id = res.data.id;
                        this.getProduct();
                    })
                    //增加电路板条目信息
                    axios.post('/api/home/processelprepare/', {
                        orderid_id: this.addStaForm.order_id, status: this.addStaForm.status,
                        startday: stday,
                    }).then(res => {
                        console.log(res);
                    })
                    //增加机械件条目信息
                    axios.post('/api/home/processmeprepare/', {
                        orderid_id: this.addStaForm.order_id, status: this.addStaForm.status,
                        startday: stday,
                    }).then(res => {
                        console.log(res);
                    })
                    //增加干涉仪条目信息
                    axios.post('/api/home/processscprepare/', {
                        orderid_id: this.addStaForm.order_id, status: this.addStaForm.status,
                        startday: stday,
                    }).then(res => {
                        console.log(res);
                    })
                    //增加装配条目信息
                    axios.post('/api/home/processassemble/', {
                        orderid_id: this.addStaForm.order_id,
                        status: this.addStaForm.status
                    }).then(res => {
                        console.log(res);
                    })
                    //增加测试条目信息
                    axios.post('/api/home/processtesting/', {
                        orderid_id: this.addStaForm.order_id,
                        status: this.addStaForm.status
                    }).then(res => {
                        console.log(res);
                    })
                }
                this.addProductVisible = false;
            },
            // 选择条目，，可以修改该条目信息
            rowClicked(row) {
                this.selectedRow = row.id;
                this.removeDisabled = false;
            },
            //改变某一条目订单状态
            async changeProSta(row) {
                await this.changeStatus('product', row.status, row.id);
                //状态更改完成之后，在订单历史中做一条记录
                this.addProductHistory(row.id, "整体状态", row.status);
            },
            //改变电路板状态
            async changeELSta(row) {
                await this.changeStatus('processelprepare', row.elsta, row.id);
                this.addProductHistory(row.id, "电路板状态", row.elsta);
            },
            //改变机械件状态
            async changeMESta(row) {
                await this.changeStatus('processmeprepare', row.mesta, row.id)
                this.addProductHistory(row.id, "机械件状态", row.mesta);
            },
            // //改变干涉仪状态
            async changeSCSta(row) {
                await this.changeStatus('processscprepare', row.scsta, row.id)
                this.addProductHistory(row.id, "干涉仪状态", row.scsta);
            },
            // //改变装配状态
            async changeASSta(row) {
                await this.changeStatus('processassemble', row.assta, row.id)
                this.addProductHistory(row.id, "装配状态", row.assta);
            },
            // //改变测试状态
            async changeTSSta(row) {
                await this.changeStatus('processtesting', row.tssta, row.id)
                this.addProductHistory(row.id, "测试状态", row.tssta);
            },
            //改变状态通用函数
            async changeStatus(address, newStatus, orderid) {
                let auth = true;
                await authorization().then(function (response) {
                    // 检查登录状态
                    if (!response[0]) {
                        alert('登录已过期，请重新登录');
                        auth = false;
                    }
                });
                // 在订单记录中增加一条
                if (auth) {
                    const dat = new Date();
                    const dt = dat.toISOString().substr(0, 10, 10);
                    //增加测试条目信息
                    if (newStatus === "process") {

                        axios.patch('/api/home/' + address + '/' + orderid + '/', {
                            status: newStatus,
                            startday: dt
                        }).then(res => {
                            console.log(res);
                        }).catch(function (e) {
                            if (e.request.status === 404) {
                                axios.post('/api/home/' + address + '/', {
                                    orderid_id: orderid,
                                    status: newStatus,
                                    startday: dt
                                })
                            }

                        })
                    }
                    if (newStatus === "finish") {
                        axios.patch('/api/home/' + address + '/' + orderid + '/', {
                            status: newStatus,
                            endday: dt
                        }).then(res => {
                            console.log(res);
                        }).catch(function (e) {
                            if (e.request.status === 404) {
                                axios.post('/api/home/' + address + '/', {
                                    orderid_id: orderid,
                                    status: newStatus,
                                    endday: dt
                                })
                            }
                        })
                    }
                }
            },
            //双击编辑备注内容
            editCell(row, col) {
                if (col.property === 'remark') {
                    row.tbremark = true;
                }
            },
            commitCell(row, val, col) {
                if (col.property === 'remark') {
                    row.tbremark = false;
                    delete row.tbremark
                }
                this.patchStorge(col.property, val, row)
            },
            patchStorge(item, val, row) {
                var data = {}
                data[item] = val
                console.log(row)
                axios.patch('/api/home/product/' + row.id + '/', data).then(res => {
                    console.log('pathch:', res)
                })
            },
            goback() {
                this.getProductPage(this.currentPage)
            },
            async remove() {
                axios.delete('/api/home/product/' + this.selectedRow + '/').then(res => {
                        console.log(res);
                        this.getProduct()
                    }
                );
                this.deleteVisible = false;
            }
        },
        created() {
            this.getProduct();
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .el-table {
        width: 100%;
    }

    .pending >>> .el-input__inner {
        background:    #f89898 !important;
    }

    .process >>> .el-input__inner {
        background:   #eebe77 !important;
    }

    .finish >>> .el-input__inner {
        background:   #95d475 !important;
    }

    >>> .el-timeline-item__node {
        background: #409EFF;
    }

    .el-table >>> th {
        padding: 0;
    }

    .el-table >>> td {
        padding: 0;
    }
    .el-table ::v-deep(.cell){
        padding-left: 0px !important;
        padding-right: 0px !important;
    }

</style>