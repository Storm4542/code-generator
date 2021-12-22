<template>
    <div>
        <el-input v-model="propsValue.value"
            :placeholder="propsValue.placeholder"
            :disabled="propsValue.disabled"
            :resize="propsValue.resize"
            :label="propsValue.label"
            :type="propsValue.type"
            :style="{...styles,...position}"
            style="position: absolute"
            :clearable="propsValue.clearable"
            :size="propsValue.size"
            :show-word-limit="propsValue['show-word-limit']"
            @change="events.change"
            @input="events.input"
        ></el-input>
    </div>
  
</template>

<script>
export default {
  name: "Input",
  props: {
    propsValue: {
      type: Object,
      default: {
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
        'show-word-limit': false

      }
    },
    style: {
      type: Object,
      default: () => {
          return {
              left: '',
              right: '',
              top: '',
              bottom: '',
              width:'',
              height:'',
          };
      }
    },
    events: {
      type: Object,
      default: () => {
        return {
          change: () => {console.log('默认change');},
          input: () => {console.log('默认input');},
        };
      }
    }
  },
  mounted() {
    console.log(JSON.stringify(this.events));
  }
};
</script>

<style scoped>

</style>
