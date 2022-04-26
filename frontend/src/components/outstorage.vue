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
            <el-col :span="18"  align="left">
                <el-button type='primary' @click="search">搜索</el-button>
                <span style="font-size: 20px; padding-left: 20px; font-weight:bolder">出库记录</span>
            </el-col>

        </el-row>
        <!--        数据列表-->
        <el-table :data="outstorage" border style="width: 100%"
                  @cell-dblclick="editCell"
                  highlight-current-row>·
            <!--            <el-table-column prop="id" label="编号" />-->
            <el-table-column prop="storage.sId" label="库存代码" />
            <el-table-column prop="storage.sName" label="品名" />
            <el-table-column prop="user.username" label="操作者" />
            <el-table-column prop="lCount" label="数量" />
            <el-table-column prop="product.customer" label="客户" />
            <el-table-column prop="remark" label="备注" width="500">
                    <template v-slot:default="scope">
                            <el-input v-model=scope.row.remark v-if="scope.row.tbremark"
                                      @blur="commitCell(scope.row,scope.row.remark,scope.column)">
                            </el-input>
                            <span v-else>{{scope.row.remark}}</span>
                    </template>
            </el-table-column>

            <el-table-column prop="operateday" label="出库时间" :formatter="formatUpdated"/>

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
        name: "outstorage",
        data() {
            return {
                outstorage: [],
                searchInfo: '',
                currentPage: 1,
                total:0,
                pageCount:0,
            }
        },
        methods: {
            // 检索，待细化
            async search() {
                // console.log('search storage clicked');
                // console.log(this.searchInfo);
                var res = await axios.get('/api/home/inoutstorage/', {
                    params: {
                        direction:'out',
                        search: this.searchInfo
                    }
                })
                if (res.data.count !== 0) {
                    this.outstorage = res.data.results
                } else {
                    this.outstorage = []
                }
            },
            //修改更新时间为只有日期
            formatUpdated(row){
                return row.operateday.substr(0,16,16).replace('T',' ') ;
            },
            getOutStorage(){
                axios.get('/api/home/inoutstorage/',{params:{direction:'out'}}).then(res => {
                    this.outstorage = res.data.results;
                    this.total = res.data.count;
                    this.pageCount = Math.ceil(this.total / 10);
                })
            },
            getOutStoragePage(page){
                axios.get('/api/home/inoutstorage/',{params:{
                    direction:'out',
                    page:page
                    }}).then(res=>{
                    this.outstorage = res.data.results;
                })
            },
            CurrentChange(currentPage){
                this.getOutStoragePage(currentPage);
            },
            // 页码变化
            currentChange(page) {
                this.currentPage = page;
                this.getOutStoragePage(page);
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
                axios.patch('/api/home/inoutstorage/' + row.id + '/', data).then(res => {
                    console.log(res)
                })
            },
            goback(){
                this.getOutStoragePage(this.currentPage)
            }
        },
        // 初始化是时导入出库记录表
        created() {
            this.getOutStorage();
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    ::v-deep .el-table__body tr.current-row>td {
        background-color:  #95d475 !important;
    }

</style>