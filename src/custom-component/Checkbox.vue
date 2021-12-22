<template>
    <div>
        <el-checkbox-group v-model="propsValue.value" :min="propsValue.min" :max="propsValue.max">
            <el-checkbox 
            @change="events.change" 
            v-for="(item,index) in propsValue.checkElements" 
            :key="index"
            :disabled="item.disabled"
            :border="item.border"
            :size="item.size"
            :label="item.label"></el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
export default {
    name:'Checkbox',
    props:{
        propsValue:{
            type:Object,
            default:{
                value:[],
                checkElements:[],
                min:1,
                max:1,
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