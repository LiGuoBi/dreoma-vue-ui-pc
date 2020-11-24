<!--
  name: 加入我们样式一
  author: YDF
  desc: 宽度1200px, 居中 ，tab切换方式
-->
<template>
  <div class="vrs-join2 container flex between">
    <div class="vrs-job-list">
      <div class="vrs-job-title flex">
        <div class="vrs-mark"></div>
        <div>招聘岗位</div>
      </div>
      <div class="vrs-job-content">
        <div
          :class="['vrs-job-item', itemIndex == index ? 'active' : '']"
          @click="itemIndex=index"
          v-for="(item,index) in jobList"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="vrs-job-claim">
      <div class="vrs-claim-titile">任职要求</div>
      <div class="vrs-duties">岗位职责：</div>
      <div class="vrs-rich-text" v-html="jobList[itemIndex] ? jobList[itemIndex].responsibility : ''"></div>
      <div class="vrs-duties">任职资格：</div>
      <div class="vrs-rich-text" v-html="jobList[itemIndex] ? jobList[itemIndex].membership : ''"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      itemIndex:0,
      jobList:[]
    }
  },
  computed: {},
  created () {
    // 模拟数据请求
    setTimeout(() => {
      this.jobList = [
        {
          id: '1',
          name: '客服专员',
          responsibility: '<p>1、负责客服电话咨询、回访、挂号业务开展，并进行信息录入、统计分析；</p>',
          membership: '<p>大专及以上学历，临床医学、市场营销、服务行业类或公共事务管理等相关专业；</p>'
        },
        {
          id: '2',
          name: '网络客服',
          responsibility: '<p>大专及以上学历，临床医学、市场营销、服务行业类或公共事务管理等相关专业；</p>',
          membership: '<p>1、负责客服电话咨询、回访、挂号业务开展，并进行信息录入、统计分析；</p>'
        },
      ]
    }, 500)
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-join2 {
  .vrs-job-list {
    width: 220px;
    .vrs-job-title {
      color: #fff;
      font-size: 20px;
      padding: 10px;
      background: #2a344e;
      .vrs-mark {
        @include wh(4px, 22px);
        background: #50b9ce;
        margin-right: 15px;
      }
    }
    .vrs-job-content {
      margin-top: 20px;
      .vrs-job-item {
        cursor: pointer;
        @include wh(220px, 40px);
        font-size: 16px;
        color: #888888;
        text-align: center;
        line-height: 38px;
        margin-bottom: 10px;
        border: 1px solid #c6c6c6;
        + .vrs-job-item {
          margin-bottom: 10px;
        }
        &:hover ,
        &.active {
          background: #50b9ce;
          border: 1px solid #50b9ce;
          color: #fff;
        }
      }
    }
  }
  .vrs-job-claim {
    width: 905px;
    border: 1px solid #c6c6c6;
    padding: 40px;
    .vrs-claim-titile {
      font-size: 20px;
    }
    .vrs-duties {
      padding: 25px 0;
      font-size: 14px;
    }
    .vrs-rich-text {
      font-size: 14px;
      line-height: 28px;
      margin-bottom: 25px;
    }
  }
}
</style>