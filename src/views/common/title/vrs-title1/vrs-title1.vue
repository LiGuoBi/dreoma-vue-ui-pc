<!--
  name: 标题1
  author: LXL
  desc:
-->
<template>
  <div class="vrs-title1 flex-c column">
    <div class="vrs-block" :style="bgStyle"></div>
    <div class="vrs-block" :style="colorStyle">{{en}}</div>
    <div class="vrs-block" :style="colorStyle">{{zh}}</div>
  </div>
</template>

<script>

export default {
  name: '',
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
      default: '#222222'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    colorStyle () {
      return {
        'color': this.color
      }
    },
    bgStyle () {
      return {
        'background': this.bg
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-title1 {
  margin: 50px 0;
  .vrs-block:nth-of-type(1) {
    width: 110px;
    height: 3px;
  }
  .vrs-block:nth-of-type(2) {
    font-family: Impact;
    font-size: 40px;
    margin: 10px 0;
  }
  .vrs-block:nth-of-type(3) {
    font-size: 30px;
  }
}
</style>