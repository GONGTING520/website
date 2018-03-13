<template>
    <div>
        <div id="project-index" :style="'background-image:url('+bgSrc+')'">
            <ul class="clearfix text-center">
                <li @click="changeIndex(val)" :class="{selected:projectIndex==val}" v-for="(val,index) in indexList" :key="index" v-text="val"></li>
            </ul>
        </div>
        <div id="project-info" ref="projectInfo">
            <transition-group class="clearfix" tag="ul" name="scale">
              <li @mouseover="up(idx)" @mouseout="down(idx)" class="col-lg-4 col-md-6 col-sm-6 col-xs-12 project-li" v-show="projectIndex=='All'||projectIndex==val.classify" v-for="(val,idx) in projectInfo" :key="val.id">
                <a class="project-link" :href="val.path">
                  <img ref="image" :src="val.src" :alt="val.info">
                  <div @mousemove="moveTip($event)" @mouseout="bShowTip=false" @mouseover="showTip(idx)" class="projrct-link-layup" :style="{cursor:'url('+val.cursorSrc+') 8 8, e-resize'}"></div>                    
                </a>
              </li>
            </transition-group>
            <p ref="tip" v-show="bShowTip" class="desc" :style="tipStyle"></p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projectIndex: "All",
      indexList: ["All", "Games", "Tools", "App"],
      iTop: 0,
      iLeft: 0,
      bShowTip: false
    };
  },
  methods: {
    up(index) {
      this.$refs.image[index].style.top = 400 - this.$refs.image[index].offsetHeight  + 'px';
    },
    down(index) {
      this.$refs.image[index].style.top = 0;
    },
    changeIndex(index) {
      this.projectIndex = index;
    },
    moveTip(e) {
      this.iTop = e.pageY - this.$refs.projectInfo.offsetTop - 30;
      this.iLeft = e.clientX;
    },
    showTip(index) {
      this.bShowTip = true;
      this.$refs.tip.innerHTML = this.$refs.image[index].alt;
    }
  },
  computed: {
    tipStyle() {
      return {
        top: this.iTop + "px",
        left: this.iLeft + "px"
      };
    }
  },
  props: ["projectInfo", "bgSrc"]
};
</script>

<style scoped>
#project-index {
  padding: 40px 0;
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
#project-info {
  position: relative;
}
#project-info .project-li {
  position: relative;
  padding: 0;
  height: 400px;
  overflow: hidden;
  float: left;
}
#project-info img {
  width: 100%;
  position: absolute;
  transition: all 1s ease;
  top: 0;
}
#project-info .project-link {
  display: block;
  width: 100%;
  height: 100%;
}
#project-info .projrct-link-layup {
  transition: opacity 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
}
#project-info .projrct-link-layup:hover {
  opacity: 1;
}
#project-info .desc {
  position: absolute;
  z-index: 10;
  color: #000000;
  border-bottom: 2px solid #000000;
  transform: translate(-40%, 0);
}
</style>
