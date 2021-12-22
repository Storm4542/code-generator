<template>
    <div>
        <el-date-picker
            v-model="propsValue.value"
            :type="propsValue.type"
            :placeholder="propsValue.placeholder"
            :disabled="propsValue.disabled"
            :editable="propsValue.editable"
            :clearable="propsValue.clearable"
            :size="propsValue.size"
            :start-placeholder="propsValue['start-placeholder']"
            :end-placeholder="propsValue['end-placeholder']"
            >
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:"Datepicker",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:'',
                type:'date',
                placeholder:'选择日期',
                readonly:false,
                disabled:false,
                editable:true,
                clearable:true,
                size:"",
                'start-placeholder':'开始日期',
                'end-placeholder':'结束日期',
                format:'yyyy-MM-dd',
                align:"left",
                
            }
            
        },
        style: {
            type: Object,
            default: () => {
                return {
                    left: '',
                    right: '',
                    top: '',
                    bottom: '',
                    width:'',
                    height:'',
                };
            }
        },
    }
}
</script>