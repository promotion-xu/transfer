<template>
  <div>
    <div class="charts">
      <line-chart
        :kindData="this.systemKindData"
        :seriesData="this.systemSeriesData"
        :xData="this.systemXData"
      />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Linechart from '@/components/Echarts/lineChart.vue';
@Component({
  components: {
    'line-chart': Linechart,
  },
})
export default class Charts extends Vue {
  private systemKindData: any = ['邮件营销', '联盟广告'];
  private systemSeriesData: any = [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134],
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234],
    },
  ];
  private systemXData: any = ['周一', '周二', '周三', '周四'];
}
</script>

<style lang="scss" scoped>
.charts {
  width: 8rem;
  height: 5rem;
}
</style>
