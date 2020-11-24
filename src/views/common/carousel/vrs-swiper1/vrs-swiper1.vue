<!--
  name: 首页轮播图1
  author: 小炜
  desc: 使用swiper滑动插件 API:https://www.swiper.com.cn/
-->
<template>
  <div class="swiper-container vrs-swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <div class="vrs-slide-item">
          <img :src="slide.cover">
        </div>
      </div>
    </div>
    <div class="swiper-pagination page-slide1"></div>
  </div>
</template>

<script>
export default {
  name: 'vrs-swiper1',
  data () {
    return {
      swiper: {},
      slides: []
    }
  },
  created () {
    // 模拟数据请求
    setTimeout(() => {
      this.slides = [
        { cover: require('./img/picture-1.jpg') },
        { cover: require('./img/picture-2.jpg') },
        { cover: require('./img/picture-3.jpg') },
        { cover: require('./img/picture-4.jpg') }
      ]
      this.$nextTick(() => {
        this.initSwiper()
      })
    }, 500)
  },
  computed: {},
  methods: {
    initSwiper () {
      // script 链接的方式引入，不用import引入
      this.swiper = new Swiper('.vrs-swiper1', {
        loop: true,
        pagination: {
          el: '.page-slide1',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper1 {
  max-height: calc(100vh - 100px);
}
.vrs-slide-item {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
