<!--
  name: 发展历程1
  author: LXL
  desc: 居中 item：odd可自定义对齐方式
-->
<template>
  <div class="vrs-course1">
    <div class="vrs-radius flex flex-l vrs-before">
      <span class="vrs-radius-span"></span>
      <em></em>
    </div>
    <div class="vrs-item flex" v-for="(item,index) in develop" :key="index">
      <div class="vrs-item-inner flex column flex-item">
        <div class="vrs-time">{{item.title}}</div>
        <div class="vrs-content">{{item.description}}</div>
      </div>
      <div class="vrs-radius flex-l">
        <span class="vrs-radius-span">
          <div></div>
        </span>
        <em></em>
      </div>
      <div class="flex-item"></div>
    </div>

    <div class="vrs-radius flex flex-l">
      <span class="vrs-radius-span">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      develop: []
    }
  },
  computed: {},
  async created () {
    this.develop = [
      { title: '2019.05', description: '中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。' },
      { title: '2019.05', description: '中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。' },
      { title: '2019.05', description: '中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。' },
      { title: '2019.05', description: '中共十一届三中全会举行。邓小平在全会前召开的中央工作会议闭幕会上作《解放思想，实事求是，团结一致向前看》的总结讲话，这篇讲话实际上是全会的主题报告。' }
    ]
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-course1 {
  .vrs-item:nth-of-type(odd) {
    flex-direction: row-reverse;
    .vrs-item-inner {
      align-items: flex-start;
    }
    .vrs-content {
      text-align: left;
    }
  }
  .vrs-item-inner {
    align-items: flex-end;
    .vrs-time {
      font-size: 20px;
      font-weight: bold;
      color: #2a344e;
      margin: -3px 0 16px;
    }
    .vrs-content {
      width: 280px;
      min-height: 130px;
      color: #39464f;
      font-size: 12px;
      line-height: 20px;
      text-align: right;
    }
  }
  .vrs-radius {
    position: relative;
    margin: 0 38px;
    .vrs-radius-span {
      @include wh(12px);
      display: block;
      border-radius: 100%;
      background: #ffffff;
      border: 1px solid #2a344e;
      padding: 2px;
      div {
        height: 100%;
        border-radius: 100%;
        background: #2a344e;
      }
    }
    em {
      display: block;
      width: 1px;
      height: 100%;
      background: #c6c6c6;
      position: absolute;
      top: 18px;
    }
  }
  .vrs-before {
    height: 140px;
  }
}
</style>