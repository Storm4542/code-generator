<template>
    <div>
        <el-input-number
            v-model="propsValue.value"
            @change="events.change"
            :min="propsValue.min"
            :max="propsValue.max"
            :step="propsValue.step"
            :step-strictly="propsValue.stepStrictly"
            :controls-position="propsValue.controlsPosition"
            :label="propsValue.label"
            :size="propsValue.size"
            :disabled="propsValue.disabled"
            :controls="propsValue.controls"
        ></el-input-number>
    </div>
</template>
<script>
export default {
    name: 'InputNumber',
    props: {
        propsValue: {
            type: Object,
            default: {
                value: 0,
                min: 0,
                max: 10,
                step: 1,
                stepStrictly: false,
                size: 'large',
                disabled: false,
                controls: false,
                controlsPosition: 'right',
                label: '描述'
            }
        },

        events: {
            type: Object,
            default: () => {
                return {
                    change: () => {console.log('默认change');},
                };
            }
        }
    }
};
</script>
