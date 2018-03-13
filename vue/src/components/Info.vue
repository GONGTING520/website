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
                <li>
                  <svg fill="rgba(55, 55, 55, 0.8)" aria-hidden="true" height="22" version="1.1" viewBox="0 0 16 16" width="22">
                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  <a href="https://github.com/GONGTING520">https://github.com/GONGTING520</a>
                </li>


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
svg{
  margin-right: 2.2%;
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
