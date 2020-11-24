<!--
  name: 弹出层1
  author: YDF
  desc: 图集轮播弹窗,整体宽度1200px
-->
<template>
  <div class="vrs-popup2 container">
    <div class="vrs-pop2 flex-wrap">
      <div
        class="vrs-album-single"
        v-for="(item,index) in housePhoto"
        :key="index"
        @click="videoPlay(index)"
      >
        <div class="vrs-pic">
          <img class="pich" :src="item.covers[0]">
        </div>
        <div class="vrs-amount flex l-end">
          <img class="vrs-mark" src="./img/icon-11.png">
          <p>{{item.covers.length}}</p>
        </div>
        <div class="vrs-title">{{item.title}}</div>
      </div>
    </div>
    <transition name="fade">
      <div v-show="imageShow">
        <div class="vrs-preview">
        </div>
        <div class="vrs-pre-contect">
          <div class="vrs-inner-img">
              <img class="pich" :src="photoList[listIndex]">
            </div>
            <div class="vrs-imglist flex-v">
              <div class="vrs-popup2-swiper flex-item swiper-container">
                <div class="swiper-wrapper">
                  <div
                    v-for="(item, index) in photoList"
                    :key="index"
                    :class="['slide', 'swiper-slide']"
                  >
                    <img class="pich" :src="item" @click="listIndex = index">
                  </div>
                </div>
              </div>
              <div class="button vrs-popup2-prev">
                <img class="pich" src="./img/prev.png">
              </div>
              <div class="button vrs-popup2-next">
                <img class="pich" src="./img/next.png">
              </div>
            </div>
            <div class="vrs-button-back" @click="imageShow = !imageShow">
              <img class="pich" src="./img/back.png">
            </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      imageShow: false,
      listIndex: 0,
      cover: '',
      photoList: [],
      housePhoto: [
        {
          id: 0,
          covers:
            [
              require('./img/picture-1.jpg'),
              require('./img/picture-3.jpg'),
              require('./img/picture-4.jpg'),
              require('./img/picture-2.jpg'),
              require('./img/picture-2.jpg'),
              require('./img/picture-2.jpg'),
            ],
          title: '若水'
        },
        {
          id: 1,
          covers:
            [
              require('./img/picture-4.jpg'),
              require('./img/picture-3.jpg'),
              require('./img/picture-2.jpg'),
              require('./img/picture-1.jpg'),
              require('./img/picture-2.jpg'),
              require('./img/picture-3.jpg'),
            ],
          title: '若水'
        }
      ],
      swiper: null
    }
  },
  methods: {
    videoPlay(id) {
      this.imageShow = true
      this.photoList = this.housePhoto[id].covers
      this.$nextTick(() => {
        // 是否 new Swiper 有就更新slide数量，没有就new
        if (this.swiper) {
          this.swiper.updateSlides()
        } else {
          this.initSwiper()
        }
      })
    },
    initSwiper() {
      // script 链接的方式引入，不用import引入
      this.swiper = new Swiper('.vrs-popup2-swiper', {
        navigation: {
          prevEl: '.vrs-popup2-prev',
          nextEl: '.vrs-popup2-next'
        },
        slidesPerView: 'auto',
        spaceBetween: 10
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-popup2 {
  .vrs-album-single {
    cursor: pointer;
    @include wh(268px, 258px);
    position: relative;
    margin: 0 42px 42px 0;
    &:nth-child(4n) {
      margin-right: 0px;
    }
    .vrs-pic {
      @include wh(100%);
    }
    .vrs-amount {
      padding-right: 10px;
      position: absolute;
      top: 0px;
      left: 0px;
      @include wh(100%, 20px);
      .vrs-mark {
        @include wh(10px);
        padding: 5px;
      }
      p {
        color: $white;
        font-size: $fs-sm;
        line-height: 20px;
      }
    }
    .vrs-title {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      position: absolute;
      top: 213px;
      left: 0;
      @include wh(100%, 45px);
      opacity: 0.6;
      background-color: #004dff;
      font-size: 22px;
      color: $white;
      text-align: center;
      line-height: 45px;
    }
  }
  .vrs-preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
  .vrs-pre-contect {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:1000;
    transform: translate(-50%, -50%);
    width: 600px;
    min-height: 800px;
  }
  .vrs-button-back {
    @include wh(38px);
    position: absolute;
    top: 0px;
    left: 610px;
  }
  .vrs-inner-img {
    @include wh(600px);
    margin-bottom: 20px;
  }
  .button {
    @include wh(30px);
  }
  .vrs-popup2-prev {
    position: absolute;
    top: 671px;
    left: -60px;
  }
  .vrs-popup2-next {
    position: absolute;
    top: 671px;
    left: 620px;
  }
  .vrs-imglist {
    height: 112px;

    .slide {
      @include wh(112px);
      &::after {
        content: "";
        position: absolute;
        @include wh(100%);
        // border: 2px solid $blue;
        z-index: 2;
        top: 0;
        left: 0;
        box-sizing: border-box;
        display: none;
      }
      &.active {
        &::after {
          display: block;
        }
      }
    }
  }
}
</style>