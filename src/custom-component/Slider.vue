<template>
    <div >
        <el-slider
            v-model="propsValue.value"
            :min="propsValue.min"
            :max="propsValue.max"
            @change="events.change"
        ></el-slider>
    </div>
</template>
<script>
export default {
    name: "Slider",
    props:{
        propsValue:{
            type:Object,
            value:0,
            min:0,
            max:100,
        },
        styles: {
            type: Object,
            default: () => {return {};}
        },
        position: {
            type: Object,
            default: () => {
                return {
                left: '',
                right: '',
                top: '',
                bottom: ''
                };
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
}
</script>
