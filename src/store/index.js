import Vue from 'vue';
import Vuex from 'vuex';
import animation from './animation';
import compose from './compose';
import contextmenu from './contextmenu';
import copy from './copy';
import event from './event';
import layer from './layer';
import snapshot from './snapshot';
import lock from './lock';
import position from './position';

Vue.use(Vuex);

const data = {
    state: {
        ...animation.state,
        ...compose.state,
        ...contextmenu.state,
        ...copy.state,
        ...event.state,
        ...layer.state,
        ...snapshot.state,
        ...lock.state,

        editMode: 'edit', // 编辑器模式 edit preview
        canvasStyleData: { // 页面全局数据
            width: 1200,
            height: 740,
            scale: 100,
        },
        componentData: [], // 画布组件数据
        curComponent: null,
        curComponentIndex: null,
        // 点击画布时是否点中组件，主要用于取消选中组件用。
        // 如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
        isClickComponent: false,
        element: null,  //当前选中的element
    },
    mutations: {
        ...animation.mutations,
        ...compose.mutations,
        ...contextmenu.mutations,
        ...copy.mutations,
        ...event.mutations,
        ...layer.mutations,
        ...snapshot.mutations,
        ...lock.mutations,
        ...position.mutations,

        setClickComponentStatus(state, status) {
            state.isClickComponent = status;
        },

        setEditMode(state, mode) {
            state.editMode = mode;
        },

        setCanvasStyle(state, style) {
            state.canvasStyleData = style;
        },

        setCurComponent(state, {component, index, element}) {
            state.curComponent = component;
            state.curComponentIndex = index;
            state.element = element;
        },

        setShapeStyle({curComponent}, {top, left, width, height, rotate}) {
            if (top) curComponent.style.top = top;
            if (left) curComponent.style.left = left;
            if (width) curComponent.style.width = width;
            if (height) curComponent.style.height = height;
            if (rotate) curComponent.style.rotate = rotate;
            console.log('setShapeStyle', curComponent);
        },

        setShapeSingleStyle({curComponent}, {key, value}) {
            curComponent.style[key] = value;
        },

        setComponentData(state, componentData = []) {
            Vue.set(state, 'componentData', componentData);
        },

        addComponent(state, {component, index}) {
            console.log('addComponent');
            if (index !== undefined) {
                console.log('1');
                state.componentData.splice(index, 0, component);
            } else {
                console.log(2);
                state.componentData.push(component);
                console.log(state.componentData);
            }
        },

        deleteComponent(state, index) {
            if (index === undefined) {
                index = state.curComponentIndex;
            }

            if (index == state.curComponentIndex) {
                state.curComponentIndex = null;
                state.curComponent = null;
            }

            state.componentData.splice(index, 1);
        },
    },
};

export default new Vuex.Store(data);
