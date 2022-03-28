<template>
    <div :id="propsValue.elementId">

    </div>
</template>

<script>
/**
 * @Description: 折线图
 * @author Storm
 * @date 2021/12/31
 */
export default {
    name: "category",
    props: {
        propsValue: {
            type: Object,
            default: {
                elementId: `category${new Date().getTime()}`,
                option: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: 'line'
                        }
                    ]
                }
            }
        }
    },
    mounted() {
        const chartDom = document.getElementById(this.propsValue.elementId);
        const myChart = this.$echarts.init(chartDom);
        myChart.setOption(this.propsValue.option);
    }
};
</script>

<style scoped>

</style>
