<!--
  name: 卡组1
  author: LXL
  desc: 每列3个可自定义，自动换行，最后一个显示更多不包含在循环内
-->
<template>
  <div class="vrs-list1 container flex-wrap">
    <router-link class="vrs-card ovh" to="/" v-for="(item,index) in cardList" :key="index">
      <div class="vrs-img-bg">
        <img class="vrs-pic" :src="item.cover">
      </div>
      <div class="vrs-card-inner flex-v between">
        <div class="vrs-single-txt">{{item.title}}</div>
        <img src="./img/right.png">
      </div>
    </router-link>
    <router-link class="vrs-card ovh" to="/product">
      <div class="vrs-img-bg flex-c">
        <img class="vrs-pic vrs-more" src="./img/card-6.png">
      </div>
      <div class="vrs-card-inner flex-v between">
        <div>更多</div>
        <img src="./img/right.png">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      cardList: []
    }
  },
  created () {
    this.cardList = [
      { title: '王者荣耀', cover: require('./img/card-1.png') },
      { title: '贪玩蓝月', cover: require('./img/card-2.png') },
      { title: '英雄联盟', cover: require('./img/card-3.png') },
      { title: '连连看', cover: require('./img/card-4.png') },
      { title: '梦回长生', cover: require('./img/card-5.png') },
    ]
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-list1 {
  .vrs-card {
    width: 360px;
    background: #ffffff;
    border: 1px solid #c6c6c6;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.14);
    margin: 0 60px 60px 0;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    .vrs-img-bg {
      @include wh(360px);
      background: #2a344e;
    }
    .vrs-pic {
      @include wh(100%);
      object-fit: cover;
      &.vrs-more {
        @include wh(150px);
      }
    }
    .vrs-card-inner {
      font-size: 22px;
      color: #333333;
      padding: 35px 26px 35px 20px;
      img {
        @include wh(21px, 18px);
      }
    }
  }
}
</style>