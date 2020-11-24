<!--
  name: 竖型轮播
  author: YDF
  desc: 整体宽度1200px，两端对齐方式，自动轮播
-->
<template>
  <div class="vrs-swiper5 container">
    <div class="swiper-container vrs-swiper5-box vrs-marquee-swiper">
      <div class="swiper-wrapper vrs-marquee-list">
        <div
          class="swiper-slide vrs-marquee-single flex between"
          v-for="(item, index) in messageList"
          :key="index"
        >
          <span>{{item.phone}}</span>
          <span>{{item.create_time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      messageList: {}
    }
  },
  computed: {},
  created() {
    // 模拟数据请求
    setTimeout(() => {
      this.messageList = [
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },

        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        }
      ]
      this.$nextTick(() => {
        this.initproperty()
      })
    }, 500)
  },
  methods: {
    initproperty() {
      this.swiperproperty = new Swiper('.vrs-marquee-swiper', {
        direction: 'vertical',
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 500,
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-swiper5 {
  height: 260px;
  border-bottom: 1px solid rgba($color: #5d5d5d, $alpha: 0.75);
  padding-bottom: 20px;
  .vrs-swiper5-box {
    height: 240px;
    .vrs-marquee-list {
      width: 100%;
      height: 40px;
      .vrs-marquee-single {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #333333;
      }
    }
  }
}
</style>