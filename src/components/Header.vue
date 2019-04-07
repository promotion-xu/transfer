<template>
  <div class="header">
    <div class="user fl">个人主页</div>
    <div class="theme fr">
      <el-select @change="changeTheme" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.value"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapMutations, mapState } from 'vuex';
@Component({
  methods: {
    ...mapMutations(['SAVE_THEME'])
  },
})
export default class Header extends Vue {
  options: any = [
    {
      id: 1,
      value: 'halloween'
    },
    {
      id: 2,
      value: 'purple-passion'
    },
  ];
  value: any = 'halloween';
  changeTheme(e: any) {
    this.$store.commit('SAVE_THEME', e);
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
.header {
  font-size: 20px;
}
</style>
