<!--
  name: 图文展示1
  author: LXL
  desc: 新闻展示，hover状态，跳转至新闻页
-->
<template>
  <div class="vrs-news1">
    <div class="container flex between">
      <div class="vrs-block-left flex">
        <img src="./img/img.png" alt />
        <div class="vrs-block-inner">
          <div class="vrs-title multiline-txt">美国要摆“鸿门宴”，但吓唬不住中国</div>
          <div
            class="vrs-content multiline-txt"
          >美国《联邦公报》于北京时间8日晚上刊登一份公告称，从星期五开始，美国将把2000亿美元中国输美商品的关税从10%提高到25%。我们注意到，美方的这一公…</div>
          <router-link to="/">
            <img src="./img/+.png" alt />
          </router-link>
        </div>
      </div>
      <div class="vrs-block-list">
        <router-link to="/" class="vrs-block-item flex-c" v-for="(item,index) in newsList" :key="index">
          <div class="vrs-time">
            <div class="vrs-txt flex-c">{{item.time1}}</div>
            <div class="vrs-txt">/{{item.time2}}</div>
          </div>
          <div class="vrs-splitter"></div>
          <div class="vrs-cont multiline-txt">{{item.cont}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-news1',
  components: {},
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.newsList = [
      {
        time1: '14',
        time2: '05',
        cont: '山西铝厂渗漏背后：老板是山东富豪身家285亿，3年被罚8次'
      },
      {
        time1: '14',
        time2: '05',
        cont: '山西铝厂渗漏背后：老板是山东富豪身家285亿，3年被罚8次'
      },
      {
        time1: '14',
        time2: '05',
        cont: '山西铝厂渗漏背后：老板是山东富豪身家285亿，3年被罚8次'
      }
    ]
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-news1 {
  padding: 50px;
  background: #f6f8f7;
  .vrs-block-left,
  .vrs-block-list {
    width: 590px;
  }
  .vrs-block-left {
    background: #ffffff;
    img {
      @include wh(290px, 370px);
      object-fit: cover;
    }
    .vrs-block-inner {
      color: #222222;
      padding: 30px 20px;
      .vrs-title {
        font-size: 18px;
        font-weight: bold;
      }
      .vrs-content {
        font-size: 14px;
        line-height: 26px;
        text-align: justify;
        margin: 12px 0 22px;
        height: 104px;
        -webkit-line-clamp: 2;
      }
      img {
        @include wh(32px);
      }
    }
  }
  .vrs-block-list {
    .vrs-block-item {
      background: #ffffff;
      margin-bottom: 20px;
      transition: all 0.2s;
      cursor: pointer;
      &:hover {
        color: #ffffff;
        background: #40bc72;
        .vrs-splitter {
          background: #ffffff;
        }
      }
      &:nth-of-type(3) {
        margin-bottom: 0;
      }
      padding: 20px 25px 20px 40px;
      .vrs-time {
        .vrs-txt:nth-of-type(1) {
          font-size: 36px;
        }
        .vrs-txt:nth-of-type(2) {
          margin-left: 5px;
          font-size: 20px;
        }
      }
      .vrs-splitter {
        margin: 0 40px;
        @include wh(1px, 70px);
        background: #555555;
      }
      .vrs-cont {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
}
</style>