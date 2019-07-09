<template>
    <canvas class="waves" ref="canvas"></canvas>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { debounce } from 'lodash';

const unit = 100;

@Component
export default class Waves extends Vue {
    waves: string[] = [
        'rgba(89, 183, 255, 0.08)',
        'rgba(0, 237, 252, 0.08)',
    ];
    i: number = 0;
    handler: any = null;

    draw(canvas: any, ctx: any) {
        canvas.width = canvas.width;

        for (let j = this.waves.length - 1; j >= 0; j--) {
            const offset = this.i + (j + 3) * Math.PI * 12;
            const gcd = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gcd.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
            gcd.addColorStop(0, this.waves[j]);
            ctx.fillStyle = gcd;

            const method = j % 2 === 0 ? Math.sin : Math.cos;

            const randomLeft = ((method(offset / 200) + 1) / 2) * 200;
            const randomRight = ((method(offset / 200 + 10) + 1) / 2) * 200;
            const randomLeftConstraint =
                ((method(offset / 100 + 2) + 1) / 2) * 200;
            const randomRightConstraint =
                ((method(offset / 100 + 1) + 1) / 2) * 200;

            ctx.beginPath();
            ctx.moveTo(0, randomLeft + 100);

            ctx.bezierCurveTo(
                canvas.width / 3,
                randomLeftConstraint,
                (canvas.width / 3) * 2,
                randomRightConstraint,
                canvas.width,
                randomRight + 100
            );
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.lineTo(0, randomLeft + 100);

            ctx.closePath();
            ctx.fill();
        }

        this.i += 3;
    }

    mounted() {
        const canvas = this.$refs.canvas as any;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth; // 波浪宽度
        canvas.height = window.innerHeight / 2.2; // 波浪的高度

        // 波浪动画
        this.handler = setInterval(() => {
            this.draw(canvas, ctx);
        }, 20);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 2.2;
            clearInterval(this.handler);
            this.handler = setInterval(() => {
                this.draw(canvas, ctx);
            }, 20);
        });
    }

    destroyed() {
        clearInterval(this.handler);
    }
}
</script>

<style lang="scss" scoped>
.waves {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
