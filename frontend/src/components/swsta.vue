<template>
    <el-card>
        <!--    搜索框和按钮-->
        <el-row :gutter="12" margin-bottom=20px>
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
                <span style="font-size: 20px; padding-left: 20px; font-weight:bolder">机械件状态</span>
            </el-col>

        </el-row>
        <!--        数据列表-->
        <el-table :data="swdata" border style="width: 100%" highlight-current-row @cell-dblclick="editCell">
            <el-table-column prop="orderid.orderid" label="订单号" />
            <el-table-column prop="orderid.customer" label="客户名称" />
            <el-table-column prop="startday" label="开始日期" />
            <el-table-column prop="endday" label="交货日期" />
            <el-table-column prop="status" label="状态"  :formatter="formatStatus"/>
            <el-table-column prop="remark" label="备注">
                <template v-slot:default="scope">
                            <el-input v-model=scope.row.remark v-if="scope.row.tbremark"
                                      @blur="commitCell(scope.row,scope.row.remark,scope.column)">
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
</template>

<script>
    import axios from 'axios'
    export default {
        name: "swsta",
        data() {
            return {
                swdata: [],
                searchInfo: '',
                currentPage: 1,
                total:0,
                pageCount:0,
            }
        },
        methods: {
            // 检索，待细化
            async search() {
                var res = await axios.get('/api/home/processsoftware/', {
                    params: {
                        search: this.searchInfo
                    }
                })
                if (res.data.count !== 0) {
                    this.swdata = res.data.results
                } else {
                    this.swdata = []
                }
            },
            //修改订单状态显示
            formatStatus(row) {
                if (row.status === 'process') {
                    return "进行中";
                }
                if (row.status === 'finish') {
                    return "已完成";
                }
                if (row.status === 'pending') {
                    return "未开始";
                }
            },
            getswdata(){
                axios.get('/api/home/processsoftware/').then(res => {
                    this.swdata = res.data.results;
                    this.total = res.data.count;
                    this.pageCount = Math.ceil(this.total / 20);
                })
            },
            getswdataPage(page){
                axios.get('/api/home/processsoftware/',{params:{
                    page:page
                    }}).then(res=>{
                    this.swdata = res.data.results;
                })
            },
            CurrentChange(currentPage){
                this.getmedataPage(currentPage);
            },
            // 页码变化
            currentChange(page) {
                this.currentPage = page;
                this.getswdataPage(page);
            },
            goback(){
                this.getswdataPage(this.currentPage)
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
                axios.patch('/api/home/processsoftware/' + row.orderid.id + '/', data)
            },
        },
        // 初始化是时导入出库记录表
        created() {
            this.getswdata();
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
</style>