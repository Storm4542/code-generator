<template>
    <div>
        <el-time-picker
            v-model="propsValue.value"
            :picker-options="propsValue['picker-options']"
            :placeholder="propsValue.placeholder"
            :readonly="propsValue.readonly"
            :disabled="propsValue.disabled"
            :editable="propsValue.editable"
            :clearable="propsValue.clearable"
            :size="propsValue.size"
            :align="propsValue.align"
            :popper-class="propsValue['popper-class']"
            :range-separator="propsValue['range-separator']"
            :start-placeholder="propsValue['start-placeholder']"
            :end-placeholder="propsValue['end-placeholder']"
            :is-range="propsValue['is-range']"
            :arrow-control="propsValue['arrow-control']"
            :value-format="propsValue['value-format']"
            :default-value="propsValue['default-value']"
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
    name:"Timepicker",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:'',
                'picker-options':{
                    selectableRange: '18:30:00 - 20:30:00'
                },
                readonly:false,
                disabled:false,
                editable:true,
                clearable:true,
                size:'small',
                placeholder:'请选择',
                align:"center",
                'popper-class':'',
                'range-separator':'-',
                'start-placeholder':"开始时间",
                'end-placeholder':"结束时间",
                'is-range':false,
                'arrow-control':false,
                'value-format':'',
                'default-value':new Date(),
                format:'',
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