<template>
    <div>
        <el-time-select
            v-model="propsValue.value"
            :picker-options="propsValue.pickerOptions"
            :readonly="propsValue.readonly"
            :disabled="propsValue.disabled"
            :editable="propsValue.editable"
            :clearable="propsValue.clearable"
            :size="propsValue.size"
            :placeholder="propsValue.placeholder"
            :align="propsValue.align"
            :popper-class="propsValue.popperClass"
            :range-separator="propsValue.rangeSeparator"
            @change="events.change"
            @blur="events.blur"
            @focus="events.focus"
        >
        </el-time-select>
    </div>
</template>
<script>
export default {
    name: "TimeSelect",
    props: {
        propsValue: {
            type: Object,
            default: {
                value: '',
                pickerOptions: {
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: '',
                },
                readonly: false,
                disabled: false,
                editable: true,
                clearable: true,
                size: 'small',
                placeholder: '请选择',
                align: "center",
                popperClass: '',
                rangeSeparator: '-',
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
