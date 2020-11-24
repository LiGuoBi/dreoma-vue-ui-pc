<!--
  name: tab切换二
  author: YDF
  desc: 左边标题，右边详情，根据标题切换详情，宽度1200px,居中
-->
<template>
  <div class="vrs-tab2 container flex">
    <div class="vrs-tab2-info">
      <div class="vrs-tab2-tab flex-wrap">
        <div
          v-for="(item, index) in tabList"
          :key="index"
          :class="['vrs-tab2-btn', tabIndex == index ? 'active': '']"
          @click="tabIndex = index"
        >{{item.title}}</div>
      </div>
    </div>
    <div class="vrs-tab2-pic">
      <img class="pich" :src="tabList[tabIndex].preview">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      tabIndex: 0,
      id: '',
      tabList: [
        { title: '网站建设', preview: require('./img/tab2-1.png') },
        { title: 'APP开发', preview: require('./img/tab2-2.png') },
        { title: '小程序开发', preview: require('./img/tab2-3.png') },
        { title: '管理系统', preview: require('./img/tab2-2.png') },
        { title: '公众号开发', preview: require('./img/tab2-4.png') },
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-tab2 {
  .vrs-tab2-info {
    @include wh(780px, 460px);
    border: 1px solid #f9f9f9;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    .vrs-tab2-btn {
      text-align: center;
      cursor: pointer;
      width: 143px;
      border-radius: 5px;
      height: 72px;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0);
    }

    .vrs-tab2-btn.active {
      border: 1px solid #f9f9f9;
      box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
      border-radius: 5px;
    }
    .vrs-tab2-tab {
      margin: 30px 88px 30px 30px;
      overflow: hidden;
      .tab2-img {
        object-fit: contain;
      }
      .vrs-tab2-btn {
        height: 72px;
        line-height: 72px;
        margin: 0 20px 30px 0;

        + .vrs-tab2-btn {
          margin: 0 20px 30px 0;
          &:nth-child(4n) {
            margin-right: 0px;
          }
        }

        &:hover {
          border: 1px solid #f9f9f9;
          box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
          border-radius: 5px;
        }

        &.active::after {
          content: "";
        }
      }
    }
  }
  .vrs-tab2-pic {
    border: 1px solid #f9f9f9;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    @include wh(520px, 346px);
    margin-left: -58px;
    margin-top: 58px;
  }
}
</style>