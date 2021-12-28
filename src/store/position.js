// 位置
export default {
    mutations: {
        horizontalCenter({curComponent, canvasStyleData, element}) {
            // 将该组件水平局中
            if (curComponent.isLock) return;
            let {width} = canvasStyleData;
            // console.log(`当前target:${element}`);
            // console.log('element', element);
            //获取shape包裹层的宽度
            const elementWidth = element.path.find(dom => dom.className.includes('shape')).getBoundingClientRect().width;
            console.log(`${curComponent.name}的width是${elementWidth}`);
            curComponent.style.left = `${width / 2 - elementWidth / 2}`;
        },
        verticalCenter({curComponent, canvasStyleData, element}) {
            if (curComponent.isLock) return;
            let {height} = canvasStyleData;
            // console.log(`当前target:${element}`);
            // console.log('element', element);
            //获取shape包裹层的宽度
            const elementHeight = element.path.find(dom => dom.className.includes('shape')).getBoundingClientRect().height;
            console.log(`${curComponent.name}的height是${elementHeight}`);
            curComponent.style.top = `${height / 2 - elementHeight / 2}`;
        },
        leftTop({curComponent, canvasStyleData, element}) {
            if (curComponent.isLock) return;
            curComponent.style.top = 0;
            curComponent.style.left = 0;
        },
        rightTop({curComponent, canvasStyleData, element}) {
            if (curComponent.isLock) return;
            let {width} = canvasStyleData;
            const elementWidth = element.path.find(dom => dom.className.includes('shape')).getBoundingClientRect().width;
            curComponent.style.top = 0;
            curComponent.style.left = width - elementWidth;
        },
        rightBottom({curComponent, canvasStyleData, element}) {
            if (curComponent.isLock) return;
            let {height, width} = canvasStyleData;
            const elementWidth = element.path.find(dom => dom.className.includes('shape')).getBoundingClientRect().width;
            const elementHeight = element.path.find(dom => dom.className.includes('shape')).getBoundingClientRect().height;
            curComponent.style.top = height - elementHeight;
            curComponent.style.left = width - elementWidth;
        },
        leftBottom({curComponent, canvasStyleData, element}) {
            if (curComponent.isLock) return;
            let {height, width} = canvasStyleData;
            const elementHeight = element.path.find(dom => dom.className.includes('shape')).getBoundingClientRect().height;
            curComponent.style.top = height - elementHeight;
            curComponent.style.left = 0;
        }
    },
};
