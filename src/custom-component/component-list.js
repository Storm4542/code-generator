// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
};

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
};

// 编辑器左侧组件列表
const list = [
    {
        name: 'Input',
        id: '1',
        propsValue: {
            value: '文本框',
            placeholder: '占位符',
            //禁用
            disabled: false,
            //控制缩放
            resize: 'none',
            // 输入框关联的文字
            label: '名称',
            // 类型
            type: 'text',
            //是否可清空
            clearable: true,
            //输入框尺寸
            size: 'medium',
            //输入字数统计
            showWordLimit: false
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '140',
            height: '40',
        },
        events: {
            change: () => {console.log('默认change');},
            input: () => {console.log('默认input');},
        }
    },
    {
        name: 'Table',
        id: '2',
        propsValue: {
            data: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            columnData: [
                {
                    prop: 'date',
                    label: '日期',
                    width: 180
                },
                {
                    prop: 'name',
                    label: '姓名',
                    width: 180
                },
                {
                    prop: 'address',
                    label: '地址',
                }
            ],
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '500',
            height: '400',
        },

    },
    {
        name: 'Radio',
        id: '3',
        propsValue: {
            value: '1',
            radioElements: [
                {
                    label: '1',
                    disabled: true,
                    border: true,
                    size: 'mini',
                },
                {
                    label: '2',
                    disabled: false,
                    border: true,
                    size: 'small',
                },
                {
                    label: '3',
                    disabled: false,
                    border: true,
                    size: 'medium'
                }
            ],
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '300',
            height: '40',
        },
        events: {
            change: () => {console.log('默认change');},
        }
    },
    {
        name: 'Checkbox',
        id: '4',
        propsValue: {
            value: [],
            checkElements: [
                {
                    label: '1',
                    disabled: true,
                    border: true,
                    size: 'mini',
                },
                {
                    label: '2',
                    disabled: false,
                    border: true,
                    size: 'small',
                },
                {
                    label: '3',
                    disabled: false,
                    border: true,
                    size: 'medium'
                }
            ],
            min: 0,
            max: 2
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '300',
            height: '40',
        },
        events: {
            change: (value) => {console.log(`change:正在输入${value}`);},
        }
    },
    {
        name: 'InputNumber',
        id: '5',
        propsValue: {
            value: 0,
            min: 0,
            max: 10,
            step: 1,
            stepStrictly: false,
            size: 'large',
            disabled: false,
            controls: false,
            controlsPosition: 'right',
            label: '描述'
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '180',
            height: '40',
        },
        events: {
            change: (value) => {console.log(`change:正在输入${value}`);},
        }
    },
    {
        name: 'Select',
        id: '6',
        propsValue: {
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
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '200',
            height: '30',
        },
        events: {
            change: (value) => {console.log(`change:正在选中${value}`);},
            remove: (value) => {console.log(`remove:正在移除${value}`);},
            clear: (value) => {console.log(`clear:正在清除${value}`);},
            blur: (value) => {console.log(`blur:正在失去焦点${value}`);},
            focus: (value) => {console.log(`focus:正在获取焦点${value}`);},
        }
    },
    {
        name: 'Cascader',
        id: '7',
        propsValue: {
            value: [],
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                    }, {
                        value: 'fankui',
                        label: '反馈'
                    }, {
                        value: 'xiaolv',
                        label: '效率'
                    }, {
                        value: 'kekong',
                        label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }]
                }]
            }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                    }, {
                        value: 'color',
                        label: 'Color 色彩'
                    }, {
                        value: 'typography',
                        label: 'Typography 字体'
                    }, {
                        value: 'icon',
                        label: 'Icon 图标'
                    }, {
                        value: 'button',
                        label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                    }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    }, {
                        value: 'input',
                        label: 'Input 输入框'
                    }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    }, {
                        value: 'select',
                        label: 'Select 选择器'
                    }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    }, {
                        value: 'switch',
                        label: 'Switch 开关'
                    }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                    }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    }, {
                        value: 'upload',
                        label: 'Upload 上传'
                    }, {
                        value: 'rate',
                        label: 'Rate 评分'
                    }, {
                        value: 'form',
                        label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                        value: 'table',
                        label: 'Table 表格'
                    }, {
                        value: 'tag',
                        label: 'Tag 标签'
                    }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                    }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    }, {
                        value: 'badge',
                        label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                    }, {
                        value: 'loading',
                        label: 'Loading 加载'
                    }, {
                        value: 'message',
                        label: 'Message 消息提示'
                    }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    }, {
                        value: 'notification',
                        label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    }, {
                        value: 'card',
                        label: 'Card 卡片'
                    }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }]
                }]
            }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],
            disabled: false,
            clearable: true,
            size: 'small',
            showAllLevels: true,
            collapseTags: false,
            separator: '/',
            placeholder: '请选择',
            filterable: false,
            filterMethod: function (params, keyword) {
                console.log(params, keyword);
            },
            beforeFilter: function (params) {
                console.log(params);
            },
            debounce: 0,
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '200',
            height: '30',
        },
        events: {
            change: (value) => {console.log(`change:正在选中${value}`);},
            remove: (value) => {console.log(`remove:正在移除${value}`);},
            expand: (value) => {console.log(`expand:展开${value}`);},
            blur: (value) => {console.log(`blur:正在失去焦点${value}`);},
            focus: (value) => {console.log(`focus:正在获取焦点${value}`);},
        }
    },
    {
        name: 'Switches',
        id: '8',
        propsValue: {
            value: true,
            activeColor: "#13ce66",
            inactiveColor: "#ff4949",
            activeText: '右',
            inactiveText: '左',
            activeValue: "100",
            inactiveValue: "0",
            disabled: false,
            width: 40,
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '140',
            height: '40',
        },
        events: {
            change: (value) => {console.log(`change:正在选中${value}`);},
        }
    },
    {
        name: 'Slider',
        id: '9',
        propsValue: {
            value: 0,
            min: 0,
            max: 100,
            disabled: false,
            step: 1,
            showInput: false,
            showInputControls: true,
            inputSize: 'small',
            showStops: false,
            showTooltip: true,
            formatTooltip: function (params) {
                console.log(params);
            },
            range: false,
            vertical: false,
            height: '',
            label: '',
            debounce: 300,
            tooltipClass: ''
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '200',
            height: '40',
        },
        events: {
            change: (value) => {console.log(`change:正在选中${value}`);},
        }
    },
    {
        name: 'TimeSelect',
        id: '10',
        propsValue: {
            value: '',
            pickerOptions: {
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: '',
            },
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            size: 'small',
            placeholder: '请选择',
            align: "center",
            popperClass: '',
            rangeSeparator: '-',
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '300',
            height: '38',
        },
        events: {
            change: () => {console.log('默认change');},
            blur: () => {console.log('blur');},
            focus: () => {console.log('focus');},
        }
    },
    {
        name: 'TimePicker',
        id: '11',
        propsValue: {
            value: '',
            pickerOptions: {
                selectableRange: '00:00:00 - 23:59:59'
            },
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            size: 'small',
            placeholder: '请选择',
            align: "center",
            popperClass: '',
            rangeSeparator: '-',
            startPlaceholder: "开始时间",
            endPlaceholder: "结束时间",
            isRange: false,
            arrowControl: false,
            valueFormat: 'HH:mm:ss',
            defaultValue: new Date().getTime(),
            format: 'HH:mm:ss',
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '300',
            height: '38',
        },
        events: {
            change: () => {console.log('默认change');},
            blur: () => {console.log('blur');},
            focus: () => {console.log('focus');},
        }
    },
    {
        name: 'DatePicker',
        id: '12',
        propsValue: {
            value: new Date().getTime(),
            type: 'date',
            placeholder: '选择日期',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            size: "",
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            format: 'yyyy-MM-dd',
            align: "left",
            popperClass: '',
            pickerOptions: {},
            rangeSeparator: '-',
            defaultValue: new Date().getTime(),
            name: "",
            unlinkPanels: false,
            validateEvent: true
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '300',
            height: '38',
        },
        events: {
            change: () => {console.log('默认change');},
            blur: () => {console.log('blur');},
            focus: () => {console.log('focus');},
        }
    },
    {
        name: 'DateTimePicker',
        id: '13',
        propsValue: {
            value:new Date().getTime(),
            type:'datetime',
            placeholder:'选择日期时间',
            readonly:false,
            disabled:false,
            editable:true,
            clearable:true,
            size:'small',
            startPlaceholder:'开始时间',
            endPlaceholder:'结束时间',
            timeArrowControl:false,
            format:'yyyy-MM-dd HH:mm:ss',
            align:'left',
            popperClass:'',
            rangeSeparator:"-",
            defaultValue:new Date().getTime(),
            unlinkPanels:false,
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '300',
            height: '38',
        },
        events: {
            change: () => {console.log('默认change');},
            blur: () => {console.log('blur');},
            focus: () => {console.log('focus');},
        }
    },
    {
        name: 'Button',
        id: '14',
        propsValue: {
            value:"按钮",
            type:'primary',
            size:'medium',
            plain:false,
            round:false,
            circle:false,
            loading:false,
            disabled:false,
            icon:'',
            autofocus:false,
            nativeType:'button',
        },
        style: {
            left: '',
            right: '',
            top: '',
            bottom: '',
            width: '200',
            height: '40',
        },
        events: {
            change: () => {console.log('默认change');},
            blur: () => {console.log('blur');},
            focus: () => {console.log('focus');},
        }
    },
    {
        component: 'v-text',
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'wenben',
        style: {
            width: 200,
            height: 22,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },
    {
        component: 'v-button',
        label: '按钮',
        propValue: '按钮',
        icon: 'button',
        style: {
            width: 100,
            height: 34,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
    },
    {
        name: 'EButton',
        component: 'e-button',
        label: 'E按钮',
        propsValue: {
            type: "primary ",
            value: "按钮",
            size: "",
            plain: false,
            round: false,
            circle: false,
            loading: false,
            disabled: false,
            icon: "",
            autofocus: false,
            nativeType: "button"
        },
        // propValue: 'E按钮',
        icon: 'button',
        style: {
            width: 100,
            height: 34,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
        events: {
            click: () => {console.log('默认click');},
        }
    },
    {
        component: 'Picture',
        label: '图片',
        icon: 'tupian',
        propValue: require('@/assets/title.jpg'),
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },
    {
        component: 'rect-shape',
        label: '矩形',
        propValue: '&nbsp;',
        icon: 'juxing',
        style: {
            width: 200,
            height: 200,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '',
            borderStyle: 'solid',
            verticalAlign: 'middle',
        },
    },
];

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i];
    item.style = {...commonStyle, ...item.style};
    list[i] = {...commonAttr, ...item};
}

export default list;
