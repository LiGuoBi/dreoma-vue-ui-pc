<!--
  name: 首页轮播图1
  author: LXL
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/demo/200-infinite-loop.html
-->
<template>
  <div class="container vrs-swiper2">
    <div class="vrs-swiper2-container swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img class="vrs-slide-img" :src="item.cover" />
        </div>
      </div>
    </div>
    <div class="swiper-button-next vrs-button-next2"></div>
    <div class="swiper-button-prev vrs-button-prev2"></div>
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
        { cover: require('./img/profile-1.png') },
        { cover: require('./img/profile-2.png') },
        { cover: require('./img/profile-3.png') },
        { cover: require('./img/profile-2.png') },
        { cover: require('./img/profile-1.png') }
      ]
      this.$nextTick(() => {
        this.initSwiper()
      })
    }, 500)
  },
  computed: {},
  methods: {
    initSwiper() {
      new Swiper('.vrs-swiper2 .vrs-swiper2-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.vrs-button-next2',
          prevEl: '.vrs-button-prev2'
        }
      })
    }
  }
}
</script>

<style lang='scss'>
.vrs-swiper2 {
  user-select: none;
  position: relative;
  height: 217px;
  .vrs-swiper2-container {
    width: calc(100% - 220px); //减去 左右按钮+按钮边距的总宽度
    .vrs-slide-img {
      position: relative;
      height: 100%;
      object-fit: cover;
    }
  }
  .vrs-button-next2,
  .vrs-button-prev2 {
    @include wh(60px,100%);  //箭头的宽高
    margin-top: -106.5px;   //-箭头高度的一半
    outline: none;
  }
  .vrs-button-next2 {
    right: 0;
    background: url("./img/arrow-right.png");
  }
  .vrs-button-prev2 {
    left: 0;
    background: url("./img/arrow-left.png");
  }
}
</style>