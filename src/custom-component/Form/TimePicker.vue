<template>
    <div>
        <el-time-picker
            v-model="propsValue.value"
            :picker-options="propsValue.pickerOptions"
            :placeholder="propsValue.placeholder"
            :readonly="propsValue.readonly"
            :disabled="propsValue.disabled"
            :editable="propsValue.editable"
            :clearable="propsValue.clearable"
            :size="propsValue.size"
            :align="propsValue.align"
            :popper-class="propsValue.popperClass"
            :range-separator="propsValue.rangeSeparator"
            :start-placeholder="propsValue.startPlaceholder"
            :end-placeholder="propsValue.endPlaceholder"
            :is-range="propsValue.isRange"
            :arrow-control="propsValue.arrowControl"
            :value-format="propsValue.valueFormat"
            :default-value="propsValue.defaultValue"
            :format="propsValue.format"
            @change="events.change"
            @blur="events.blur"
            @focus="events.focus"
            >
        </el-time-picker>
    </div>
</template>
<script>
export default {
    name:"TimePicker",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:'',
                pickerOptions:{
                    selectableRange: '00:00:00 - 23:59:59'
                },
                readonly:false,
                disabled:false,
                editable:true,
                clearable:true,
                size:'small',
                placeholder:'请选择',
                align:"center",
                popperClass:'',
                rangeSeparator:'-',
                startPlaceholder:"开始时间",
                endPlaceholder:"结束时间",
                isRange:false,
                arrowControl:false,
                valueFormat:'HH:mm:ss',
                defaultValue:new Date().getTime(),
                format:'HH:mm:ss',
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
}
</script>
