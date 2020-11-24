<!--
  name: 弹出层1
  author: YDF
  desc: 简单放大单个元素
-->
<template>
  <div class="vrs-popup1">
    <button class="vrs-display" @click="Onshow">查看大图</button>
    <div v-show="codeShow">
      <div class="vrs-preview"></div>
      <div class="vrs-pre-content">
        <div class="vrs-applay">报名二维码：</div>
        <div class="vrs-qr-cade">
          <img class="pich" src="./img/code.png">
        </div>
        <div class="vrs-applay tc">扫描上方二维码，即可报名</div>
        <div class="vrs-button-back" @click="codeShow = !codeShow">
          <img class="pich" src="./img/back.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      codeShow: false
    }
  },
  computed: {},
  methods: {
    Onshow() {
      this.codeShow = true
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-popup1 {
  .vrs-display {
    @include wh(140px, 40px);
    text-align: center;
    line-height: 40px;
    border: solid 1px #cecece;
    border-radius: 5px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  .vrs-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
  .vrs-pre-content {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    width: 1200px;
    min-height: 600px;
    .vrs-applay {
      font-size: 22px;
      color: #fff;
    }
    .vrs-qr-cade {
      @include wh(400px);
      margin: 45px auto 75px;
    }
  }
  .vrs-button-back {
    @include wh(38px);
    position: absolute;
    z-index: 10;
    top: 50px;
    right: 330px;
    margin-left: 220px;
  }
}
</style>