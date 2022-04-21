<template>
    <section>
        <xlsx-workbook>
            <xlsx-sheet
                    :collection="data"
                    :key="name"
                    :sheet-name="name"
            ></xlsx-sheet>
            <xlsx-download>
                <el-button type='success' size="samll">下载数据</el-button>
            </xlsx-download>
        </xlsx-workbook>
    </section>
</template>

<script>
    import XlsxWorkbook from "./xlsx/XlsxWorkbook";
    import XlsxSheet from "./xlsx/XlsxSheet";
    import XlsxDownload from "./xlsx/XlsxDownload";

    export default {
        components: {
            XlsxWorkbook,
            XlsxSheet,
            XlsxDownload
        },
        props: {
            savedata: {
                type: Array,
                required: true
            }
        },
        // props: ['savedata'],
        data() {
            return {
                // sheets: [{name: "SheetOne", data: this.props.savedata}],
                // sheets: [{ name: "SheetOne", data: [{ c: 2 }]}],
                // sheets:[{name:'',data: []}]
                name: 's1',
                data: [{c: 2}]
            };
        },
        watch: {
            // savedata: function (newVal) {
            //     console.log('in save xlsx:', newVal)
            //     this.data = newVal;  //newVal即是chartData
            // }
            savedata: {
                immediate: true,
                handler: function(val){
                    this.data = val;  //newVal即是chartData
                }
            }
        },
    }
</script>