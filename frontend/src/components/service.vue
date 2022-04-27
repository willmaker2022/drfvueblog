<template>
    <el-container >
        <el-aside width="400px">
            <report></report>
        </el-aside>
        <el-main style="padding: 0px; ">
            <el-card style="height: 100%; overflow: scroll" >
                <!--    搜索框和按钮-->
                <el-row :gutter="12" margin-bottom=20px>
                    <el-col :span="6">
                        <el-input
                                v-model="searchInfo"
                                placeholder="输入检索的内容"
                                clearable
                                @clear="goback"
                        >
                        </el-input>
                    </el-col>
                    <el-col :span="18" align="left">
                        <el-button type='primary' @click="search">搜索</el-button>
                        <el-button type='danger' @click="deleteVisible=true"
                                   :disabled="removeDisabled?true:false">删除
                        </el-button>
                        <span style="font-size: 20px; padding-left: 20px; font-weight:bolder">维修报告</span>
                    </el-col>
                </el-row>
                <el-table :data="reports" border style="width: 100%"
                          highlight-current-row
                          @row-click="rowClicked"
                >
                    <el-table-column type="expand">
                        <template #default="detail">
                            <el-card>
                                <div style="padding: 14px" ref="reportDom">
                                    <el-row>
                                        <el-col justfy="start" :span="6" @dblclick="saveReport(detail.row)">
                                            <h1>描述：</h1>
                                            <div style="font-size: 18px"
                                                 v-for="(item,index) in detail.row.description.split('-').slice(0,-1)"
                                                 :key="item" class="text item">{{ index+1 +" . "+ item }}
                                            </div>
                                            <h1>步骤：</h1>
                                            <div style="font-size: 18px"
                                                 v-for="(item,index) in detail.row.actions.split('-').slice(0,-1)"
                                                 :key="item" class="text item">{{ index+1 +" . "+ item }}
                                            </div>
                                            <el-row style="margin-bottom: 5px">
                                                <div>
                                                    <h1>备注：</h1>
                                                    <div style="font-size: 18px">{{ detail.row.remark}}</div>
                                                </div>
                                            </el-row>
                                        </el-col>
                                        <el-col justfy="start" :span="18">
                                            <el-image :src=detail.row.pictures fit="contain"
                                                      crossOrigin="*"
                                                      class="image"></el-image>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </template>
                    </el-table-column>
                    <el-table-column prop="orderid.customer" label="用户名" />
                    <el-table-column prop="orderid.productid" label="型号" />
                    <el-table-column prop="orderid.serial" label="序列号" />
                    <el-table-column prop="style" label="报告类型" :formatter="formateStyle" />
                    <el-table-column prop="created" label="日期" :formatter="formatUpdated"/>
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
        </el-main>

    </el-container>
    <!--    <layout></layout>-->
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
    import Report from "./report";
    import Layout from "./layout";
    import axios from "axios";
    import {Search} from '@element-plus/icons-vue'
    //html导出图片
    import html2canvas from "html2canvas"

    export default {
        name: "service",
        components: {
            Layout,
            Report,
            Search,
        },
        data() {
            return {
                // 删除按钮使能
                removeDisabled: true,
                deleteVisible: false,
                //当前选中条目
                selectedRow: 0,
                showbutton: true,
                searchInfo: '',
                reports: [],
                total: 0,
                pageCount: 0,
                currentPage: 0,
            }
        },
        methods: {
            //修改更新时间为只有日期
            formatUpdated(row) {
                return row.created.substr(0, 16, 16).replace('T', ' ');
            },
            async getReports() {
                await axios.get('/api/home/service/').then(res => {
                    this.reports = res.data.results;
                    this.total = res.data.count;
                    this.pageCount = Math.ceil(this.total / 16);
                });
            },
            async getReportsPage(page) {
                await axios.get('/api/home/service/', {
                    params: {
                        page: page
                    }
                }).then(res => {
                    this.reports = res.data.results;
                })
            },
            // 检索，待细化
            async search() {
                // console.log('search storage clicked');
                // console.log(this.searchInfo);
                var res = await axios.get('/api/home/service/', {
                    params: {
                        search: this.searchInfo
                    }
                })
                if (res.data.count !== 0) {
                    this.reports = res.data.results
                } else {
                    this.reports = []
                }
            },
            CurrentChange(currentPage) {
                this.getReportsPage(currentPage);
            },
            //修改订单类型显示
            formateStyle(row) {
                if (row.style === 'servicein') {
                    return "保内维修";
                }
                if (row.style === 'serviceout') {
                    return "保外维修";
                }
                if (row.style === 'production') {
                    return "工艺改进";
                }
            },
            //报告另存
            saveReport(val) {
                console.log(val)
                html2canvas(this.$refs.reportDom, {useCORS: true, allowTaint: true}).then(canvas => {
                    // 转成图片，生成图片地址
                    let saveUrl = canvas.toDataURL("image/png");
                    let alink = document.createElement('a');
                    alink.href = saveUrl
                    if(val.orderid !== null){
                        alink.download = "型号" + val.orderid.productid + '_' + "序列号" + val.orderid.serial + '_' + val.created.substr(0, 10, 10);
                    }else{
                        alink.download = val.created.substr(0, 10, 10);
                    }
                    const event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    alink.dispatchEvent(event);
                });
            },
            goback() {
                this.getReportsPage(this.currentPage)
            },
            rowClicked(row) {
                this.selectedRow = row.id;
                this.removeDisabled = false;
            },
            async remove(){
                  axios.delete('/api/home/service/' + this.selectedRow + '/').then(res => {
                        console.log(res);
                        this.getReports()
                    }
                );
                this.deleteVisible = false;
            }
        },
        created() {
            this.getReports();
        },
    }

</script>

<style scoped>
    .el-aside {
        background: #ecf5ff;
    }
    .el-container {
        background: #d9ecff;
        height: 100%;
    }
    .el-row {
        margin-bottom: 20px;
        font-size: 20px;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .el-image {
        justify-content: center;
        display: flex;
        align-content: center;
    }
    >>> .el-image__inner {
        padding: 0px;
        width: auto;
        height: 600px;
        padding-right: 0px;
    }
    ::v-deep .el-table__body tr.current-row>td {
        background-color:  #95d475 !important;
    }
    .el-table >>> th {
        padding: 10px;
    }

    .el-table >>> td {
        padding: 10px;
    }
</style>