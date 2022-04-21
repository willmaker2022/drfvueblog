<template>
    <div>
        <el-upload
                ref="upload"
                action="#"
                :auto-upload="false"
                list-type="picture-card"
                :show-file-list="true"
                :on-change="getfile"
                :on-remove="removefile"
                :on-preview="prefile"
                :class="[uploadHide ? '' : 'hidden-Btn']"
        >
            <el-icon>
                <plus/>
            </el-icon>
        </el-upload>

    </div>
</template>


<script>
    import {Plus} from '@element-plus/icons-vue'

    export default {
        name: 'upload',
        emits: (["imagefile"]),
        components: {
            Plus,
        },
        props: {
            uploadHide: {
                types: Boolean,
            }
        },
        setup(props, {emit}) {
            const getfile = (file) => {
                emit("imagefile", file);
            };
            const removefile = (file) => {
                file = ''
                emit('imagefile', file);
            }
            return {
                getfile,
                removefile,
            };

        },
        methods: {
            prefile(file) {
                if (file.url) {
                    window.open(file.url);
                }
            },
        },
    }
</script>
<style scoped>
    .hidden-Btn >>> .el-upload {
        display: none;
    }
</style>