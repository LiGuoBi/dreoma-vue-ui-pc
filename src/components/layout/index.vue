<!-- UI展示页面布局 -->
<template>
  <div class="app-wrapper">
    <side-bar></side-bar>
    <div class="main-wrap">
      <div class="head-bar flex-v">
        <!-- 面包屑导航 -->
        <breadcrumb />
      </div>
      <div class="app-main">
        <transition name="fade-transform" mode="out-in">
          <router-view class="" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from './sideBar'
import Breadcrumb from './Breadcrumb'
export default {
  name: 'Layout',
  components: {
    sideBar,
    Breadcrumb
  }
}
</script>

<style lang='scss'>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.main-wrap {
  padding-left: 240px;
  transition: padding-left 0.3s;
}
.head-bar {
  height: 50px;
  overflow: hidden;
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 99;
}
.app-main {
  min-height: calc(100vh - 50px);
  min-width: 1282px;
  width: 100%;
  position: relative;
  padding: 20px;
  z-index: 2;
  background-color: #fff;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>