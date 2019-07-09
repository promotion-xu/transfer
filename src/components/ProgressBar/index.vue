<template>
    <div class="app-progress" v-if="show" :style="{width: width + '%'}"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

// 模拟进度最多只能走到 90%
const MAX_WIDTH = 90;

@Component
export default class AppProgress extends Vue {
    width: number = 0;
    show: boolean = false;
    handler: any = null;

    get progressStatus(): string {
        return this.$store.getters.progressStatus;
    }

    @Watch('progressStatus')
    onProgressStatusChange(val: 'start' | 'finish') {
        if (val === 'start') {
            this.handleStart();
        } else {
            this.handleFinish();
        }
    }

    // 进度条开始
    handleStart() {
        this.show = true;
        this.width += 1;
        if (this.width <= MAX_WIDTH) {
            this.handler = window.requestAnimationFrame(this.handleStart);
        }
    }

    // 进度条结束
    handleFinish() {
        this.width = 100;
        setTimeout(() => {
            this.show = false;
            this.width = 0;
            cancelAnimationFrame(this.handler);
            this.handler = null;
        }, 200);
    }
}
</script>

<style lang="scss" scoped>
.app-progress {
    z-index: 1999;
    position: fixed;
    top: 0;
    width: 100%;
    height: 3px;
    background-color: #0096ff;
    transition: all 0.2s;
}
</style>
