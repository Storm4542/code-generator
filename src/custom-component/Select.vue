<template>
    <div>
        <el-select 
            v-model="propsValue.value" 
            :placeholder="propsValue.placeholder"
            @change="events.change"
            @clear="events.clear"
            @blur="events.blur"
            @focus="events.focus"
            @remove-tag="events.remove"
            :multiple="propsValue.multiple"
            :size="propsValue.size"
            :disabled="propsValue.disabled"
            :clearable="propsValue.clearable"
            :multiple-limit="propsValue['multiple-limit']"
            :autocomplete="propsValue.autocomplete"
            :filterable="propsValue.filterable"
            :filter-method="propsValue['filter-method']"
            :allow-create="propsValue['allow-create']"
            :remote-method="propsValue['remote-method']"
            :remote="propsValue.remote"
            :loading="propsValue.loading"
            :loading-text="propsValue['loading-text']"
            >
            <el-option
            v-for="(item,index) in propsValue.options"
            :key="index"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name:'Select',
    props:{
        propsValue:{
            type:Object,
            default:{
                value:'',
                options: [
                    {
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }
                ],
                multiple:false,
                disabled:false,
                clearable:true,
                'multiple-limit':0,
                autocomplete:'off',
                placeholder:'请选择',
                filterable:false,
                'filter-method':function (params) {
                    console.log(params);
                },
                remote:false,
                'remote-method':function (params) {
                    console.log(params);
                },
                loading:false,
                'loading-text':'加载中',
                size:'small',
                'allow-create':false,
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
                    remove: () => {console.log('默认remove');},
                    clear: () => {console.log('clear');},
                    blur: () => {console.log('blur');},
                    focus: () => {console.log('focus');},
                };
            }
        }
    }
}
</script>