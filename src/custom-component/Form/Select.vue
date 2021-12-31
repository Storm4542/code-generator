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
            :multiple-limit="propsValue.multipleLimit"
            :autocomplete="propsValue.autocomplete"
            :filterable="propsValue.filterable"
            :filter-method="propsValue.filterMethod"
            :allow-create="propsValue.allowCreate"
            :remote-method="propsValue.remoteMethod"
            :remote="propsValue.remote"
            :loading="propsValue.loading"
            :loading-text="propsValue.loadingText"
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
    name: 'Select',
    props: {
        propsValue: {
            type: Object,
            default: {
                value: '',
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
                multiple: false,
                disabled: false,
                clearable: true,
                multipleLimit: 0,
                autocomplete: 'off',
                placeholder: '请选择',
                filterable: false,
                filterMethod: function (params) {
                    console.log(params);
                },
                remote: false,
                remoteMethod: function (params) {
                    console.log(params);
                },
                loading: false,
                loadingText: '加载中',
                size: 'small',
                allowCreate: false,
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
};
</script>
