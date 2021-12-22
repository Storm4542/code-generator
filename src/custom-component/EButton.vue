<template>
    <el-button type="primary">{{ propValue }}</el-button>
</template>

<script>
export default {
    name: "EButton",
    props: {
        propValue: {
            type: String,
            default: '按钮'
        }
    }
};
</script>

<style scoped>

</style>
