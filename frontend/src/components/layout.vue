<template>
    <el-row>
        <el-col :span="24">
            <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <el-button type="text" class="button">Operating</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="8">
        <el-col :span="8">
            <el-card>
                <h1>span8</h1>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card>
                <h1>span8</h1>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-row :gutter="8">
                <el-col :span="8">
                    <el-card><h1>span9</h1></el-card>
                </el-col>
                <el-col :span="8">
                    <el-card><h1>span9</h1></el-card>
                </el-col>
                <el-col :span="8">
                    <el-card><h1>span9</h1></el-card>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .button {
        padding: 0;
        min-height: auto;
    }

    .image {
        width: 100%;
        display: block;
    }
</style>