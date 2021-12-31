<template>
    <div>
        <el-upload
            :action="propsValue.action"
            :on-preview="propsValue.handlePreview"
            :on-remove="propsValue.handleRemove"
            :before-remove="propsValue.beforeRemove"
            :before-upload="propsValue.beforeUpload"
            :headers="propsValue.headers"
            :data="propsValue.data"
            :multiple="propsValue.multiple"
            :limit="3"
            :disabled="propsValue.disabled"
            :with-credentials="propsValue.withCredentials"
            :show-file-list="propsValue.showFileList"
            :drag="propsValue.drag"
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
                multiple:true,
                handlePreview:function (file) {
                    console.log(file);
                },
                handleRemove:function(file,fileList){
                    console.log(file,fileList);
                },
                beforeRemove:function(file,fileList){
                    console.log(file,fileList);
                },
                beforeUpload:function(file){
                    console.log(file);
                },
                headers:{},
                data:{},
                withCredentials:false,
                showFileList:true,
                drag:false,
                disabled:false,
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