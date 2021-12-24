// 位置

export default {
    mutations: {
        horizontalCenter({curComponent, canvasStyleData}) {
            // 将该组件水平局中
            if (curComponent.isLock) return;
            let {width} = canvasStyleData;
            const elementWidth = curComponent.element.target.getBoundingClientRect().width;
            console.log(`${curComponent.name}的width是${elementWidth}`);
            curComponent.style.left = `${width / 2 - elementWidth / 2}`;
            console.log(curComponent);
        }
    },
};
