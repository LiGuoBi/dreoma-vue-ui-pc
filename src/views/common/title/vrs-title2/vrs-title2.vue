<!--
  name: 标题2
  author: YDF
  desc: 可传参数，t1-第一个标题 t2-第二个标题 color-字体颜色 bg-背景色
-->
<template>
  <div class="vrs-title1">
    <div class="vrs-zh-tiitle flex-c">
      <div class="vrs-mark-line"></div>
      <div class="vrs-text" :style="colorStyle">{{zh}}</div>
      <div class="vrs-mark-line"></div>
    </div>
    <div class="flex-c" :style="colorStyle">{{en}}</div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: {
    zh: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    colorStyle() {
      return {
        'color': this.color
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-title1 {
  margin: 50px 0;
  .vrs-zh-tiitle {
    padding-bottom: 10px;
    .vrs-mark-line {
      @include wh(40px,3px);
      background-color: #ff9f00;
    }
    .vrs-text {
      margin: 0 20px;
      font-size: 30px;
    }
  }
}
</style>