<!--
  name: 轮播4
  author: YDF
  desc: 宽度1200居中，箭头相对定位
-->
<template>
    <div class="vrs-swiper4 container">
      <div class="vrs-contan">
        <div class="swiper-container vrs-case-swiper4">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in houseRoom" :key="index">
              <div class="vrs-avatar">
                <img class="pich" :src="item.cover">
              </div>
              <div class="vrs-title">{{item.title}}</div>
            </div>
          </div>
        </div>
        <div class="vrs-swiper4-btn vrs-next4">
          <img src="./img/group2.png">
        </div>
        <div class="vrs-swiper4-btn vrs-prev4">
          <img src="./img/group1.png">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
      swiper: {},
      houseRoom: [
        { cover: require('./img/picture-1.jpg'), title:'若水' },
        { cover: require('./img/picture-2.jpg'), title:'若水' },
        { cover: require('./img/picture-3.jpg'), title:'若水' },
        { cover: require('./img/picture-4.jpg'), title:'若水' }
      ]
    }
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper('.vrs-case-swiper4', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: false,
        navigation: {
          nextEl: '.vrs-next4',
          prevEl: '.vrs-prev4',
        },
        on: {
          progress: function () {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              var slideProgress = this.slides[i].progress
              var modify = 1
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1
              }
              var translate = slideProgress * modify * 80 + 'px'
              var scale = 1 - Math.abs(slideProgress) / 6
              var zIndex = 999 - Math.abs(Math.round(10 * slideProgress))
              slide.transform('translateX(' + translate + ') scale(' + scale + ')')
              slide.css('zIndex', zIndex)
              slide.css('opacity', 1)
              if (Math.abs(slideProgress) > 3) {
                slide.css('opacity', 0)
              }
            }
          },
          setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              slide.transition(transition)
            }
          }
        }

      })
    }
  },
  created() {
      this.$nextTick(() => {
        this.initSwiper()
      })
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper4 {
  position: relative;
}
.vrs-case-swiper4 {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  .swiper-slide {
    @include wh(480px, 416px);
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.05);
    .vrs-avatar {
      @include wh(100%);
      position: relative;
      border-radius: 5px;
    }
    .vrs-title {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      position: absolute;
      top: 341px;
      left: 0;
      @include wh(480px, 75px);
      opacity: 0.6;
      background-color: #004DFF;
      font-size: 22px;
      color: $white;
      text-align: center;
      line-height: 75px;
    }
  }
}
.vrs-swiper4-btn {
  height: 40px;
  width: 40px;
  top: 200px;
  position: absolute;
  cursor: pointer;
  outline: none;
}
.vrs-next4 {
  right: -100px;
}
.vrs-prev4 {
  left: -100px;
}
</style>