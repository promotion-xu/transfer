<template>
  <div ref="chart" style="width:100%;height:100%"></div>
</template>


<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex';
const echarts = require('echarts');
require('./purple-passion.js');
require('./halloween.js');
@Component({
  computed: {
    ...mapState({
      chartsTheme: state => state.Echarts.chartsTheme,
    }),
  },
})
export default class Linechart extends Vue {
  @Prop()
  kindData!: any;

  @Prop()
  seriesData!: any;

  @Prop()
  xData!: any;

  @Watch('seriesData', { deep: true })
  handleDataChange(val: string) {
    this.$nextTick(() => {
      this.options.series = this.seriesData;
      this.options.legend.data = this.kindData;
      this.options.xAxis.data = this.xData;
      this.chart = echarts.init(this.$refs.chart as any, this.chartsTheme);
      this.chart.setOption(this.options);
    });
  }

  @Watch('chartsTheme')
  handleChangeTheme(val: string) {
    this.chartsTheme = val;
    this.$nextTick(() => {
      this.chart.clear();
      this.chart.dispose();
      this.chart = echarts.init(this.$refs.chart as any, this.chartsTheme);
      this.chart.setOption(this.options);
    });
  }

  options: any = {
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
  };
  chartsTheme: string;
  chart: any = null;

  mounted() {
    this.$nextTick(() => {
      this.chart = echarts.init(this.$refs.chart as any, this.chartsTheme);
      this.chart.setOption(this.options);
    });
  }

  beforeDestroy() {
    this.chart.clear();
    this.chart.dispose();
  }
  drawLine() {
    this.chart = echarts.init(this.$refs.chart as any, this.chartsTheme);
    const options: any = {
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
    };
    this.chart.setOption(options);
  }
}
</script>
