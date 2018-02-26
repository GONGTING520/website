<template>
<div>
  <transition-group tag="ul" name="slide">
    <li v-show="index==idx" v-for="(val,idx) in imgSrc" :key="val.id">
        <img :src="val.src">
    </li>
  </transition-group>
  <div class="arrow-down" @click="down()" :style="arrowDownStyle"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      timer: null,
      arrowDownStyle: {
        background: "url(./static/img/grab-down.png) no-repeat center/contain"
      }
    };
  },
  props: ["imgSrc"],
  mounted() {
    this.timer = setInterval(() => {
      this.index++;
      this.index = this.index == this.imgSrc.length ? 0 : this.index;
    }, 5000);
  },
  methods: {
    down() {
      document.body.scrollTop = document.documentElement.scrollTop = document.documentElement.clientHeight;
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
</style>
