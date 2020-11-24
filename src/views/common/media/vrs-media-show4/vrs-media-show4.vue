<!--
  name: 图文展示4
  author: LXL
  desc: 背景图100%宽度，中间div通过调整margin覆盖背景，宽度1200自动居中。图标可以使用本地或接口数据
-->
<template>
  <div class="vrs-media-show4">
    <div class="bg vrs-bg">
      <vrs-title en="GROUP CONCEPT" zh="集团理念" color="#fff" bg="#fff"></vrs-title>
    </div>
    <div class="vrs-three flex around container">
      <div class="vrs-three-item flex-c column" v-for="(item, index) in three" :key="index">
        <!-- <img :src="'public/img/icon-' + index + '.png'" /> -->
        <img :src="item.cover" />
        <p class="vrs-title">{{ item.title }}</p>
        <p class="vrs-content multiline-txt">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import vrsTitle from '@/views/common/title/vrs-title1/vrs-title1.vue'
export default {
  name: 'vrs-media-show4',
  components: { vrsTitle },
  data() {
    return { three: [] }
  },
  created() {
    this.three = [
      {
        cover: require('./img/icon-1.png'),
        title: '自信',
        content:
          '【希望】自始至终保持乐观与积极的心态，面对自己、面对他人、面对挫折、面对失败，才能面向和迎接未来。'
      },
      {
        cover: require('./img/icon-2.png'),
        title: '希望',
        content:
          '【希望】自始至终保持乐观与积极的心态，面对自己、面对他人、面对挫折、面对失败，才能面向和迎接未来。'
      },
      {
        cover: require('./img/icon-3.png'),
        title: '爱',
        content:
          '【爱】共情+温度+爱与被爱的能力，是人工智能时代人与 AI 最大的差别，是作为 人最宝贵的财富。'
      }
    ]
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-media-show4 {
  .vrs-bg {
    // margin: 183px 0 0;
    padding-top: 56px;
    height: 500px;
    background: url("./img/del-bg1.png");
  }
  .vrs-three {
    margin-top: -180px;
    padding: 42px 42px 48px;
    color: #ffffff;
    background: #40bc72;
    box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.16);
    img {
      @include wh(80px);
    }
    .vrs-three-item {
      width: 33%;
      padding: 0 43px;
      text-align: justify;
      .vrs-title {
        margin: 14px 0 21px;
        font-size: 20px;
        font-weight: bold;
      }
      .vrs-content {
        font-size: 14px;
        line-height: 18px;
        height: 54px;
        -webkit-line-clamp: 3;
      }
      &:nth-of-type(2) {
        border: 1px solid #ffffff;
        border-top: none;
        border-bottom: none;
      }
    }
  }
}
</style>