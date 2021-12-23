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
            :format="propsValue.format"
            :align="propsValue.align"
            :popper-class="propsValue['popper-class']"
            :picker-options="propsValue['picker-options']"
            :range-separator="propsValue['range-separator']"
            :default-value="propsValue['default-value']"
            :name="propsValue.name"
            :unlink-panels="propsValue['unlink-panels']"
            :validate-event="propsValue['validate-event']"
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
                'popper-class':'',
                'picker-options':{},
                'range-separator':'-',
                'default-value':new Date(),
                name:"",
                'unlink-panels':false,
                'validate-event':true
            }

        },
        events:{
            type: Object,
            default: () => {
                return {
                    change: () => {console.log('默认change');},
                    blur: () => {console.log('blur');},
                    focus: () => {console.log('focus');},
                };
            }
        }
    }
}
</script>
