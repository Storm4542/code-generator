// 位置

export default {
    mutations: {
        horizontalCenter({curComponent, canvasStyleData, element}) {
            // 将该组件水平局中
            if (curComponent.isLock) return;
            let {width} = canvasStyleData;
            console.log(`当前target:${element}`);
            console.log('element', element);
            //获取shape包裹层的宽度
            const elementWidth = element.path.find(dom => dom.className.includes('shape')).getBoundingClientRect().width;
            console.log(`${curComponent.name}的width是${elementWidth}`);
            curComponent.style.left = `${width / 2 - elementWidth / 2}`;
            console.log(curComponent);
        }
    },
};
