<template>
    <section>
        <input type="file" @change="onChange">
        <xlsx-read :file="file" >
            <xlsx-json :sheet="selectedSheet" ref="XlsxJson" v-on:parsed="getjson">
            </xlsx-json>
        </xlsx-read>
    </section>
</template>
<script>
    import XlsxRead from "./xlsx/XlsxRead";
    import XlsxJson from "./xlsx/XlsxJson";

    export default {
        components: {
            XlsxRead,
            XlsxJson
        },
        data() {
            return {
                file: null,
                datas: [],
            };
        },
        methods: {
            onChange(event) {
                this.file = event.target.files ? event.target.files[0] : null;
            },
            getjson(val) {
                this.$emit('readxlsx', val)
            },
        }
    }
</script>