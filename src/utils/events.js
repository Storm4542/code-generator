// 编辑器自定义事件
import {Message} from 'element-ui';

const events = {
    redirect(url) {
        if (url) {
            window.location.href = url;
        }
    },

    alert(msg) {
        if (msg) {
            Message.info(msg);
        }
    },
    click(value) {

    },
    change(value) {

    }
};

const mixins = {
    methods: events,
};

const eventList = [
    {
        key: 'redirect',
        label: '跳转事件',
        event: events.redirect,
        param: '',
    },
    {
        key: 'alert',
        label: 'alert 事件',
        event: events.alert,
        param: '',
    }, {
        key: '点击',
        label: '点击 事件',
        event: events.click,
        param: '',
    }, {
        key: 'change',
        label: 'change 事件',
        event: events.change,
        param: '',
    },
];

export {
    mixins,
    events,
    eventList,
};
