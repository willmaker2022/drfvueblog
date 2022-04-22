<template>
    <el-card>
        <!--    搜索框和按钮-->
        <el-row margin-bottom=20px :gutter="12" class="row-button">
            <el-col :span="6">
                <el-input
                        v-model="searchInfo"
                        placeholder="输入检索的内容"
                        clearable
                        @clear="goback"
                />
            </el-col>
            <el-col :span="18" align="left">
                <el-button type='primary' @click="search">搜索</el-button>
                <el-button type='success' @click="addStorgeVisible= true">增加</el-button>
                <el-button type='danger' @click="deleteConfirmVisible=true"
                           :disabled="removeStorageDisabled?true:false">删除
                </el-button>
                <el-button type='primary' @click="outStorgeVisible=true" :disabled="outStorageDisabled?true:false">出库
                </el-button>
                <el-button type='primary' @click="inStorgeVisible=true" :disabled="inStorageDisabled?true:false">入库
                </el-button>
                <el-button type='primary' @click="buyStorgeVisible=true" :disabled="buyStorageDisabled?true:false">采购
                </el-button>
                <el-button type='primary' @click="adminStorageVisible=true">管理</el-button>
                <span style="font-size: 20px; padding-left: 20px; font-weight:bolder">库存表</span>
            </el-col>
        </el-row>
        <!--        数据列表-->
        <el-table :data="storage" border style="width: 100%" @row-click="rowClicked"
                  :row-class-name="tableRowClassStatus"
                  highlight-current-row
                  :row-style="{height:'20px'}"
                  @cell-dblclick="editCell"
                  @current-change="handleCurrentChange">
            <!--            扩展详情-->
            <el-table-column type="expand">
                <template #default="props">
                    <el-timeline>
                        <el-timeline-item
                                v-for="(item,index) in props.row.inoutstorage"
                                :key="index"
                                :size=timelineconfig.size
                        >
                            {{item.user}}
                            <span v-show="item.direction=='in'?true:false" style="color: #67C23A">入库</span>
                            <span v-show="item.direction=='out'?true:false" style="color: #F56C6C">出库</span>
                            <span v-show="item.direction=='buy'?true:false" style="color: #67C23A">采购</span>
                            数量:<span style="color:blueviolet">&nbsp;{{item.lcount}}&nbsp;</span>
                            <span>日期: {{formatedate(item.operateday)}}&nbsp;</span>
                            <span v-show="item.direction=='out'?true:false">
                                    <span v-show="item.customer==''?false:true">{{ "用户："+item.customer}}</span>
                                </span>
                        </el-timeline-item>
                    </el-timeline>
                </template>
            </el-table-column>
            <el-table-column prop="sId" label="库存代码" width="100" :show-overflow-tooltip="true"/>
            <el-table-column prop="spartNumber" label="物料号" width="100" :show-overflow-tooltip="true">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.spartNumber v-if="scope.row.tbspartNumber"
                              @blur="commitCell(scope.row,scope.row.spartNumber,scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.spartNumber}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="sName" label="品名" width="180" :show-overflow-tooltip="true">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.sName v-if="scope.row.tbsName"
                              @blur="commitCell(scope.row,scope.row.sName,scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.sName}}</span>
                </template>
            </el-table-column>
            >
            <el-table-column prop="sDescription" label="描述" width="300" :show-overflow-tooltip="true">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.sDescription v-if="scope.row.tbsDescription"
                              @blur="commitCell(scope.row,scope.row.sDescription,scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.sDescription}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="sCount" label="库存" width="60" :show-overflow-tooltip="true"/>
            <el-table-column prop="sUnit" label="单位" width="60" :show-overflow-tooltip="true"/>
            <el-table-column prop="ssafeCount" label="安全库存" width="100" :show-overflow-tooltip="true">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.ssafeCount v-if="scope.row.tbsafeCount"
                              @blur="commitCell(scope.row,scope.row.ssafeCount,scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.ssafeCount}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="sArea" label="存放区域" width="100" :show-overflow-tooltip="true">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.sArea v-if="scope.row.tbsArea"
                              @blur="commitCell(scope.row,scope.row.sArea,scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.sArea}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="sPosition" label="存放库位" width="100" :show-overflow-tooltip="true">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.sPosition v-if="scope.row.tbsPosition"
                              @blur="commitCell(scope.row,scope.row.sPosition,scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.sPosition}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="updated" :formatter="formatUpdated" label="更新时间" width="140"
                             :show-overflow-tooltip="true"/>
            <el-table-column prop="remark" label="备注" :show-overflow-tooltip="true">
                <template v-slot:default="scope">
                    <el-input v-model=scope.row.remark v-if="scope.row.tbremark"
                              @blur="commitCell(scope.row,scope.row.remark, scope.column)">
                    </el-input>
                    <span v-else>{{scope.row.remark}}</span>
                </template>
            </el-table-column>
        </el-table>
        <!--页码-->
        <div class="demo-pagination-block">
            <el-pagination
                    v-model:currentPage="currentPage"
                    v-model:page-count="pageCount"
                    layout="total, prev, pager, next"
                    v-model:total="total"
                    @current-change="currentChange"
            >
            </el-pagination>
        </div>
    </el-card>
    <!--    添加库存列表对话框-->
    <el-dialog
            v-model="addStorgeVisible"
            title="添加库存"
            width="50%"
    >
        <el-form
                ref="addStorgeref"
                :model="addStorgeForm"
                :rules="addStorgerul"
                label-width="300px"
                class="addStorgeForm"
        >
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="库存代码" prop="sId" label-width="100px">
                        <el-input v-model="addStorgeForm.sId"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="物料号" prop="spartNumber" label-width="100px">
                        <el-input v-model="addStorgeForm.spartNumber"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="品名" prop="sName" label-width="100px">
                        <el-input v-model="addStorgeForm.sName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="描述" prop="sDescription" label-width="100px">
                        <el-input v-model="addStorgeForm.sDescription"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="库存余量" prop="sCount" label-width="100px">
                        <el-input v-model.number="addStorgeForm.sCount"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单位" prop="sUnit" label-width="100px">
                        <el-input v-model="addStorgeForm.sUnit"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="安全库存" prop="ssafeCount" label-width="100px">
                        <el-input v-model.number="addStorgeForm.ssafeCount"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="存放区域" prop="sArea" label-width="100px">
                        <el-input v-model="addStorgeForm.sArea"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="库位" prop="sPosition" label-width="100px">
                        <el-input v-model="addStorgeForm.sPosition"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="备注" prop="remark" label-width="100px">
                        <el-input v-model="addStorgeForm.remark"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="addStorgeVisible = false">取消</el-button>
                <el-button type="primary" @click="addStorage">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <!--    出库   -->
    <el-dialog
            v-model="outStorgeVisible"
            title="出库记录"
            width="50%">
        <el-form
                ref="outRef"
                :model="outForm"
                :rules="outRul"
                label-width="300px"
                class="outForm">
            <el-form-item label="请输入数量" prop="outCount" label-width="100px">
                <el-input v-model.number="this.outForm.outCount"></el-input>
                <!--                选择用途,这里主要是客户名称,得到订单号,然后就知道出库的备件是给了哪个订单-->
                <el-select v-model="selectId" class="m-2" placeholder="选择所属订单" size="large">
                    <el-option
                            v-for="item in orderOptions"
                            :key="item.id"
                            :label="item.customer"
                            :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="outStorgeVisible = false">取消</el-button>
                <el-button type="primary" @click="outStorage">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <!--    入库-->
    <el-dialog
            v-model="inStorgeVisible"
            title="入库记录"
            width="50%">
        <el-form
                ref="inRef"
                :model="inForm"
                :rules="inRul"
                label-width="300px"
                class="inForm">
            <el-form-item label="请输入数量" prop="inCount" label-width="100px">
                <el-input v-model.number="this.inForm.inCount"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="inStorgeVisible = false">取消</el-button>
                <el-button type="primary" @click="inStorage">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <!--    采购-->
    <el-dialog
            v-model="buyStorgeVisible"
            title="采购记录"
            width="50%">
        <el-form
                ref="buyRef"
                :model="buyForm"
                :rules="buyRul"
                label-width="300px"
                class="inForm">
            <el-form-item label="请输入数量" prop="buyCount" label-width="100px">
                <el-input v-model.number="this.buyForm.buyCount"></el-input>
            </el-form-item>
            <el-form-item label="备注" label-width="100px">
                <el-input v-model="this.buyForm.buyMark"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="buyStorgeVisible = false">取消</el-button>
                <el-button type="primary" @click="buyStorage">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <!--    删除确认对话框-->
    <el-dialog
            v-model="deleteConfirmVisible"
            title="确认删除"
            width="50%">
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="deleteConfirmVisible = false">取消</el-button>
                <el-button type="primary" @click="removeStorage">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <!--    数据库管理-->
    <el-dialog
            v-model="adminStorageVisible"
            title="数据库管理"
            width="50%">

        <el-row>
            请选择需要导入的Excel文件：
            <inXlsx ref="inXlsx" v-on:readxlsx="readxlsx"></inXlsx>
        </el-row>
        <el-row>
            保存数据库：
            <save-xlsx :savedata="alldata" v-if="saveflag" @click="adminStorageVisible = false"></save-xlsx>
        </el-row>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="adminStorageVisible = false">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
    import axios from 'axios'
    import qs from 'qs'
    import authorization from "../../utils/authorization";
    import {BIconAlarm} from "bootstrap-icons-vue";
    import inXlsx from "./inXlsx";
    import saveXlsx from "./saveXlsx";
    import SaveXlsx from "./saveXlsx";
    import products from "./product";

    export default {
        name: "storage",
        components: {
            SaveXlsx,
            BIconAlarm,
            inXlsx,
            saveXlsx
        },
        data() {
            return {
                products: products.orders,
                //超出内容tip显示
                showtip: true,
                //选中行，分页之后的行怎么选呢
                selectedRow: 0,
                storage: [],
                // 所有库存
                alldata: [],
                saveflag: false,
                searchInfo: '',
                currentPage: 1,
                total: 0,
                pageCount: 0,
                // 显示编辑库存的对话框
                addStorgeVisible: false,
                // 出库对话框
                outStorgeVisible: false,
                //入库对话框
                inStorgeVisible: false,
                //采购对话框
                buyStorgeVisible: false,
                // 删除对话框
                deleteConfirmVisible: false,
                //数据库管理
                adminStorageVisible: false,
                // 出入库数量
                outForm: {
                    outCount: 1,
                },
                inForm: {
                    inCount: 1,
                },
                buyForm: {
                    buyCount: 1,
                    buyMark: "",
                },
                outRul: {
                    outCount: [{
                        required: true,
                        message: '请输入出库数量',
                        trigger: 'blur',
                    },
                        {
                            type: 'number',
                            message: '出库数量为数字'
                        },
                    ],
                },
                inRul: {
                    inCount: [{
                        required: true,
                        message: '请输入入库数量',
                        trigger: 'blur',
                    },
                        {
                            type: 'number',
                            message: '入库数量为数字'
                        },
                    ],
                },
                buyRul: {
                    buyCount: [{
                        required: true,
                        message: '请输入入库数量',
                        trigger: 'blur',
                    },
                        {
                            type: 'number',
                            message: '入库数量为数字'
                        },
                    ],
                },
                inoutCount: 0,
                inoutStorgeForm: {
                    sId: "",
                    spartNumber: "",
                    sName: "",
                    sDescription: "",
                    sCount: 0,
                    sUnit: "",
                    ssafeCount: 0,
                    sArea: "",
                    sPosition: "",
                    updated: "",
                    remark: "",
                },
                addStorgeForm: {
                    sId: "",
                    spartNumber: "",
                    sName: "",
                    sDescription: "",
                    sCount: 0,
                    sUnit: "",
                    ssafeCount: 0,
                    sArea: "",
                    sPosition: "",
                    updated: "",
                    remark: "",
                },
                addStorgerul: {
                    sId: [{
                        required: true,
                        message: '请输入库存品代码',
                        trigger: 'blur',
                    },
                        {
                            min: 7,
                            max: 7,
                            message: '存品代码为7位数字',
                            trigger: 'blur',
                        },
                    ],
                    sName: [{
                        required: true,
                        message: '请输入品名',
                        trigger: 'blur',
                    },
                        {
                            min: 3,
                            max: 20,
                            message: '品名长度最短为 3 ',
                            trigger: 'blur',
                        },
                    ],
                    sCount: [{
                        required: true,
                        message: '请输入库存余量',
                        trigger: 'blur',
                    },
                        {
                            type: 'number',
                            message: '库存余量为数字'
                        },
                    ],
                    ssafeCount: [{
                        required: false,
                        message: '请输入库存余量',
                        trigger: 'blur',
                    },
                        {
                            type: 'number',
                            message: '库存余量为数字'
                        },
                    ],
                    sArea: [{
                        required: true,
                        message: '请输入存放区域',
                        trigger: 'blur',
                    },
                        {
                            min: 3,
                            max: 20,
                            message: '存放区域长度最短为 3 ',
                            trigger: 'blur',
                        },
                    ],
                    sPosition: [{
                        required: true,
                        message: '请输入存放库位',
                        trigger: 'blur',
                    },
                        {
                            min: 3,
                            max: 20,
                            message: '存放库位长度最短为 3 ',
                            trigger: 'blur',
                        },
                    ],
                },
                removeStorageDisabled: true,
                outStorageDisabled: true,
                inStorageDisabled: true,
                buyStorageDisabled: true,
                //出库时，订单选择器
                orderOptions: [],
                selectId: '',
                //出入库图标
                timelineconfig: {
                    icon: BIconAlarm,
                    size: 'large',
                },
            }
        },
        methods: {
            //修改更新时间为只有日期
            formatUpdated(row) {
                let date = new Date(row.updated);
                return date.toISOString().substr(0, 16, 16).replace('T', ' ');
            },
            //修改时间显示格式
            formatedate(str) {
                var temp = str.replace('T', ' ');
                return temp.substr(0, 16, 16);
            },
            //单选(高亮）
            setCurrent(row) {
                this.$refs.singleTable.setCurrentRow(row)
            },
            handleCurrentChange(val) {
                this.currentRow = val
            },
            // 检索，待细化
            async search() {
                // console.log('search storage clicked');
                // console.log(this.searchInfo);
                var res = await axios.get('/api/home/storage/', {
                    params: {
                        search: this.searchInfo
                    }
                })
                if (res.data.count !== 0) {
                    this.storage = res.data.results
                } else {
                    this.storage = []
                }
            },
            // 获取第一页库存
            async getStorage() {
                await axios.get('/api/home/storage/').then(res => {
                    this.storage = res.data.results;
                    this.total = res.data.count;
                    this.pageCount = Math.ceil(this.total / 20);
                    // console.log(this.storage)
                    // return this.storage
                    for (var i = 0; i < res.data.results.length; i++) {
                        this.alldata.push(this.storage[i])
                    }
                })
            },
            // 获取某一页库存
            async getStoragePage(page) {
                await axios.get('/api/home/storage/', {
                    params: {
                        page: page
                    }
                }).then(res => {
                    this.storage = res.data.results;
                    return this.storage
                })
            },
            // 获取所有库存
            async getAllStorage() {
                for (var i = 1; i < this.pageCount; i++) {
                    await axios.get('/api/home/storage/', {
                        params: {
                            page: i
                        }
                    }).then(res => {
                        for (var j = 0; j < res.data.results.length; j++) {
                            this.alldata.push(res.data.results[j])
                        }
                    })
                }
            },
            // 页码变化
            currentChange(page) {
                this.currentPage = page;
                this.getStoragePage(page);
            },
            // 增加条目
            async addStorage(val) {
                val = this.addStorgeForm
                await axios.post('/api/home/storage/', qs.stringify(val)).then(res => {
                    console.log(res);
                    this.getStorage();
                })
                this.addStorgeVisible = false;
            },
            // 删除库存
            removeStorage() {
                axios.delete('/api/home/storage/' + this.selectedRow + '/').then(res => {
                        console.log(res);
                        this.getStorage()
                    }
                );
                this.deleteConfirmVisible = false;
            },
            // 获取选定行的条目，用异步方法
            async getRow() {
                let a = {};
                await axios.get('/api/home/storage/' + this.selectedRow + '/').then(res => {
                    a = res.data;
                })
                return a;
            },
            // 出库
            async outStorage() {
                const dat = new Date();
                this.inoutStorgeForm = await this.getRow();
                this.inoutStorgeForm.sCount -= this.outForm.outCount;
                axios.put('/api/home/storage/' + this.selectedRow + '/', qs.stringify(this.inoutStorgeForm))
                    .then(res => {
                        console.log(res);
                        this.getStoragePage(this.currentPage);
                    });
                this.outStorgeVisible = false;
                //记录出库条目
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
                    axios.post('/api/home/inoutstorage/', {
                            storage_id: this.selectedRow,
                            product_id: this.selectId ? this.selectId : null,
                            lCount: this.outForm.outCount,
                            operateday: dat,
                            direction: 'out'
                        },
                        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access.product')}})
                        .then(res => {
                            console.log(res)
                        })
                }
            },
            // 入库
            async inStorage() {
                const dat = new Date();
                this.inoutStorgeForm = await this.getRow();
                this.inoutStorgeForm.sCount += this.inForm.inCount;
                axios.put('/api/home/storage/' + this.selectedRow + '/', qs.stringify(this.inoutStorgeForm)).then(res => {
                    console.log(res);
                    this.getStoragePage(this.currentPage);
                });
                this.inStorgeVisible = false;
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
                    axios.post('/api/home/inoutstorage/', {
                            storage_id: this.selectedRow, lCount: this.inForm.inCount,
                            operateday: dat, direction: 'in'
                        },
                        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access.product')}})
                        .then(res => {
                            console.log(res)
                        })
                }
            },
            // 采购
            async buyStorage() {
                const dat = new Date();
                this.buyStorgeVisible = false;
                //记录买入条目
                let auth = true;
                authorization().then(function (response) {
                    // 检查登录状态
                    if (!response[0]) {
                        alert('登录已过期，请重新登录');
                        auth = false;
                    }
                });
                // 在出入库记录中记录一行，包括操作者，买入数量，备注
                if (auth) {
                    axios.post('/api/home/inoutstorage/', {
                            storage_id: this.selectedRow, lCount: this.buyForm.buyCount,
                            operateday: dat, direction: 'buy', remark: this.buyForm.buyMark
                        },
                        {headers: {Authorization: 'Bearer ' + localStorage.getItem('access.product')}})
                        .then(res => {
                            console.log(res)
                            this.getStoragePage(this.currentPage);
                        })
                }
            },
            // 选择条目
            rowClicked(row) {
                this.removeStorageDisabled = false;
                this.outStorageDisabled = false;
                this.inStorageDisabled = false;
                this.buyStorageDisabled = false;
                this.selectedRow = row.id;
            },
            // 因为出库需要记录所属订单,所以这里要获取一下订单信息
            async getProduct() {
                let a = {};
                await axios.get('/api/home/product/').then(res => {
                    a = res.data.results;
                })
                return a;
            },
            // 查询库存品代码
            async querySid(val) {
                var res = await axios.get('/api/home/storage/', {
                    params: {
                        search: val.sId
                    }
                })
                // console.log(res.data.count)
                if (res.data.count === 0) {
                    await this.addStorage(this.addStorgeForm)
                } else {
                    console.log('已在库存中，无需再添加。')
                }
                // return this.addStorage(val)
            },
            async readxlsx(val) {
                // console.log('-----------')
                // console.log(val.length)
                for (var i = 0; i < val.length; i++) {
                    this.addStorgeForm.sId = val[i].库存品代码
                    this.addStorgeForm.spartNumber = val[i].物料号
                    this.addStorgeForm.sName = val[i].品名
                    this.addStorgeForm.sUnit = val[i].单位
                    this.addStorgeForm.sDescription = val[i].规格型号描述
                    this.addStorgeForm.sCount = val[i].库存余量
                    this.addStorgeForm.ssafeCount = val[i].安全库存
                    this.addStorgeForm.sArea = val[i].存放点
                    this.addStorgeForm.sPosition = val[i].存放库位
                    this.addStorgeForm.sPackage = val[i].包装特征
                    this.addStorgeForm.sSupplier = val[i].供应商
                    this.addStorgeForm.sProductLine = val[i].产品线
                    await this.querySid(this.addStorgeForm)
                }
            },
            // 行状态显示
            tableRowClassStatus(row) {
                // console.log(row.row)
                if ((row.row.sCount - row.row.ssafeCount) <= 0) {
                    return 'warning-row'
                }
                if (row.row.inoutstorage.lCount > 0 && row.row.inoutstorage.direction === 'buy') {
                    return 'success-row'
                }
                return ''
            },
            //双击编辑备注内容
            editCell(row, col) {
                if (col.property === 'sName') {
                    row.tbsName = true;
                }
                if (col.property === 'spartName') {
                    row.tbspartName = true;
                }
                if (col.property === 'sDescription') {
                    row.tbsDescription = true;
                }
                if (col.property === 'ssafeCount') {
                    row.tbsafeCount = true;
                }
                if (col.property === 'remark') {
                    row.tbremark = true;
                }
                if (col.property === 'spartNumber') {
                    row.tbspartNumber = true;
                }
                if (col.property === 'sArea') {
                    row.tbsArea = true;
                }
                if (col.property === 'sPosition') {
                    row.tbsPosition = true;
                }
            },
            commitCell(row, val, col) {

                if (col.property === 'sName') {
                    row.tbsName = false;
                    delete row.tbsName
                }
                if (col.property === 'spartNumber') {
                    row.tbspartNumber = false;
                    delete row.tbspartNumber
                }
                if (col.property === 'spartName') {
                    row.tbspartName = false;
                    delete row.tbspartName
                }
                if (col.property === 'sDescription') {
                    row.tbsDescription = false;
                    delete row.tbsDescription
                }
                if (col.property === 'ssafeCount') {
                    row.tbsafeCount = false;
                    delete row.tbssafeCount
                }
                if (col.property === 'remark') {
                    row.tbremark = false;
                    delete row.tbremark
                }
                if (col.property === 'sArea') {
                    row.tbsArea = false;
                    delete row.tbsArea
                }
                if (col.property === 'sPosition') {
                    row.tbsPosition = false;
                    delete row.tbsPosition
                }
                this.patchStorge(col.property, val, row)
            },
            patchStorge(item, val, row) {
                var data = {}
                data[item] = val
                axios.patch('/api/home/storage/' + row.id + '/', data).then(res => {
                    console.log(res)
                })
            },
            //不检索了，回到主页
            goback() {
                this.getStoragePage(this.currentPage);
            }
        },
        // 页面初始化
        async created() {
            await this.getStorage();
            await this.getAllStorage();
            this.saveflag = true;
            this.orderOptions = products.orders.allorder;
        },
    }

</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .el-pagination__total {

    }

    .el-table >>> th {
        padding: 5px;
    }

    .el-table >>> td {
        padding: 5px;
    }

    .el-table >>> .warning-row {
        --el-table-tr-bg-color: #fab6b6;
    }

    .row-button {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
</style>