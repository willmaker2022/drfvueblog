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
                <span style="font-size: 20px; padding-left: 20px; font-weight:bolder">编号生成器</span>
            </el-col>

        </el-row>
    </el-card>
</template>

<script>
    export default {
        name: "batchno"
    }
</script>

<style scoped>

</style>