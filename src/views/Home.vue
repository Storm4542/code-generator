<template>
    <div class="home">
        <Toolbar/>

        <main>
            <!-- 左侧组件列表 -->
            <section class="left">
                <ComponentList/>
            </section>
            <!-- 中间画布 -->
            <section class="center">
                <div class="content" @drop="handleDrop" @dragover="handleDragOver"
                     @mousedown="handleMouseDown" @mouseup="deselectCurComponent">
                    <Editor/>
                </div>
            </section>
            <!-- 右侧属性列表 -->
            <section class="right">
                <right-panel></right-panel>
            </section>
        </main>
    </div>
</template>

<script>
import Editor from '@/components/Editor/index'
import ComponentList from '@/components/ComponentList' // 左侧列表组件

import componentList from '@/custom-component/component-list' // 左侧列表数据
import Toolbar from '@/components/Toolbar'
import { deepCopy } from '@/utils/utils'
import { mapState } from 'vuex'
import generateID from '@/utils/generateID'
import { listenGlobalKeyDown } from '@/utils/shortcutKey'
import rightPanel from '@/views/Layout/rightPanel'
import { getMenuMetaById } from '@/api/system/metaData'
import { setItem } from '@/utils/safeSettings/auth'

export default {
    components: {
        rightPanel,
        Editor,
        ComponentList,
        Toolbar,
    },
    data() {
        return {
            componentList,
            activeName: 'attr',
            reSelectAnimateIndex: undefined,
        }
    },
    computed: mapState([
        'componentData',
        'curComponent',
        'isClickComponent',
        'canvasStyleData',
        'editor',
    ]),

    created() {
        this.restore()
        // 全局监听按键事件
        listenGlobalKeyDown()
    },
    methods: {
        restore() {
            // 用保存的数据恢复画布
            const { metaMenuId, projectId } = this.$route.query
            setItem('projectId', projectId)
            setItem('metaMenuId', metaMenuId)
            if (metaMenuId && projectId) {
                getMenuMetaById({
                    id: metaMenuId,
                })
                    .then(r => {
                        this.$store.commit('setComponentData', JSON.parse((r.data.metaData)))
                        this.$store.commit('calculateComponentType')
                    })
            }
            // if (localStorage.getItem('canvasData')) {
            //     this.$store.commit('setComponentData', JSON.parse(localStorage.getItem('canvasData')))
            //     this.$store.commit('calculateComponentType')
            //
            // }

            if (localStorage.getItem('canvasStyle')) {
                this.$store.commit('setCanvasStyle', JSON.parse(localStorage.getItem('canvasStyle')))
            }
        },

        resetID(data) {
            data.forEach(item => {
                item.id = generateID(item.name)
            })

            return data
        },

        handleDrop(e) {
            // console.group('handleDrop:start')
            e.preventDefault()
            e.stopPropagation()
            console.log(e.dataTransfer)
            const index = e.dataTransfer.getData('id')
            const rectInfo = this.editor.getBoundingClientRect()
            // console.log('index:', index)
            // console.log('rectInfo:', rectInfo)
            if (index) {
                //todo 判断是否在某个容器中
                //todo 查找方式不对
                const component = deepCopy(this.componentList.find(item => item.id === index))
                component.style.top = e.clientY - rectInfo.y
                component.style.left = e.clientX - rectInfo.x
                component.id = generateID(component.name)
                this.$store.commit('addComponent', {
                    component,
                })
                this.$store.dispatch('isComponentInContainer', {
                    component,
                    index,
                })
                    .then(r => {
                        console.log(r)
                    })

                this.$store.commit('recordSnapshot')
            }
            console.groupEnd()
        },

        handleDragOver(e) {
            console.group('handleDragOver:start')
            e.preventDefault()
            e.dataTransfer.dropEffect = 'copy'
            this.$store.commit('emptyCurComponent')
            console.groupEnd()
        },

        handleMouseDown() {
            // console.group('handleMouseDown:start')
            this.$store.commit('setClickComponentStatus', false)
            // console.groupEnd()
        },

        deselectCurComponent(e) {
            // console.group('deselectCurComponent:start:点击画布中的组件')

            if (!this.isClickComponent) {
                // console.log('点击空白画布，将当前组件置空')
                this.$store.commit('setCurComponent', {
                    component: null,
                    index: null,
                })
            }

            // 0 左击 1 滚轮 2 右击
            if (e.button != 2) {
                // console.log('滚轮或左键单击组件，隐藏右键菜单')
                this.$store.commit('hideContextMenu')
            }
            console.groupEnd()
            this.$store.dispatch('isComponentInContainer', {
                component: this.curComponent,
            })
                .then(r => {
                    console.log(r)
                })

        },
    },
}
</script>

<style lang="scss">
.home {
    height: 100vh;
    background: #fff;

    main {
        height: calc(100% - 64px);
        position: relative;

        .left {
            position: absolute;
            height: 100%;
            width: 210px;
            left: 0;
            top: 0;
        }

        .right {
            position: absolute;
            height: 100%;
            width: 262px;
            right: 0;
            top: 0;
        }

        .center {
            margin-left: 200px;
            margin-right: 262px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;

            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }

    .placeholder {
        text-align: center;
        color: #333;
    }
}
</style>
