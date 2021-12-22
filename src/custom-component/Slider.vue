<template>
    <div>
        <el-slider 
            v-model="propsValue.value"
            :min="propsValue.min"
            :max="propsValue.max"
            :disabled="propsValue.disabled"
            :step="propsValue.step"
            :show-input="propsValue['show-input']"
            :show-input-controls="propsValue['show-input-controls']"
            :input-size="propsValue['input-size']"
            :show-stops="propsValue['show-stops']"
            :show-tooltip="propsValue['show-tooltip']"
            :format-tooltip="propsValue['format-tooltip']"
            :range="propsValue.range"
            :vertical="propsValue.vertical"
            :height="propsValue.height"
            :label="propsValue.label"
            :debounce="propsValue.debounce"
            :tooltip-class="propsValue['tooltip-class']"
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
                'show-input':false,
                'show-input-controls':true,
                'input-size':'small',
                'show-stops':false,
                'show-tooltip':true,
                'format-tooltip':function (params) {
                    console.log(params);
                },
                range:false,
                vertical:false,
                height:'',
                label:'',
                debounce:300,
                'tooltip-class':''
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
                    input: () => {console.log('input');},
                };
            }
        }
    }
}
</script>