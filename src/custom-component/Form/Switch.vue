<template>
    <div>
        <el-switch
            v-model="propsValue.value"
            @change="events.change"
            :active-color="propsValue.activeColor"
            :inactive-color="propsValue.inactiveColor"
            :active-text="propsValue.activeText"
            :inactive-text="propsValue.inactiveText"
            :disabled="propsValue.disabled"
            :width="propsValue.width"
            :active-value="propsValue.activeValue"
            :inactive-value="propsValue.inactiveValue"
            >
        </el-switch>
    </div>
</template>
<script>
export default {
    name: "Switches",
    props:{
        propsValue:{
            type:Object,
            default:{
                value:true,
                activeColor:"#13ce66",
                inactiveColor:"#ff4949",
                activeText:'右',
                inactiveText:'左',
                activeValue:"100",
                inactiveValue:"0",
                disabled:false,
                width:40,
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
