<template>
    <div>
        <el-radio-group 
        @change="events.change" 
        v-model="propsValue.value">
            <el-radio 
            v-for="(item,index) in propsValue.radioElements" 
            :label="item.label"
            :disabled="item.disabled"
            :border="item.border"
            :size="item.size"
            :key="index"></el-radio>
        </el-radio-group>
    </div>
</template>
<script>
export default {
    name:'Radio',
    props:{
        propsValue:{
            type:Object,
            default:{
                value:'1',
                radioElements:[],
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