<template>
    <div>
        <el-switch
            v-model="propsValue.value"
            @change="events.change"
            :active-color="propsValue['active-color']"
            :inactive-color="propsValue['inactive-color']"
            :active-text="propsValue['active-text']"
            :inactive-text="propsValue['inactive-text']"
            :disabled="propsValue.disabled"
            :width="propsValue.width"
            :active-value="propsValue['active-value']"
            :inactive-value="propsValue['inactive-value']"
            >
        </el-switch>
    </div>
</template>
<script>
export default {
    name: "Switchs",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:true,
                'active-color':"#13ce66",
                'inactive-color':"#ff4949",
                'active-text':'右',
                'inactive-text':'左',
                'active-value':"100",
                'inactive-value':"0",
                disabled:false,
                width:40,
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
                    
                };
            }
        }
    }
}
</script>