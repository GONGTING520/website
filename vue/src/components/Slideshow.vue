<template>
<div>
  <transition-group tag="ul" name="slide">
    <li v-show="index==idx" v-for="(val,idx) in imgSrc" :key="val.id">
        <img :src="val.src">
    </li>
  </transition-group>
  <div class="arrow-down" @click="down" :style="arrowDownStyle"></div>
  <div class="process" :style="{width: p/5 + '%'}"></div>
  <div class="layup">
    <div @mouseover="mouseOverOn='left'" :class="['left',{leftStyle:mouseOverOn=='left'}]"></div>
    <div @mouseover="mouseOverOn='center'" :class="['center',{centerStyle:mouseOverOn=='center'}]"></div>
    <div @mouseover="mouseOverOn='right'" :class="['right',{rightStyle:mouseOverOn=='right'}]"></div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      timer: null,
      p: 0,
      mouseOverOn: null,
      arrowDownStyle: {
        background: "url(./static/img/grab-down.png) no-repeat center/contain"
      },
      leftStyle: {
        cursor: "url(.static/img/cursor/grab-left.png) 8 8, e-resize"
      },
      centerStyle: {
        cursor: "url(.static/img/cursor/grab-slider.png) 8 8, e-resize"
      },
      rightStyle: {
        cursor: "url(.static/img/cursor/grab-right.png) 8 8, e-resize"
      }
    };
  },
  props: ["imgSrc"],
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
      if (this.p >= 500) {
        this.index++;
        this.index = this.index == this.imgSrc.length ? 0 : this.index;
        this.p = 0;
      }
      requestAnimationFrame(this.step);
    },
    down() {
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
.slide-enter {
  transform: translate(100%, 0);
}
.slide-enter-to,
.slide-leave {
  transform: translate(0, 0);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-leave-to {
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
