import Vue from 'vue'

const components = [
    'Picture',
    'VText',
    'VButton',
    'Group',
    'RectShape',
    'EButton',
    'Table',
    'Radio',
    'Checkbox',
    'InputNumber',
    'Select',
    'Cascader',
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}`))
})
