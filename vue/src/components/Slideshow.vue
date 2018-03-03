<template>
<div>
  <transition-group tag="ul" :name="transitionName">
    <li v-show="index==idx" v-for="(val,idx) in imgSrc" :key="val.id">
        <img :src="val.src">
    </li>
  </transition-group>
  <div class="arrow-down" @click="down" :style="arrowDownStyle"></div>
  <div class="process" :style="{width: (p*100)/pMax + '%'}"></div>
  <div class="layup">
    <div @click="prev" class="left" :style="leftStyle"></div>
    <div @mouseup="holdUp($event)" @mousedown="iMouseDownLeft=$event.clientX" class="center" :style="centerStyle"></div>
    <div @click="p=pMax" class="right" :style="rightStyle"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      p: 0,
      pMax: 500,
      transitionNameIdx: 0,
      transitionNameArr: ["slide-left", "slide-right"],
      iMouseDownLeft: 0,
      iMouseUpLeft: 0,
      arrowDownStyle: {
        background: "url(./static/img/grab-down.png) no-repeat center/contain"
      },
      leftStyle: {
        cursor: "url(./static/img/cursor/grab-left.png) 8 8, e-resize"
      },
      centerStyle: {
        cursor: "url(./static/img/cursor/grab-slider.png) 8 8, e-resize"
      },
      rightStyle: {
        cursor: "url(./static/img/cursor/grab-right.png) 8 8, e-resize"
      }
    };
  },
  props: ["imgSrc"],
  computed: {
    transitionName() {
      return this.transitionNameArr[this.transitionNameIdx];
    }
  },
  mounted() {
    // this.timer = setInterval(() => {
    //   this.index++;
    //   this.index = this.index == this.imgSrc.length ? 0 : this.index;
    // }, 5000);
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    requestAnimationFrame(this.step);
  },
  methods: {
    step() {
      this.p++;
      if (this.p >= this.pMax) {
        this.transitionNameIdx = 0;
        this.index++;
        this.index = this.index == this.imgSrc.length ? 0 : this.index;
        this.p = 0;
      }
      requestAnimationFrame(this.step);
    },
    prev() {
      // 切换到上一张图片
      this.transitionNameIdx = 1;
      this.index--;
      this.index = this.index == -1 ? this.imgSrc.length - 1 : this.index;
      this.p = 0;
    },
    holdUp(e) {
      this.iMouseUpLeft = e.clientX;
      if (this.iMouseDownLeft < this.iMouseUpLeft) {
        this.prev();
      } else if (this.iMouseDownLeft > this.iMouseUpLeft) {
        this.p = this.pMax;
      }
    },
    down() {
      // 向下的箭头，滚动到屏幕高度以下
      $(document.body)
        .add(document.documentElement)
        .animate(
          {
            scrollTop: document.documentElement.clientHeight
          },
          1000
        );
    }
  }
};
</script>

<style scoped>
ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.slide-left-enter,
.slide-right-leave-to {
  transform: translate(100%, 0);
}
.slide-left-enter-to,
.slide-left-leave,
.slide-right-enter-to,
.slide-right-leave {
  transform: translate(0, 0);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.5s ease;
}
.slide-left-leave-to,
.slide-right-enter {
  transform: translate(-100%, 0);
}
.arrow-down {
  position: absolute;
  width: 32px;
  height: 40px;
  bottom: 65px;
  right: 5%;
  z-index: 10;
  animation: vertical 2.5s ease infinite;
  cursor: pointer;
}
.process {
  background: rgba(0, 0, 0, 0.5);
  height: 2px;
  position: absolute;
  bottom: 1px;
}
.layup {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}
.layup .left,
.layup .center,
.layup .right {
  flex-grow: 1;
}
</style>
