<template>
    <div>
        <el-date-picker
        v-model="propsValue.value"
        :type="propsValue.type"
        :placeholder="propsValue.placeholder"
        :readonly="propsValue.readonly"
        :disabled="propsValue.disabled"
        :editable="propsValue.editable"
        :clearable="propsValue.clearable"
        :size="propsValue.size"
        :start-placeholder="propsValue.startPlaceholder"
        :end-placeholder="propsValue.endPlaceholder"
        :time-arrow-control="propsValue.timeArrowControl"
        :format="propsValue.format"
        :align="propsValue.align"
        :popper-class="propsValue.popperClass"
        :range-separator="propsValue.rangeSeparator"
        :default-value="propsValue.defaultValue"
        :unlink-panels="propsValue.unlinkPanels"
        @change="events.change"
        @blur="events.blur"
        @focus="events.focus"
        >
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name:"DateTimePicker",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:new Date().getTime(),
                type:'datetime',
                placeholder:'选择日期时间',
                readonly:false,
                disabled:false,
                editable:true,
                clearable:true,
                size:'small',
                startPlaceholder:'',
                endPlaceholder:'',
                timeArrowControl:false,
                format:'yyyy-MM-dd HH:mm:ss',
                align:'left',
                popperClass:'',
                rangeSeparator:"-",
                defaultValue:new Date().getTime(),
                unlinkPanels:false,
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