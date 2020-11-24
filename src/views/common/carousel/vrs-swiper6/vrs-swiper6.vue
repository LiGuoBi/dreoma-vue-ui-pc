<!--
  name: 首页轮播图6
  author: LXL
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/demo/200-infinite-loop.html
-->
<template>
  <div class="container vrs-swiper6">
    <div class="vrs-swiper6-container swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img class="vrs-slide-img" :src="item.cover" />
          <div class="swiper-slide-title flex-v">优秀企业奖</div>
        </div>
      </div>
    </div>
    <div class="swiper-button-next vrs-button-next6"></div>
    <div class="swiper-button-prev vrs-button-prev6"></div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      banner: []
    }
  },
  created() {
    setTimeout(() => {
      this.banner = [
        { cover: require('./img/img-1.png') },
        { cover: require('./img/img-2.png') },
        { cover: require('./img/img-1.png') },
        { cover: require('./img/img-2.png') },
        { cover: require('./img/img-1.png') }
      ]
      this.$nextTick(() => {
        this.initSwiper()
      })
    }, 500)
  },
  computed: {},
  methods: {
    initSwiper() {
      new Swiper('.vrs-swiper6 .vrs-swiper6-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.vrs-button-next6',
          prevEl: '.vrs-button-prev6'
        }
      })
    }
  }
}
</script>

<style lang='scss'>
.vrs-swiper6 {
  user-select: none;
  position: relative;
  height: 300px;
  .vrs-swiper6-container {
    height: 100%;
    width: calc(100% - 240px); //减去 左右按钮+按钮边距的总宽度
    .vrs-slide-img {
        position: relative;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
      .swiper-slide-title {
        position: absolute;
        bottom: 0;
        @include wh(100%, 60px);
        padding: 0 25px;
        font-size: 16px;
        color: #fff;
        background: #40BC72;
        border-radius: 5px;
      }
  }
  .vrs-button-next6,
  .vrs-button-prev6 {
    @include wh(60px);  //箭头的宽高
    margin-top: -30px;   //-箭头高度的一半
    outline: none;
  }
  .vrs-button-next6 {
    right: 0;
    background: url("./img/arrow-right.png");
  }
  .vrs-button-prev6 {
    left: 0;
    background: url("./img/arrow-left.png");
  }
}
</style>