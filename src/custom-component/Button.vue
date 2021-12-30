<template>
    <div>
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
        :native-type="propsValue.nativeType"
        >
        {{propsValue.value}}
        </el-button>
    </div>
</template>
<script>
export default {
    name:'Button',
    props:{
        propsValue:{
            type:Object,
            default:{
                value:"",
                type:'',
                size:'',
                plain:false,
                round:false,
                circle:false,
                loading:false,
                disabled:false,
                icon:'',
                autofocus:false,
                nativeType:'button',
            }
        },
        events: {
            type: Object,
            default: () => {
                return {
                    click: () => {console.log('默认click');},
                };
            }
        }
    }
}
</script>