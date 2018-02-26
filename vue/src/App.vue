<template>
  <div id="app">
    <slideshow id="slideshow" :imgSrc='imgArr'></slideshow>
    <project-index :bgSrc='bgSrc' :projectInfo='projectInfo'></project-index>
  </div>
</template>

<script>
import axios from "axios";
import Slideshow from "@/components/Slideshow";
import ProjectIndex from "@/components/ProjectIndex";
export default {
  data() {
    return {
      imgArr: [],
      projectInfo: null,
      bgSrc: ""
    };
  },
  components: {
    Slideshow,
    ProjectIndex
  },
  created() {
    // 请求轮播图资源
    axios
      .get("./static/json/slideshow.json")
      .then(res => {
        this.imgArr = Array.from(res.data);
      })
      .catch(function() {
        console.log("error");
      });
    // 请求项目信息资源
    axios
      .get("./static/json/projectIndex.json")
      .then(res => {
        this.projectInfo = res.data.projectInfo;
        this.bgSrc = res.data.bgSrc;
      })
      .catch(function() {
        console.log("error");
      });
  }
};
</script>

<style>
body {
  margin: 0;
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
#slideshow {
  width: 100%;
  height: 100vh;
}
@keyframes vertical {
  30% {
    bottom: 65px;
  }
  40% {
    bottom: 55px;
  }
  50% {
    bottom: 65px;
  }
  60% {
    bottom: 55px;
  }
  70% {
    bottom: 65px;
  }
}
</style>
