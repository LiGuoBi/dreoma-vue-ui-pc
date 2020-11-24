<!--
  name: 首页轮播图3
  author: YDF
  desc: 带标题的Swpier,主体部分1200px,前后箭头相对定位
-->
<template>
  <div class="vrs-swiper3 container">
    <div class="vrs-swiper3-box">
      <div class="vrs-swiper3 swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in newList" :key="index" class="swiper-slide">
            <router-link to="/aboutUs/news/Detail/1" class="vrs-img-box">
              <img class="pich" :src="item.cover">
            </router-link>
            <div class="vrs-img-title">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="vrs-swiper3-btn vrs-prev3">
        <img src="./img/prev.png">
      </div>
      <div class="vrs-swiper3-btn vrs-next3">
        <img src="./img/next.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      swipernews: {},
      newList: []
    }
  },
  computed: {},
  async created () {
    setTimeout(() => {
      this.newList = [
        { title: '标题', cover: require('./img/profile-1.png') },
        { title: '标题', cover: require('./img/profile-2.png') },
        { title: '标题', cover: require('./img/profile-3.png') },
        { title: '标题', cover: require('./img/profile-2.png') },
        { title: '标题', cover: require('./img/profile-1.png') }
      ]
      this.$nextTick(() => {
        this.initnews()
      })
    }, 500)
  },
  methods: {
    initnews () {
      this.swipernews = new Swiper('.vrs-swiper3', {
        navigation: {
          prevEl: '.vrs-prev3',
          nextEl: '.vrs-next3'
        },
        slidesPerView: 'auto',
        spaceBetween: 30
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper3 {
  .title {
    font-size: 30px;
    color: #333333;
    text-align: center;
    line-height: 48px;
  }
  .line {
    @include wh(45px, 4px);
    background: #ff9f00;
    margin: 10px auto 30px;
  }
}
.vrs-swiper3-box {
  margin-top: 60px;
  height: 300px;
  position: relative;
  .vrs-prev3 {
    position: absolute;
    top: 131px;
    left: -123px;
  }
  .vrs-next3 {
    position: absolute;
    top: 131px;
    right: -123px;
  }
  .vrs-swiper3-btn {
    outline: none;
    @include wh(38px);
  }
  .vrs-swiper3 {
    height: 300px;
    .swiper-slide {
      @include wh(380px, 100%);
      .vrs-img-box {
        @include wh(100%);
        position: relative;
        border-radius: 5px;
        overflow: hidden;
      }
      .vrs-img-title {
        @include wh(100%, 50px);
        position: absolute;
        bottom: 0px;
        left: 0px;
        color: #fff;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 0 0 5px 5px;
        line-height: 50px;
        padding: 0 20px;
      }
    }
  }
}
</style>