<template>
    <el-button 
    :type="propsValue.type"
    :size="propsValue.size"
    :plain="propsValue.plain"
    :round="propsValue.round"
    :circle="propsValue.circle"
    :loading="propsValue.loading"
    :disabled="propsValue.disabled"
    :icon="propsValue.icon"
    :autofocus="propsValue.autofocus"
    :nativeType="propsValue.nativeType"
    @click="events.click"
    >
    {{ propsValue.value }}
    </el-button>
</template>

<script>
export default {
    name: "EButton",
    props: {
        propsValue: {
            type: String,
            default:{
                type:"primary ",
                value:"",
                size:"",
                plain:false,
                round:false,
                circle:false,
                loading:false,
                disabled:false,
                icon:"",
                autofocus:false,
                nativeType:"button"
            }
        },
        events:{
            type:Object,
            default: () => {
                return {
                    click: () => {console.log('默认click');},
                };
            }
        }
    }
};
</script>

<style scoped>

</style>
