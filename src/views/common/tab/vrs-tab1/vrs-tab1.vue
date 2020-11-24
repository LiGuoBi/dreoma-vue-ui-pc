<!-- 服务企业 -->
<template>
  <div class="vrs-tab1 flex-l container">
    <div
      v-for="(item, index) in titleList"
      :key="index"
      :class="['vrs-btn1', tabIndex == index ? 'active': '']"
      @click="tabIndex = index"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      tabIndex: 0,
      titleList: ['关于若水', '新闻动态', '人才招聘', '招商合作']
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-tab1 {
  background-color: #fff;
  .vrs-btn1 {
    cursor: pointer;
    border: 1px solid #e8f1f4;
    position: relative;
    @include wh(800px, 70px);
    line-height: 70px;
    text-align: center;
    color: #000;
    background-color: $white;
    font-size: 18px;
    &.active {
      background-color: #ff9f00;
      color: $white;
      &::after {
        content: "";
        background-color: $white;
        position: absolute;
        @include wh(20px);
        left: 50%;
        margin-left: -14px;
        bottom: -10px;
        transform: rotateZ(45deg);
        opacity: 1;
      }
    }
  }
}
</style>