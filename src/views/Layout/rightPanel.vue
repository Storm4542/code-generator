<template>
    <div>

        <element-tree v-show="treeVisible" style="position: absolute;z-index: 99999;left: -200px"></element-tree>
        <el-button type="text" @click="treeVisible = !treeVisible"
                   :icon="treeVisible?'el-icon-arrow-right':'el-icon-arrow-left'">图层
        </el-button>

        <el-tabs v-model="activeName">
            <el-tab-pane label="属性" name="attr">
                <el-scrollbar style="height:calc(100vh - 130px);">
                    <div>
                        <AttrList v-if="curComponent && activeName === 'attr'"/>
                        <p v-else class="placeholder">请选择组件</p>
                    </div>

                </el-scrollbar>
            </el-tab-pane>
            <!--                    <el-tab-pane label="动画" name="animation">-->
            <!--                        <AnimationList v-if="curComponent"/>-->
            <!--                        <p v-else class="placeholder">请选择组件</p>-->
            <!--                    </el-tab-pane>-->
            <el-tab-pane label="事件" name="events">
                <el-scrollbar style="height:calc(100vh - 130px);">
                    <EventList v-if="curComponent && activeName === 'events'"/>
                    <p v-else class="placeholder">请选择组件</p>
                </el-scrollbar>
            </el-tab-pane>
            <el-tab-pane label="数据" name="data">
                <el-scrollbar style="height:calc(100vh - 130px);">
                    <DataList v-if="curComponent && activeName === 'data'"/>
                    <p v-else class="placeholder">请选择组件</p>
                </el-scrollbar>
            </el-tab-pane>
             <el-tab-pane label="数据模型" name="data">
                <el-scrollbar style="height:calc(100vh - 130px);">
                    <DataList v-if="curComponent && activeName === 'data'"/>
                    <p v-else class="placeholder">请选择组件</p>
                </el-scrollbar>
            </el-tab-pane>
        </el-tabs>


    </div>
</template>

<script>
    import ElementTree from '@/components/ElementTree'
    import AttrList from '@/components/AttrList' // 右侧属性列表
    import AnimationList from '@/components/AnimationList' // 右侧动画列表
    import EventList from '@/components/EventList' // 右侧事件列表
    import DataList from '@/components/DataList'
    import { mapState } from 'vuex' // 右侧数据列表
    export default {
        name: 'rightPanel',
        components: {
            ElementTree,
            AttrList,
            AnimationList,
            EventList,
            DataList,
        },
        computed: mapState([
            'componentData',
            'curComponent',
            'isClickComponent',
            'canvasStyleData',
            'editor',
        ]),
        data() {
            return {
                activeName: 'attr',
                treeVisible: false,
            }
        },
    }
</script>

<style scoped>
    .content {
        height: 90vh;
    }
</style>
