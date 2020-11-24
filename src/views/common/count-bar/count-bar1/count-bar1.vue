<!-- 统计 -->
<template>
  <div class="container flex-v" id="vrs-countup">
    <div class="vrs-item flex-item" v-for="(item,index) in list" :key="index">
      <img :src="item.img">
      <div class="vrs-border">
        <p class="vrs-value">
          <count-up
            class="vrs-num"
            :startnum="0"
            :endnum="item.num"
            :duration="0"
            separator=","
            suffix
            :start="item.start"
          ></count-up>
          <span>{{item.unit}}</span>
        </p>
        <p class="vrs-title">{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import countUp from '@/components/countUp.vue'
export default {
  data() {
    return {
      list: [
        { num: 100, unit: '+', title: '行业经验', img: require('./img/ab-0.png') },
        { num: 4000, unit: '+', title: '行业经验', img: require('./img/ab-2.png') },
        { num: 50, unit: '+', title: '行业经验', img: require('./img/ab-1.png') },
      ],
    }
  },
  components: {
    countUp
  },
  methods: {
    scrollHandler() {
      let scrollH = document.documentElement.scrollTop || document.body.scrollTop  // 滚动条高度
      let visibleH = window.innerHeight // 网页可见区域高
      let countupDom = document.getElementById('vrs-countup')
      let setTop = 0
      if (countupDom) countupDom.offsetTop // 元素到顶部的距离
      let distance = setTop - visibleH
      if (scrollH > distance) {
        this.list = this.list.map(item => {
          item.start = true
          return item
        })
      }
    }
  },
  // 过滤器
  filters: {
    turnType(value) {
      if (value) {
        if (typeof value == Number) {
          return value
        } else {
          return parseInt(value)
        }
      } else {
        return 0
      }
    }
  },
  created() {
    this.list.forEach(item => {
      item.start = false
    })
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler())
  },
  destroyed() {
    // 清除滚动事件
    window.removeEventListener('scroll', this.scrollHandler())
  }
}
</script>

<style lang="scss" scoped>
.vrs-item {
  text-align: center;
  &:first-child .vrs-border {
    border-left: 0px solid #e6e6e6;
  }
  .vrs-border {
    border-left: 1px solid #e6e6e6;
  }

  img {
    @include wh(50px, 50px);
    object-fit: contain;
    margin: 0 auto 10px;
  }
  .vrs-title {
    text-align: center;
    font-size: 28px;
  }
  .vrs-value {
    margin: 15px 0;
    i {
      font-style: normal;
      margin-right: 10px;
    }
    .vrs-num {
      font-size: 28px;
    }
    span {
      margin-left: 5px;
      font-size: 28px;
    }
  }
}
</style>
