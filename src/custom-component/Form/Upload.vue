<template>
    <div>
        <el-upload
            :action="propsValue.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :file-list="propsValue.fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
export default {
    name:'Upload',
    props:{
        propsValue:{
            type:Object,
            default:{
                action:"",
                fileList:[],
                handlePreview:function (file) {
                    console.log(file);
                },
                handleRemove:function(file,fileList){
                    console.log(file,fileList);
                },
                beforeRemove:function(file,fileList){
                    console.log(file,fileList);
                }
            }
        },
        events:{
            type: Object,
            default: () => {
                return {
                    click: () => {console.log('默认click');},
                };
            }
        }
    }
}
</script>