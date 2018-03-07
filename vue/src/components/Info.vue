<template>
    <div id="info">
        <div class="info-icon">
            <span @click="$emit('home')" class="glyphicon glyphicon-upload" aria-hidden="true"></span>                    
        </div>
        <div class="info-right clearfix">
            <ul class="col-lg-6 col-md-12 col-sm-12 col-xs-12 project-info">
                <li class="title">
                    <h1 class="text-uppercase">work</h1>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>ES6</li>
                        <li>jQuery</li>
                        <li>requireJS</li>
                        <li>json</li>
                        <li>ajax</li>
                        <li>Vue</li>
                        <li>Bootstrap</li>
                        <li>AMD&CMD</li>
                    </ul>
                </li>
                <li class="title">
                    <h1 class="text-uppercase">work</h1>
                </li>
                <li class="title">
                    <h1 class="text-uppercase">work</h1>
                </li>
                <li class="title">
                    <h1 class="text-uppercase">work</h1>
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
export default {};
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
/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {
  .project-info {
    margin-top: 50px;
  }
}
</style>
