<template>
    <div style="background-color: #FFF">
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
            default: () => {
                return {
                    width: '200px',
                    height: '100px',
                };
            }
        }
    }
}
;
</script>

<style scoped>

</style>
