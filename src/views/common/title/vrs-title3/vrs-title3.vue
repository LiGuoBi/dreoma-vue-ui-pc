<!--
  name: 标题3
  author: LXL
  desc: 可传参数，t1-第一个标题 t2-第二个标题 color-字体颜色 bg-背景色 align传flex-end可设置右对齐
-->
<template>
  <div class="vrs-title3 flex column" :style="alignStyle">
    <div class="vrs-block" :style="bgStyle"></div>
    <div class="vrs-block" :style="colorStyle">{{en}}</div>
    <div class="vrs-block" :style="colorStyle">{{zh}}</div>
  </div>
</template>

<script>
export default {
  name: 'vrs-title3',
  components: {},
  props: {
    en: {
      type: String,
      required: true
    },
    zh: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#222222'
    },
    bg: {
      type: String,
      default: '#40BC72'
    },
    align: {
      type: String,
      default: 'flex-start'
    }
  },
  data() {
    return {}
  },
  computed: {
    colorStyle() {
      return {
        color: this.color
      }
    },
    bgStyle() {
      return {
        background: this.bg
      }
    },
    alignStyle() {
      return {
        'align-items': this.align
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-title3 {
  .vrs-block:nth-of-type(1) {
    background: #40bc72;
    @include wh(110px, 3px);
    margin-bottom: 35px;
  }
  .vrs-block:nth-of-type(2) {
    font-family: Impact;
    font-size: 50px;
  }
  .vrs-block:nth-of-type(3) {
    font-family: PingFangSC-Regular;
    font-size: 40px;
  }
}
</style>