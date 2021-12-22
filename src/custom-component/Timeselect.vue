<template>
    <div>
        <el-time-select
            v-model="propsValue.value"
            :picker-options="propsValue['picker-options']"
            :readonly="propsValue.readonly"
            :disabled="propsValue.disabled"
            :editable="propsValue.editable"
            :clearable="propsValue.clearable"
            :size="propsValue.size"
            :placeholder="propsValue.placeholder"
            :align="propsValue.align"
            :popper-class="propsValue['popper-class']"
            :range-separator="propsValue['range-separator']"
            @change="events.change"
            @blur="events.blur"
            @focus="events.focus"
            >
        </el-time-select>
    </div>
</template>
<script>
export default {
    name:"Timeselect",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:'',
                'picker-options':{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: '',
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