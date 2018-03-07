<template>
  <transition-group tag="div" :name="slide" id="app">
    <index key="0" v-show="!showInfo" @info="changeSlideDirction('right')"></index>
    <info key="1" v-show="showInfo" @home="changeSlideDirction('left')"></info>
  </transition-group>
</template>

<script>
import Index from "@/components/Index";
import Info from "@/components/Info";
export default {
  data() {
    return {
      slide: "slide-right",
      showInfo: false
    };
  },
  methods: {
    changeSlideDirction(sDirc) {
      this.slide = "slide-" + sDirc;
      this.showInfo = sDirc=='right'? true : false;
    }
  },
  components: {
    Index,
    Info
  }
};
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
  font-family: "Josefin Slab";
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
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
  transition: transform 0.5s ease-in;
}
.slide-left-leave-to,
.slide-right-enter {
  transform: translate(-100%, 0);
}
</style>
