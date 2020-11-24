<!--
  name: 加入我们样式一
  author: YDF
  desc: 宽度1200px, 居中 ，折叠面板模拟了数据
-->
<template>
  <div class="vrs-join1 container">
    <!-- 折叠面板 -->
    <div class="vrs-fold-item" v-for="(fold, index) in folds" :key="index">
      <div
        :class="['vrs-fold-title', 'flex-v', fold.foldH == 0 ? '' : 'active']"
        @click="foldHandle(index)"
      >
        <div class="flex-item">职位：{{fold.name}}</div>
        <div class="vrs-arrow bg"></div>
      </div>
      <div
        class="vrs-fold-wrapper"
        :style="{height: fold.foldH == 'auto' ? 'auto' : fold.foldH + 'px'}"
      >
        <div class="vrs-fold-content" ref="foldContent">
          <!-- 招聘信息 -->
          <div class="vrs-office-item">
            <div class="vrs-office-title flex-v">
              <img class="vrs-icon" src="./img/icon-11.png">
              <div>岗位职责：</div>
            </div>
            <div class="vrs-office-info" v-html="fold.responsibility"></div>
          </div>
          <div class="vrs-office-item">
            <div class="vrs-office-title flex-v">
              <img class="vrs-icon" src="./img/icon-12.png">
              <div>任职资格：</div>
            </div>
            <div class="vrs-office-info" v-html="fold.membership"></div>
          </div>
          <div class="vrs-office-item">
            <div class="vrs-office-title flex-v">
              <img class="vrs-icon" src="./img/icon-13.png">
              <div>薪资待遇：</div>
            </div>
            <div class="vrs-office-info" v-html="fold.remuneration"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'join',
  components: {},
  data() {
    return {
      folds: []
    }
  },
  created() {
    // 模拟数据请求
    setTimeout(() => {
      this.folds = [
        {
          foldH: 'auto',
          id: '1',
          name: '客服专员1',
          responsibility: '<p>1、负责客服电话咨询、回访、挂号业务开展，并进行信息录入、统计分析；</p>',
          membership: '<p>大专及以上学历，临床医学、市场营销、服务行业类或公共事务管理等相关专业；</p>',
          remuneration: '<p>2200＋提成，购买五险，提供食宿。茶学、茶艺、茶叶加工等相关专业优先，有茶艺师资格证优先。</p>'
        },
        {
          foldH: 'auto',
          id: '2',
          name: '客服专员2',
          responsibility: '<p>1、负责客服电话咨询、回访、挂号业务开展，并进行信息录入、统计分析；</p>',
          membership: '<p>大专及以上学历，临床医学、市场营销、服务行业类或公共事务管理等相关专业；</p>',
          remuneration: '<p>2200＋提成，购买五险，提供食宿。茶学、茶艺、茶叶加工等相关专业优先，有茶艺师资格证优先。</p>'
        }
      ]
      this.folds.forEach((item, index) => {
        if (index == 0) {
          // 为0代表关闭，大于0代表展开或者auto
          item.foldH = 'auto'
        } else {
          item.foldH = 0
        }
      })
    }, 500)
  },
  methods: {
    foldHandle(index) {
      let H = this.$refs.foldContent[index].offsetHeight
      if (this.folds[index].foldH == 'auto') {
        // 防止高度为auto时，height没有过渡动画。(height:auto无法计算速度，所以会表现为无动画)
        // console.log(H);
        this.folds[index].foldH = H
        this.lh = H
        this.$nextTick(() => {
          setTimeout(() => {
            this.folds[index].foldH = 0
          }, 10)
        })
      } else {
        if (this.folds[index].foldH > 0) {
          this.folds[index].foldH = 0
        } else {
          this.folds[index].foldH = H
        }
      }
    }
  },
}
</script>

<style lang='scss' scoped>
.vrs-join1 {
  .vrs-fold-item {
    background: #f0f0f0;
    margin-top: 2px;
    .vrs-arrow {
      @include wh(14px);
      background-image: url("./img/bg-7.png");
    }
    .vrs-fold-title {
      height: 60px;
      padding: 0 30px;
      transition: all 0.3s;
      &.active {
        background: rgba(51, 51, 51, 0.45);
        color: #fff;
        .vrs-arrow {
          background-image: url("./img/bg-8.png");
        }
      }
    }
    .vrs-fold-wrapper {
      overflow: hidden;
      will-change: height;
      transition: height 0.3s ease-in-out;
    }
    .vrs-fold-content {
      padding: 0 40px 60px;
    }
  }
  .vrs-office-title {
    padding: 60px 0 20px;
    .vrs-icon {
      width: 24px;
      margin-right: 10px;
    }
  }
  .vrs-office-info {
    padding-left: 34px;
    line-height: 30px;
  }
}
</style>