<template>
    <el-container style="background: white">
        <el-header style="padding-bottom: 0px;padding-top: 20px; padding-left: 20px">
            <!--    搜索框和按钮-->
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
        </el-header>
        <el-main>
            <el-table v-loading.fullscreen.lock="loading" :data="product" @row-click="rowClicked"
                      border
                      @cell-dblclick="editCell"
                      element-loading-text="数据正在加载中..."
                      style="width: 100%"
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
                <el-table-column prop="orderid" label="订单号" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-link v-if="scope.row.conffile" :href="scope.row.conffile" target="_blank" class="buttonText"
                                 type="primary" :underline="false">
                            {{scope.row.orderid}}
                        </el-link>
                        <span v-else> {{scope.row.orderid}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="customer" label="用户" min-width="130px" show-overflow-tooltip/>
                <el-table-column prop="productid" label="仪器型号" show-overflow-tooltip/>
                <el-table-column prop="serial" label="序列号" show-overflow-tooltip/>
                <el-table-column prop="startday" label="入单日期" show-overflow-tooltip/>
                <el-table-column prop="endday" label="交货日期" show-overflow-tooltip/>
                <el-table-column prop="elsta" label="电路板状态">
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.elsta
                                   @change="changeELSta(scope.row)"
                                   :class="scope.row.elsta"
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
                <el-table-column prop="mesta" label="机械件状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.mesta
                                   @change="changeMESta(scope.row)"
                                   :class="scope.row.mesta"
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
                <el-table-column prop="scsta" label="干涉仪状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.scsta
                                   @change="changeSCSta(scope.row)"
                                   :class="scope.row.scsta"
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
                <el-table-column prop="assta" label="装配状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.assta
                                   @change="changeASSta(scope.row)"
                                   :class="scope.row.assta"
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
                <el-table-column prop="tssta" label="测试状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.tssta
                                   @change="changeTSSta(scope.row)"
                                   :class="scope.row.tssta"
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
                <el-table-column prop="swsta" label="软件状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.swsta
                                   @change="changeSWSta(scope.row)"
                                   :class="scope.row.swsta"
                        >
                            <el-option
                                    v-for="item in staopts"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled=getDisabledInfo(scope.row.swsta,item.value)
                            >
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="pmsta" label="货前款状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.pmsta
                                   @change="changePMSta(scope.row)"
                                   :class="scope.row.pmsta"
                        >
                            <el-option
                                    v-for="item in staopts"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled=getDisabledInfo(scope.row.pmsta,item.value)
                            >
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="dista" label="发货状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.dista
                                   @change="changeDISta(scope.row)"
                                   :class="scope.row.dista"
                        >
                            <el-option
                                    v-for="item in staopts"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled=getDisabledInfo(scope.row.dista,item.value)
                            >
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="bista" label="开票状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.bista
                                   @change="changeBISta(scope.row)"
                                   :class="scope.row.bista"
                        >
                            <el-option
                                    v-for="item in staopts"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled=getDisabledInfo(scope.row.bista,item.value)
                            >
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="duesta" label="尾款状态" show-overflow-tooltip>
                    <template v-slot:default="scope">
                        <el-select v-model=scope.row.duesta
                                   @change="changeDUESta(scope.row)"
                                   :class="scope.row.duesta"
                        >
                            <el-option
                                    v-for="item in staopts"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled=getDisabledInfo(scope.row.duesta,item.value)
                            >
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <!--            <el-table-column prop="updated" :formatter="formatUpdated" label="更新日期" width="100"/>-->
                <el-table-column prop="remark" label="备注" show-overflow-tooltip min-width="130px">
                    <template v-slot:default="scope">
                        <el-input v-model=scope.row.remark v-if="scope.row.tbremark"
                                  @blur="commitCell(scope.row,scope.row.remark,scope.column)">
                        </el-input>
                        <span v-else>{{scope.row.remark}}</span>
                    </template>
                </el-table-column>
            </el-table>
            <!--            页脚-->
            <div class="demo-pagination-block">
                <el-pagination
                        v-model:currentPage="currentPage"
                        v-model:page-count="pageCount"
                        layout="total, prev, pager, next"
                        v-model:total="total"
                        @current-change="CurrentChange">
                </el-pagination>
            </div>
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
                            <el-form-item label="订单类型" prop="category" label-width="100px" align="left">
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
                            <el-form-item label="交货日期" prop="endday" label-width="100px" align="left">
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
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-form-item prop="remark" label-width="100px" align="left">
                                <el-upload :on-change="handleUpload"
                                           action="#"
                                           :auto-upload="false">
                                    <el-button type="primary">请上传配置单</el-button>
                                </el-upload>
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
        </el-main>
    </el-container>
</template>

<script>
    import {Search} from '@element-plus/icons-vue'
    import axios from 'axios'
    import qs from "qs";
    import authorization from "../../utils/authorization";
    import {BIconAlarm} from 'bootstrap-icons-vue'

    export default {
        name: "productPlan",
        components: {
            Search,
            BIconAlarm,
        },
        data() {
            return {
                loading: true,
                // 删除按钮使能
                removeDisabled: true,
                deleteVisible: false,
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
                    startday: "",
                    endday: "",
                    category: "std",
                    conffile: "",
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
                this.loading = false;
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
            async getProduct() {
                await axios.get('/api/home/product/').then(res => {
                    this.product = res.data.results;
                    this.total = res.data.count;
                    this.pageCount = Math.ceil(this.total / 16);
                    this.loading = false;
                });
            },
            getProductPage(page) {
                axios.get('/api/home/product/', {
                    params: {
                        page: page
                    }
                }).then(res => {
                    this.product = res.data.results;
                    this.loading = false;
                })
            },
            CurrentChange(currentPage) {
                this.loading = true;
                this.getProductPage(currentPage);
            },
            //修改更新时间为只有日期
            formatUpdated(row) {
                return row.updated.substr(0, 10, 10).replace('T', ' ');
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
                console.log('orderid', orderid)
                let newsta;
                if (newcontent === "process") {
                    newsta = "进行中";
                }
                if (newcontent === "finish") {
                    newsta = "已完成";
                }
                let auth = true;
                authorization().then(function (response) {
                    // 检查登录状态
                    if (!response[0]) {
                        alert('登录已过期，请重新登录');
                        auth = false;
                        this.$router.push({name: 'Login'});
                    }
                });
                // 在订单记录中增加一条
                if (auth) {
                    const dat = new Date();
                    //增加主要订单信息
                    await axios.post('/api/home/producthistory/',
                        qs.stringify({orderid_id: orderid, proitem: item, newcontent: newsta, operateday: dat}),
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
                        this.$router.push({name: 'Login'});
                    }
                });
                // 在订单记录中增加一条
                if (auth) {
                    const dat = new Date();
                    const stday = dat.toISOString().substr(0, 10, 10);
                    let param = new FormData()
                    param.append('orderid', this.addProductForm.orderid)
                    param.append('customer', this.addProductForm.customer)
                    param.append('productid', this.addProductForm.productid)
                    param.append('serial', this.addProductForm.serial)
                    param.append('startday', stday)
                    param.append('endday', this.addProductForm.endday)
                    param.append('category', this.addProductForm.category)
                    param.append('conffile', this.addProductForm.conffile)
                    await axios.post('/api/home/product/', param,
                        {
                            headers: {
                                Authorization: 'Bearer ' + localStorage.getItem('access.product'),
                            }
                        }).then(res => {
                        this.addStaForm.order_id = res.data.id;
                        this.getProduct();
                    })
                    // this.addProductForm.startday = stday;
                    // //增加主要订单信息
                    // await axios.post('/api/home/product/', qs.stringify(this.addProductForm)).then(res => {
                    //     this.addStaForm.order_id = res.data.id;
                    //     this.getProduct();
                    // })
                    // //增加电路板条目信息
                    // axios.post('/api/home/processelprepare/', {
                    //     orderid_id: this.addStaForm.order_id, status: this.addStaForm.status,
                    //     startday: stday,
                    // }).then(res => {
                    //     console.log(res);
                    // })
                    // //增加机械件条目信息
                    // axios.post('/api/home/processmeprepare/', {
                    //     orderid_id: this.addStaForm.order_id, status: this.addStaForm.status,
                    //     startday: stday,
                    // }).then(res => {
                    //     console.log(res);
                    // })
                    // //增加干涉仪条目信息
                    // axios.post('/api/home/processscprepare/', {
                    //     orderid_id: this.addStaForm.order_id, status: this.addStaForm.status,
                    //     startday: stday,
                    // }).then(res => {
                    //     console.log(res);
                    // })
                    // //增加装配条目信息
                    // axios.post('/api/home/processassemble/', {
                    //     orderid_id: this.addStaForm.order_id,
                    //     status: this.addStaForm.status
                    // }).then(res => {
                    //     console.log(res);
                    // })
                    // //增加测试条目信息
                    // axios.post('/api/home/processtesting/', {
                    //     orderid_id: this.addStaForm.order_id,
                    //     status: this.addStaForm.status
                    // }).then(res => {
                    //     console.log(res);
                    // })
                }
                this.addProductVisible = false;
            },
            // 选择条目，可以修改该条目信息
            rowClicked(row) {
                this.selectedRow = row.id;
                this.removeDisabled = false;
            },
            //改变某一条目订单状态
            async changeProSta(row) {
                await this.changeStatus('product', row.status, row.id);
                //状态更改完成之后，在订单历史中做一条记录
                await this.addProductHistory(row.id, "整体状态", row.status);
            },
            //改变电路板状态
            async changeELSta(row) {
                await this.changeStatus('processelprepare', row.elsta, row.id);
                await this.addProductHistory(row.id, "电路板状态", row.elsta);
            },
            //改变机械件状态
            async changeMESta(row) {
                await this.changeStatus('processmeprepare', row.mesta, row.id)
                await this.addProductHistory(row.id, "机械件状态", row.mesta);
            },
            // //改变干涉仪状态
            async changeSCSta(row) {
                await this.changeStatus('processscprepare', row.scsta, row.id)
                await this.addProductHistory(row.id, "干涉仪状态", row.scsta);
            },
            // //改变装配状态
            async changeASSta(row) {
                await this.changeStatus('processassemble', row.assta, row.id)
                await this.addProductHistory(row.id, "装配状态", row.assta);
            },
            // //改变测试状态
            async changeTSSta(row) {
                await this.changeStatus('processtesting', row.tssta, row.id)
                await this.addProductHistory(row.id, "测试状态", row.tssta);
            },
            // //改变软件状态
            async changeSWSta(row) {
                await this.changeStatus('processsoftware', row.swsta, row.id)
                await this.addProductHistory(row.id, "软件状态", row.swsta);
            },
            // //改变付款状态
            async changePMSta(row) {
                await this.changeStatus('processpayment', row.pmsta, row.id)
                await this.addProductHistory(row.id, "付款状态", row.pmsta);
            },
            // //改变发货状态
            async changeDISta(row) {
                await this.changeStatus('processdeliver', row.dista, row.id)
                this.addProductHistory(row.id, "发货状态", row.dista);
            },
            // //改变开票状态
            async changeBISta(row) {
                await this.changeStatus('processbilling', row.bista, row.id)
                await this.addProductHistory(row.id, "开票状态", row.bista);
            },
            // //改变尾款状态
            async changeDUESta(row) {
                await this.changeStatus('processdueing', row.duesta, row.id)
                await this.addProductHistory(row.id, "尾款状态", row.duesta);
            },
            //改变状态通用函数
            async changeStatus(address, newStatus, orderid) {
                let auth = true;
                await authorization().then(function (response) {
                    // 检查登录状态
                    if (!response[0]) {
                        alert('登录已过期，请重新登录');
                        auth = false;
                        this.$router.push({name: 'Login'});
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
                this.loading = true
                this.getProductPage(this.currentPage)
            },
            async remove() {
                axios.delete('/api/home/product/' + this.selectedRow + '/').then(res => {
                        console.log(res);
                        this.getProduct()
                    }
                );
                this.deleteVisible = false;
            },
            //上传配置单
            handleUpload(file) {
                this.addProductForm.conffile = file.raw;
            }
        },
        created() {
            this.getProduct();
        }
    }
</script>

<style scoped>
    /*.el-row {*/
    /*    margin-bottom: 20px;*/
    /*}*/

    .el-table {
        width: 100%;
    }

    .pending >>> .el-input__inner {
        background: #f89898 !important;
    }

    .process >>> .el-input__inner {
        background: #eebe77 !important;
    }

    .finish >>> .el-input__inner {
        background: #95d475 !important;
    }

    >>> .el-timeline-item__node {
        background: #409EFF;
    }

    .el-table >>> th {
        padding: 10px;
    }

    .el-table >>> td {
        padding: 1px;
    }

    .el-table ::v-deep(.cell) {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }

    .el-timeline-item {
        padding-top: 20px;
        padding-bottom: 0px;
    }

    ::v-deep .el-table__body tr.current-row > td {
        background-color: #95d475 !important;
    }

    .el-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        vertical-align: middle;
    }
</style>