<template>
  <div id="app">
    <slideshow id="slideshow" :imgSrc='imgArr'></slideshow>
    <project-index :bgSrc='bgSrc' :projectInfo='projectInfo'></project-index>
    <transition tag="div" name="fade">
      <div class="arrow-up" @click="up" v-show="isShowUp" :style="arrowUpStyle"></div>
    </transition>
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
      bgSrc: "",
      isShowUp: false,
      arrowUpStyle: {
        background: "url(./static/img/grab-up.png) no-repeat center"
      }
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
  },
  mounted() {
    $(window).on("scroll", () => {
      let iScrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (iScrollTop < document.documentElement.clientHeight) {
        this.isShowUp = false;
      } else {
        this.isShowUp = true;
      }
    });
  },
  methods: {
    up() {
      $(document.body)
        .add(document.documentElement)
        .animate(
          {
            scrollTop: 0
          },
          1000
        );
    }
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
.arrow-up {
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 65px;
  right: 5%;
  animation: vertical 2.5s ease infinite;
  z-index: 10;
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
  transition: opacity 0.3s ease;
}
</style>
