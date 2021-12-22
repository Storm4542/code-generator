<template>
  <div>
    <el-table :data="propsValue.data" style="width: 100%">
      <el-table-column
        v-for="(column, index) in propsValue.columnData"
        :key="index"
        :prop="column.prop"
        :label="column.label"
        :width="column.width ? column.width : 'auto'"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    propsValue: {
      type: Object,
      default: {
        data: [],
        columnData: [],
      },
    },
    style: {
      type: Object,
      default: () => {
        return {
          left: "",
          right: "",
          top: "",
          bottom: "",
          width: "",
          height: "",
        };
      },
    },
  },
};
</script>

<style scoped></style>
