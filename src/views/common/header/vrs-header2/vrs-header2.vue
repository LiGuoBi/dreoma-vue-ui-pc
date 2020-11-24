<!--
  name: 首页导航栏2
  author: YDF
  desc: 宽度1200px,居中
-->
<template>
  <header class="vre-header2">
    <div class="vrs-main flex-v container">
      <div class="vrs-logo flex-item">
        <img class src="./img/logo.png">
      </div>
      <div class="flex-v vrs-nav"> 
        <router-link class="link" to="/home">首页</router-link>
        <router-link class="link" to="/home">路线</router-link>
        <router-link class="link" to="/home">活动项目</router-link>
        <router-link class="link" to="/home">个性化服务</router-link>
        <router-link class="link" to="/home">关于我们</router-link>
      </div>
      <div class="vrs-replacement flex-v">
        <img class="vrs-pic" src="./img/phone.png">
        <div class="vrs-txt">14789787415</div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vre-header2 {
  border: 1px solid #f9f9f9;
  box-shadow: 0 0 6px 0;
  width: 100%;
  background-color: #fff;
  top: 0;
  z-index: 99;
  .vrs-main {
    height: 116px;
  }
  .vrs-logo img {
    @include wh(225px, 60px);
  }
  .link {
    color: #000;
    font-size: 16px;
    padding: 0 45px;
    border-right: 1px solid #d8d8d8;
    &:last-child {
      border-right: 0px solid #d8d8d8;
      padding-right: 0px;
    }
    &:first-child {
      padding-left: 0;
    }
    &:hover,
    &.active {
      color: #ff9f00;
    }
  }
  .vrs-nav {
    height: 40px;
  }
  .vrs-replacement {
    margin-left: 36px;
    .vrs-pic {
      @include wh(20px);
      margin-right: 15px;
    }
    .vrs-txt {
      font-size: 14px;
    }
  }
}
</style>