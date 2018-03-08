<template>
    <div id="info">
        <div class="info-icon">
            <span @click="$emit('home')" class="glyphicon glyphicon-upload" aria-hidden="true"></span>                    
        </div>
        <div class="info-right clearfix">
            <ul class="col-lg-6 col-md-12 col-sm-12 col-xs-12 project-info">
                <li class="title" @mouseover="showInfoIndex=index" @mouseout="showInfoIndex=null" v-for="(val,index) in infoList" :key="val.id">
                    <h1 class="text-uppercase" v-text="val.title"></h1>
                    <transition tag="div" name="scale">
                      <ul v-show="index==showInfoIndex" :key="index-1000" class="sub-info">
                          <li class="sub-info-li" v-for="(vals,idx) in val.info" v-text="vals" :key="-idx">HTML5</li>
                      </ul>
                    </transition>
                </li>
            </ul>
            <ul class="col-lg-5 col-md-12 col-sm-12 col-xs-12 personal-info">
                <li><span class="glyphicon glyphicon-envelope"></span>onecattlegt@163.com</li>
                <li><span class="glyphicon glyphicon-phone"></span>182-4605-8896</li>
                <li><span class="glyphicon glyphicon-user"></span>龚婷</li>
                <li><span class="glyphicon glyphicon-map-marker"></span>黑龙江，哈尔滨</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      infoList: [],
      showInfoIndex: null
    };
  },
  mounted() {
    axios
      .get("./static/json/info.json")
      .then(res => {
        this.infoList = res.data;
      })
      .catch(function() {
        console.log("error");
      });
  }
};
</script>

<style scoped>
#info {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url(../../static/img/info-bg.jpg) no-repeat center/cover;
  overflow-y: scroll;
}
.info-icon {
  width: 10%;
  float: left;
  font-size: 3em;
  margin-left: 3%;
  transform: rotate(-90deg);
}
.glyphicon-upload {
  cursor: pointer;
}
.info-right {
  padding: 40px 0 0;
  margin-left: 10%;
}
.project-info,
.personal-info {
  padding-left: 5%;
  color: rgba(55, 55, 55, 0.8);
}
.project-info .title {
  margin: 0.5em 0;
  cursor: pointer;
}
.personal-info {
  margin-top: 80px;
}
.personal-info .glyphicon {
  margin-right: 4%;
}
.personal-info li {
  margin-bottom: 1.6em;
  font-size: 1.4em;
}
.title .sub-info {
  transform-origin: top left;
}
.sub-info-li {
  transition: all 0.5s ease;
}
.sub-info-li:hover {
  color: #000000;
  font-size: 1.4em;
}
/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {
  .project-info {
    margin-top: 50px;
  }
}
</style>
