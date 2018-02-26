<template>
    <div>
        <div id="project-index" :style="'background-image:url('+bgSrc+')'">
            <ul class="clearfix">
                <li @click="changeIndex(val)" :class="{selected:projectIndex==val}" v-for="(val,index) in indexList" :key="index" v-text="val"></li>
            </ul>
        </div>
        <div>
            <transition-group name="fade" id="project-info">
                <li v-show="projectIndex=='All'||projectIndex==val.classify" v-for="val in projectInfo" :key="val.id">
                    <img :src="val.src">
                    <p v-text="val.info" class="desc"></p>
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projectIndex: "All",
      indexList: ["All", "Games", "Tools", "移动端"],
    };
  },
  methods: {
    changeIndex(index) {
      this.projectIndex = index;
    }
  },
  props:['projectInfo','bgSrc']
};
</script>

<style scoped>
#project-index {
  padding: 40px 0;
}
#project-index ul {
  width: 748px;
  margin: 0 auto;
  text-align: center;
}
#project-index li {
  display: inline-block;
  margin: 10px 15px;
  padding: 5px 1px;
  color: #ffffff;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-bottom-color 0.5s ease;
  letter-spacing: 5px;
}
#project-index .selected,
#project-index li:hover {
  border-bottom-color: #ffffff;
}
#project-info li {
  position: relative;
  width: 50%;
  float: left;
}
#project-info img {
  width: 100%;
}
#project-info .desc {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, 0);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
</style>
