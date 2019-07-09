<template>
  <div>
    <button @click.stop.prevent="handleAnimate">聚合</button>
    <ul class="clearFloat" :style="{width:ulW+'px',height:ulH+'px'}" ref="ulEle">
      <li
        v-for="(item, index) in lists"
        :key="index"
        :style="{width: liW+'px',height: liH+'px',transform:'translate(0,0)'}"
        ref="liEle"
      ></li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Animate extends Vue {
  private lists: any[] = [];
  private rows: number = 4;
  private columns: number = 5;
  private liW: number = 100;
  private liH: number = 100;
  private ulW: number = 0;
  private ulH: number = 0;
  private centerPointer: any = {
    x: 0,
    y: 0,
  };
  private $refs: any;

  created() {
    for (var i = 0; i < 20; i++) {
      this.lists.push({ translateX: 0, translateY: 0 });
    }
    this.ulW = this.liW * this.columns;
    this.ulH = this.liH * this.rows;
    this.centerPointer.x = this.ulW / 2;
    this.centerPointer.y = this.ulH / 2;
  }

  handleAnimate() {
    let ul = this.$refs.ulEle;
    this.lists.forEach((item, i) => {
      let curRow, curColumn, curX, curY;

      curRow = Math.ceil((i + 1) / this.columns); // 2/5 ---- 1
      curColumn = (i % this.columns) + 1; // 1 % 5 + 1 = 2

      curX = (curColumn - 1 / 2) * this.liW;
      curY = (curRow - 1 / 2) * this.liH;
      item.translateX = this.centerPointer.x - curX;
      item.translateY = this.centerPointer.y - curY;
      let liArr = ul.getElementsByTagName('li');
      this.$refs.liEle[i].style.transform = `translate(${item.translateX}px,${
        item.translateY
      }px)`;
      this.$refs.liEle[i].style.transition = `all .5s linear`;
      this.$refs.liEle[i].style.borderRadius = '50%';
    });
  }
}
</script>

<style lang="scss" scoped>
button {
  background-color: pink;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
}
ul {
  &.clearFloat {
    zoom: 1;
  }
  &.clearFloat:after {
    display: block;
    clear: both;
    content: '';
    visibility: hidden;
    height: 0;
  }
  li {
    background-color: yellowgreen;
    float: left;
    border: solid 1px #fff;
    transition: all 3s;
    // transform:translate(0,0);
  }
}
</style>


