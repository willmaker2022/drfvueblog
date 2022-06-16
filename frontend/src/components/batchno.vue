<template>
    <el-container style="background: white">
        <el-header style="padding-bottom: 0px;padding-top: 20px; padding-left: 20px">
            <!--    搜索-->
            <el-col :span="6">
                <el-input
                        v-model="searchInfo"
                        placeholder="输入检索的内容"
                        clearable
                        @clear="goback"
                />
            </el-col>
            <el-col :span="6" align="left">
                <el-button type='primary' @click="searchNO">搜索编号</el-button>
            </el-col>
            <el-col :span="10">
                <el-input
                        v-model="description"
                        placeholder="输入描述内容"
                        clearable
                        @clear="goback"
                />
            </el-col>
            <el-col :span="2" align="left">
                <el-button type='primary' @click="addList">生成编号</el-button>
            </el-col>
        </el-header>
        <el-main>
            <el-table :data="results" border style="width: 100%"
                      highlight-current-row>
                <el-table-column prop="batchno" label="编号"/>
                <el-table-column prop="description" label="描述"/>
                <el-table-column prop="created" :formatter="formatUpdated" label="创建日期"/>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    import axios from "axios";
    import authorization from "../../utils/authorization";
    import qs from 'qs'

    export default {
        name: "batchno",
        data() {
            return {
                batchNO: '',
                description: '',
                results: [],
                //查询编号和表述，都没有
                successFlag: false,
                searchInfo: ''
            }
        },
        methods: {
            //修改更新时间为只有日期
            formatUpdated(row) {
                return row.created.substr(0, 16, 16).replace('T', ' ');
            },
            // 检索，待细化
            async search(info) {
                var res = await axios.get('/api/home/batchno/', {
                    params: {
                        search: info
                    }
                })
                if (res.data.count >= 1) {
                    this.results = res.data.results
                    this.successFlag = true;
                }
            },
            searchNO() {
                this.search(this.searchInfo);
            },
            generateNo() {
                var code = '';
                //设置长度，这里看需求，我这里设置了4
                var codeLength = 5;
                //设置随机字符
                var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
                //循环codeLength 我设置的4就是循环4次
                for (var i = 0; i < codeLength; i++) {
                    //设置随机数范围,这设置为0 ~ 36
                    var index = Math.floor(Math.random() * 9);
                    //字符串拼接 将每次随机的字符 进行拼接
                    code += random[index];
                }
                //将拼接好的字符串赋值给展示的code
                return code;
            },
            async addList() {
                this.successFlag = false;
                console.log('outside:', this.successFlag)
                while (!this.successFlag) {
                    //先生成编号
                    this.batchNO = this.generateNo();
                    this.search(this.batchNO)
                    if (this.successFlag) {
                        this.successFlag = false;
                    }
                    console.log('inside:', this.successFlag)
                    if (this.description !== '' && !this.successFlag) {
                        this.successFlag = true;
                        let auth = true;
                        authorization().then(function (response) {
                            // 检查登录状态
                            if (!response[0]) {
                                alert('登录已过期，请重新登录');
                                auth = false;
                                this.$router.push({name: 'Login'});
                            }
                        });
                        // 在出入库记录中记录一行，包括操作者，买入数量，备注
                        if (auth) {
                            //记录编号条目
                            await axios.post('/api/home/batchno/', qs.stringify({
                                    batchno: this.batchNO,
                                    description: this.description
                                }),
                                {headers: {Authorization: 'Bearer ' + localStorage.getItem('access.product')}});
                            this.search(this.batchNO);
                            this.description = '';
                        }
                    } else {
                        alert('请输入描述内容！')
                        this.successFlag = true;
                    }

                }

            },
            goback() {
                this.results = '';
            }
        }

    }
</script>

<style scoped>
    ::v-deep .el-table__body tr.current-row > td {
        background-color: #95d475 !important;
    }

    .el-table >>> th {
        padding: 10px;
    }

    .el-table >>> td {
        padding: 10px;
    }
    .el-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        vertical-align: middle;
    }
</style>