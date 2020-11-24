<!--
  name: 图文展示4
  author: LXL
  desc: content超出9行显示省略
-->
<template>
  <div class="vrs-media-show5 flex container">
    <div class="vrs-left">
      <div class="vrs-txt">ompany culture</div>
      <div class="vrs-txt">企业文化</div>
      <div class="vrs-txt multiline-txt">{{ content }}</div>
    </div>
    <div class="vrs-right">
      <img src="./img/img.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-media-show5',
  components: {},
  data() {
    return {
      content: ''
    }
  },
  async created() {
    this.content = '啊实打实大苏打实打实程序程序倒数第三个'
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.vrs-media-show5 {
  // margin: 155px auto 20px;
  .vrs-left {
    color: #ffffff;
    background: #40BC72;
    width: 50%;
    height: 500px;
    padding: 50px;
    .vrs-txt:nth-of-type(1) {
      font-family: Impact;
      font-size: 50px;
    }
    .vrs-txt:nth-of-type(2) {
      font-family: PingFangSC-Regular;
      font-size: 40px;
    }
    .vrs-txt:nth-of-type(3) {
      height: 198px;
      -webkit-line-clamp: 9;
      text-align: justify;
      font-size: 16px;
      line-height: 22px;
      margin-top: 44px;
    }
  }
  .vrs-right {
    @include wh(50%, 456px);
    align-self: flex-end;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
