import Vue from 'vue';

const Table = [
    'Table',
];
const Form = [
    'Radio',
    'Checkbox',
    'InputNumber',
    'Select',
    'Cascader',
    'Switches',
    'TimeSelect',
    'TimePicker',
    'DatePicker',
    'DateTimePicker',
    'Button',
    'Form',
    'Upload'
];
const Origin = [
    'Picture',
    'VText',
    'VButton',
    'Group',
    'RectShape',
    'EButton',
];
Form.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/Form/${key}`));
});
Table.forEach(key => {
    Vue.component(key, () => import(`@/custom-component/Table/${key}`));
});
