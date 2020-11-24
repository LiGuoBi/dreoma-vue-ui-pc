<!--
  name: 文章详情样式1
  author: LXL
  desc: 左侧文章列表，右侧文章详情，可以用于Tab切换
-->
<template>
  <div class="vrs-article-detail1 container flex between">
    <div class="vrs-left">
      <div class="vrs-recommend flex-v">
        <div class="vrs-mark"></div>
        <div class="vrs-dec">翰森贝迪核心课程</div>
      </div>
      <div class="vrs-goods-list">
        <router-link to="/" class="vrs-goods-item" v-for="(item,index) in leftList" :key="index">
          <img class="pich" :src="item.cover" />
          <div class="vrs-goods-title flex-c tc">{{item.title}}</div>
        </router-link>
      </div>
    </div>
    <div class="vrs-right flex-item">
      <div class="vrs-tab-list flex">
        <div
          :class="['vrs-tab-item','flex-c',itemIndex == index ? 'active' : '']"
          v-for="(item,index) in items"
          @click="itemIndex=index"
          :key="index"
        >{{ item.title }}</div>
      </div>
      <div class="vrs-content">
        <img class="vrs-content-img" :src="items[itemIndex].cover" />
        <div v-html="items[itemIndex] ? items[itemIndex].content : ''"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-article-detail1',
  components: {},
  data() {
    return {
      itemIndex: 0,
      leftList: [],
      items: []
    }
  },
  created() {
    // 模拟数据请求
    setTimeout(() => {
      this.leftList = [
        {
          cover: require('./img/img.png'),
          title: 'SSE 幼儿生活服务课程 +6 维教学体系'
        },
        {
          cover: require('./img/img.png'),
          title: '3+2+2 模式'
        }
      ]
      this.items = [
        {
          title: '第一课程',
          content: '第一课程第一课程第一课程第一课程第一课程第一课程',
          cover: require('./img/img.png')
        },
        {
          title: '第二课程',
          content: '第二课程第二课程第二课程第二课程第二课程第二课程第二课程第二课程',
          cover: require('./img/img.png')
        },
        {
          title: '第三课程',
          content: '第三课程第三课程第三课程第三课程第三课程第三课程第三课程第三课程第三课程',
          cover: require('./img/img.png')
        }
      ]
    }, 500)
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-article-detail1 {
  // margin-top: 52px;
  .vrs-left {
    margin-right: 60px;
    width: 220px;
    .vrs-recommend {
      height: 37px;
      margin-bottom: 20px;
      color: #fff;
      font-size: 20px;
      padding: 0px 8px;
      background: rgba(64, 188, 114, 1);
      .vrs-mark {
        @include wh(4px, 22px);
        background: #ffffff;
        margin-right: 12px;
      }
    }
    .vrs-goods-list {
      .vrs-goods-item {
        position: relative;
        margin-bottom: 20px;
        height: 140px;
        .pich {
          object-fit: cover;
        }
        .vrs-goods-title {
          position: absolute;
          bottom: 0px;
          @include wh(100%, auto);
          max-height: 140px;
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          font-size: 16px;
          line-height: 22px;
          padding: 5px 27px;
          transition: all 0.2s;
        }
        &:hover .vrs-goods-title {
          background: rgba(64, 188, 114, 0.8);
        }
      }
    }
  }
  .vrs-right {
    // padding-bottom: 154px;
    .vrs-tab-list {
      font-size: 16px;
      color: #40bc72;
      margin-bottom: 20px;
      .vrs-tab-item {
        border: 1px solid #40bc72;
        @include wh(220px, 37px);
        cursor: pointer;
        &.active,
        &:hover {
          color: #fff;
          border: 1px solid rgba(64, 188, 114, 0.7);
          background: rgba(64, 188, 114, 0.7);
        }
      }
    }
    .vrs-content {
      .vrs-content-img {
        height: 470px;
        margin-bottom: 39px;
        object-fit: cover;
      }
      .vrs-content-inner {
        font-size: 14px;
        color: #333333;
        line-height: 26px;
      }
    }
  }
}
</style>