<template>
    <div style="background-color: red">
        <el-form :ref="propsValue.ref" :label-width="propsValue.labelWidth" :style="innerStyle">

        </el-form>
    </div>
</template>

<script>
export default {
    name: "Form",
    props: {
        propsValue: {
            type: Object,
            default: {
                ref: 'form',
                labelWidth: '80px'
            }
        },
        innerStyle: {
            type: Object,
            default: {
                width: '200px',
                height: '100px',
                backgroundColor: 'blue'
            }
        }
    }
}
;
</script>

<style scoped>

</style>
