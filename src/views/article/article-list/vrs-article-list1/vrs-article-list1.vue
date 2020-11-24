<!--
  name: 文章详情1
  author: YDF
  desc: 宽度1200px,居中
-->
<template>
  <router-link to="/home" class="vrs-article-list1 flex-v">
    <img class="vrs-pic" src="./img/del-11.png">
    <div class="vrs-date">
      <p class="vrs-day">12</p>
      <p class="vrs-year">2019-06-12</p>
    </div>
    <div class="flex-item vrs-main">
      <p class="vrs-title">2017黄山168徒步越野挑战赛圆满落幕</p>
      <div class="vrs-desc multiline-txt">2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕
        2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕
        2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕 2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕2017黄山168徒步越野挑战赛圆满落幕
      </div>
      <div class="flex-v">
        <img class="vrs-read" src="./img/icon-10.png">
        <p class="vrs-gray2-txt">100</p>
      </div>
    </div>
    <div class="bg vrs-arrow"></div>
  </router-link>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-article-list1 {
  color: #959595;
  border-bottom: 1px solid #e1e1e1;
  padding: 60px 0;
  .vrs-pic {
    width: 300px;
    height: 180px;
  }
  .vrs-date {
    padding: 0 40px;
  }
  .vrs-day {
    font-size: $h2;
    padding-bottom: 6px;
    color: #202020;
  }
  .vrs-year {
    font-size: $fs-sm;
  }
  .vrs-arrow {
    background-image: url("./img/bg-5.png");
    @include wh(30px);
    margin-left: 90px;
  }
  .vrs-main {
    overflow: hidden;
  }
  .vrs-title {
    font-size: 16PX;
    padding-bottom: 20px;
    color: #202020;
  }
  .vrs-desc {
    line-height: 28px;
    max-height: 112px;
    -webkit-line-clamp: 4;
    margin-bottom: 10px;
  }
  .vrs-read {
    @include wh(18px);
    margin-right: 4px;
  }
  &:hover {
    .vrs-arrow {
      background-image: url("./img/bg-6.png");
    }
    .vrs-title {
      color: #ff9f00;
    }
  }
}
</style>