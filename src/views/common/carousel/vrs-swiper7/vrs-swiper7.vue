<template>
  <div class="swiper-container vrs-swiper7">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <div class="vrs-slide-item">
          <img class="pich" :src="slide.cover" />
        </div>
      </div>
    </div>
    <div class="swiper-pagination vrs-page-slide7"></div>
  </div>
</template>

<script>
export default {
  name: 'vrs-swiper7',
  data() {
    return {
      swiper: {},
      slides: []
    }
  },
  created() {
    // 模拟数据请求
    setTimeout(() => {
      this.slides = [
        { cover: require('./img/img-1.png') },
        { cover: require('./img/img-1.png') },
        { cover: require('./img/img-1.png') },
        { cover: require('./img/img-1.png') },
        { cover: require('./img/img-1.png') },
      ]
      this.$nextTick(() => {
        this.initSwiper()
      })
    }, 500)
  },
  computed: {},
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.vrs-swiper7', {
        loop: true,
        pagination: {
          el: '.vrs-page-slide7',
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

<style lang='scss'>
.vrs-swiper7 {
  // height: calc(100vh - 0px);  //减去header的高度
  .vrs-slide-item {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
    }
  }
  .vrs-page-slide7 {
    bottom: 20px;
    .swiper-pagination-bullet {
      @include wh(20px);
      background: #8e909a;
      opacity: 1;
      margin: 0 5px;
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
</style>
