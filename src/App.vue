<!--
  name: Dreoma-PC-UI
  author: 小炜
  desc: UI框架
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('APP')
  }
}
</script>

<style lang="scss">
@import "@/styles/common.scss";

// 此项目的全局样式
html,body {
  height: 100%;
  font-size: 16px;
}
body {
  min-width: calc(240px - 1282px);
}
#app {
  height: 100%;
}
.box-card + .box-card {
  margin-top: 20px;
}
.tip-box {
  margin-top: 30px;
  background-color: #f3f5f7;
  border-left: 8px solid #42b983;
  padding: 15px;
  dt {
    font-size: 18px;
    padding-bottom: 10px;
  }
  dd {
    line-height: 26px;
  }
}
</style>
