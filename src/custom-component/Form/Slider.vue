<template>
    <div>
        <el-slider
            v-model="propsValue.value"
            :min="propsValue.min"
            :max="propsValue.max"
            :disabled="propsValue.disabled"
            :step="propsValue.step"
            :show-input="propsValue.showInput"
            :show-input-controls="propsValue.showInputControls"
            :input-size="propsValue.inputSize"
            :show-stops="propsValue.showStops"
            :show-tooltip="propsValue.showTooltip"
            :format-tooltip="propsValue.formatTooltip"
            :range="propsValue.range"
            :vertical="propsValue.vertical"
            :height="propsValue.height"
            :label="propsValue.label"
            :debounce="propsValue.debounce"
            :tooltip-class="propsValue.tooltipClass"
            @change="events.change"
            @input="events.input"
        ></el-slider>
    </div>
</template>
<script>
export default {
    name: "Slider",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:0,
                min:0,
                max:100,
                disabled:false,
                step:1,
                showInput:false,
                showInputControls:true,
                inputSize:'small',
                showStops:false,
                showTooltip:true,
                formatTooltip:function (params) {
                    console.log(params);
                },
                range:false,
                vertical:false,
                height:'',
                label:'',
                debounce:300,
                tooltipClass:''
            }
        },
        events: {
            type: Object,
            default: () => {
                return {
                    change: () => {console.log('默认change');},
                    input: () => {console.log('input');},
                };
            }
        }
    }
}
</script>
