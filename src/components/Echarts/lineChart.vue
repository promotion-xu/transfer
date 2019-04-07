<template>
  <div ref="chart" style="width:100%;height:100%"></div>
</template>


<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
const echarts = require('echarts');
// import purplePassion from 'purple-passion.js';
require('./purple-passion.js');
require('./halloween.js');
@Component({
  computed: {
    ...mapState({
      chartsTheme: state => state.Echarts.chartsTheme
    })
  }
})
export default class Linechart extends Vue {
  chartsTheme: string;
  @Prop()
  kindData!: any;
  
  @Prop()
  seriesData!: any;

  @Prop()
  xData!: any;

  @Watch('seriesData', { deep: true })
  handleDataChange(val: string) {
    this.chartsTheme = val;
    this.$nextTick(() => {
      this.drawLine();
    });
    this.$forceUpdate();
  }

  @Watch('chartsTheme')
  handleChangeTheme() {
    console.log('changeTheme', this.chartsTheme);
    this.$nextTick(() => {
      this.drawLine();
    });
  }

  mounted() {
    this.$nextTick(() => {
      this.drawLine();
    })
  }
  drawLine() {
    console.log('drawLine', this.chartsTheme);
    const chartLine = echarts.init(this.$refs.chart as any, this.chartsTheme);
    chartLine.setOption({
      title: {
        // text: '折线图堆叠',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        type: 'scroll',
        data: this.kindData,
      },
      grid: {
        left: '8%',
        right: '8%',
        bottom: '7%',
      },
      xAxis: {
        type: 'category',
        data: this.xData,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: 12,
          formatter(value: any, index: any) {
            if (value >= 100000000) {
              return `${value / 1000000000}gb`;
            } else if (value < 100000000 && value >= 10000) {
              return `${value / 10000}万`;
            } else {
              return value;
            }
          },
        },
      },
      series: this.seriesData,
    });

  }
}
</script>
