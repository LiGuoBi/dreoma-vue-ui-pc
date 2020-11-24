<!--
  name: 卡组3
  author: LXL
  desc:
-->
<template>
  <div class="vrs-list3">
    <div class="vrs-card-list container flex-item flex-wrap">
      <router-link
        class="vrs-card-item ovh"
        :to="{ path: '/product/detail/' + item.id }"
        v-for="(item, index) in cardData"
        :key="index"
      >
        <div class="vrs-card-img">
          <img :src="item.cover" />
        </div>
        <div class="vrs-card-inner flex column between">
          <div class="vrs-txt single-txt">{{ item.title }}</div>
          <div class="vrs-txt multiline-txt">{{ item.content }}</div>
          <div class="vrs-txt">READ MORE >></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      cardData: [] //渲染数据
    }
  },
  created() {
    this.cardData = [
      {cover: require('./img/img-1.png'), title: '翰森贝迪幼儿园',content:'我们为企业的融资提供专业的顾问服务,包括:商业计划书的指导,投资公司的沟通,以及投资协议的审阅等'},
      {cover: require('./img/img-2.png'), title: '翰森贝迪幼儿园',content:'我们为企业的融资提供专业的顾问服务,包括:商业计划书的指导,投资公司的沟通,以及投资协议的审阅等'},
      {cover: require('./img/img-3.png'), title: '翰森贝迪幼儿园',content:'我们为企业的融资提供专业的顾问服务,包括:商业计划书的指导,投资公司的沟通,以及投资协议的审阅等'},
    ]
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.vrs-list3 {
  .vrs-card-list {
    .vrs-card-item {
      width: 380px;
      background: #ffffff;
      border: 1px solid #c6c6c6;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.14);
      margin: 0 30px 0 0;
      &.vrs-card-item:nth-of-type(3n) {
        margin-right: 0;
      }
      .vrs-card-img {
        @include wh(380px, 240px);
        img {
          @include wh(100%);
          object-fit: cover;
        }
      }
      .vrs-card-inner {
        height: 190px;
        font-size: 22px;
        color: #333333;
        padding: 26px 20px 40px;
        .vrs-txt:nth-of-type(1) {
          font-size: 22px;
          font-weight: bold;
          color: #333333;
        }
        .vrs-txt:nth-of-type(2),
        .vrs-txt:nth-of-type(3) {
          font-size: 14px;
          color: #555555;
          text-align: justify;
        }
      }
    }
  }
}
</style>
