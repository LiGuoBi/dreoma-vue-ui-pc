<!--
  name: 导航栏3
  author: YDF
  desc: 最大宽度1560px，最小宽度1200，居中
-->
<template>
  <header class="vrs-header3">
    <div class="vrs-main flex-v">
      <div class="vrs-logo flex-item">
        <img class src="./img/logo.jpg">
      </div>
      <div class="flex-v vrs-nav">
        <router-link class="link" to="/home">首页</router-link>
        <router-link class="link" to="/home">关于我们</router-link>
        <router-link class="link" to="/home">服务范围</router-link>
        <router-link class="link" to="/home">项目展示</router-link>
        <router-link class="link" to="/home">联系我们</router-link>
      </div>
      <div class="vrs-replacement flex-v" >
      <img class="vrs-pic" src="./img/icon-2.png">
      <div class="vrs-txt">English</div>
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
.vrs-header3 {
  border: 1px solid #f9f9f9;
  box-shadow: 0 0 6px 0;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 99;
  .vrs-main {
    max-width: 1560px;
    min-width: 1200px;
    margin: auto;
    height: 100px;
  }
  .vrs-logo img {
    width: 172px;
  }
  .link {
    color: #6481BA;
    font-size: 16px;
    margin: 0 40px;
    line-height: 40px;
    border-bottom: 3px solid transparent;
    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover,
    &.active {
      color: #004DFF;
      border-bottom: 3px solid #004DFF;
    }
  }
  .vrs-nav {
    height: 40px;
    border-bottom: 1px solid #6481BA;
  }
  .vrs-replacement {
    margin-left: 65px;
    .vrs-pic {
      width: 27px;
      margin-right: 15px;
    }
    .vrs-txt {
      color: #666666;
      font-size: 16px;
    }
  }
}
</style>