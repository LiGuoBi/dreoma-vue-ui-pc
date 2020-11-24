<!--
  name: 首页导航栏1
  author: LXL
  desc: 中间 vrs-header1 1200宽度，两边撑满剩余空间
-->
<template>
  <div class="vrs-header1">
    <div class="flex between container">
      <div>
        <img class="vrs-logo" src="./img/logo.png">
      </div>
      <div class="vrs-tel-wrap flex-v">
        <img src="./img/tel.png"><span class="vrs-tel-txt">联系我们</span><span class="vrs-tel-num">0871-67357103</span>
      </div>
    </div>
    <div class="flex">
      <div class="flex-item"></div>
      <div class="container flex l-end">
        <div class="vrs-nav flex">
          <div class="vrs-arrow"></div>
          <ul class="vrs-nav-bar flex between">
            <li>
              <router-link class="vrs-link" to="/home">首页</router-link>
            </li>
            <li>
              <router-link class="vrs-link" to="/company">企业介绍</router-link>
            </li>
            <li>
              <router-link class="vrs-link" to="/product">产品服务</router-link>
            </li>
            <li>
              <router-link class="vrs-link" to="/advisory">咨询动态</router-link>
            </li>
            <li>
              <router-link class="vrs-link" to="/contact">联系我们</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-item vrs-extend"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-header1 {
  background-color: #fff;
  .vrs-logo {
    width: 180px;
    height: 58px;
    margin: 38px 0 0;
    position: absolute;
  }
  .vrs-tel-wrap {
    .vrs-tel-txt {
      font-size: 18px;
      color: #314555;
      margin: 0 32px 0 6px;
    }
    .vrs-tel-num {
      font-size: 24px;
      color: #2a344e;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: -16px;
        width: 1px;
        height: 30px;
        background: #d5dce4;
      }
    }
    img {
      @include wh(34px);
      margin: 24px 0;
    }
  }
  .vrs-nav {
    background: #2a344e;
    .vrs-arrow {
      width: 50px;
      height: 50px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        border-bottom: 50px solid transparent;
        border-left: 40px solid transparent;
        border-left-color: #fff;
      }
    }
    .vrs-nav-bar {
      width: 830px;
      padding-left: 30px;
      .vrs-link {
        color: #fff;
        font-size: 18px;
        line-height: 50px;
        padding: 0 30px;
        &:hover,
        &.active {
          color: #4ab9cf;
        }
      }
    }
  }
  .vrs-extend {
    background: #2a344e;
  }
}
</style>