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
            :start-placeholder="propsValue.startPlaceholder"
            :end-placeholder="propsValue.endPlaceholder"
            :format="propsValue.format"
            :align="propsValue.align"
            :popper-class="propsValue.popperClass"
            :picker-options="propsValue.pickerOptions"
            :range-separator="propsValue.rangeSeparator"
            :default-value="propsValue.defaultValue"
            :name="propsValue.name"
            :unlink-panels="propsValue.unlinkPanels"
            :validate-event="propsValue.validateEvent"
            >
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:"DatePicker",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:new Date().getTime(),
                type:'date',
                placeholder:'选择日期',
                readonly:false,
                disabled:false,
                editable:true,
                clearable:true,
                size:"",
                startPlaceholder:'开始日期',
                endPlaceholder:'结束日期',
                format:'yyyy-MM-dd',
                align:"left",
                popperClass:'',
                pickerOptions:{},
                rangeSeparator:'-',
                defaultValue:new Date().getTime(),
                name:"",
                unlinkPanels:false,
                validateEvent:true
            }
        },
        events: {
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
};
</script>
