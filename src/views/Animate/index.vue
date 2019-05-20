<template>
  <div>
    <button @click.stop.prevent="handleAnimate">聚合</button>
    <ul class="clearFloat" :style="{width:ulW+'px',height:ulH+'px'}" ref="ulEle">
      <li
        v-for="(item,i) in lists"
        :key="i"
        :style="{width:liW+'px',height:liH+'px',transform:'translate(0,0)'}"
        ref="liEle"
      ></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [],
      rows: 4,
      columns: 5,
      liW: 100,
      liH: 100,
      ulW: 0,
      ulH: 0,
      centerPointer: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    handleAnimate() {
      // console.log('聚合')
      let ul = this.$refs.ulEle;
      this.lists.forEach((item, i) => {
        let curRow, curColumn, curX, curY;

        curRow = Math.ceil((i + 1) / this.columns);  // 2/5 ---- 1
        curColumn = i % this.columns + 1; // 1 % 5 + 1 = 2

        console.log(curRow, curColumn, '**************')

        curX = (curColumn - 1 / 2) * this.liW;
        curY = (curRow - 1 / 2) * this.liH;
        item.translateX = this.centerPointer.x - curX;
        item.translateY = this.centerPointer.y - curY;
        let liArr = ul.getElementsByTagName('li');
        this.$refs.liEle[i].style.transform = `translate(${item.translateX}px,${item.translateY}px)`;
        this.$refs.liEle[i].style.borderRadius = '50%';
      })
    }
  },
  created() {
    for (var i = 0; i < 20; i++) {
      this.lists.push({ translateX: 0, translateY: 0 })
    }
    this.ulW = this.liW * this.columns;
    this.ulH = this.liH * this.rows;
    this.centerPointer.x = this.ulW / 2;
    this.centerPointer.y = this.ulH / 2;
    console.log('lists', this.lists);
  }
}
</script>

<style lang="less" scoped>
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


