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
    'Switches',
    'TimeSelect',
    'TimePicker',
    'DatePicker',
    'DateTimePicker'
]

components.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/${key}`))
})
