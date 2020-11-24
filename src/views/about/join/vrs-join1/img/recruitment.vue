<!-- 加入我们 -->
<template>
  <div class="join-us container">
    <!-- 折叠面板 -->
    <div class="fold-item" v-for="(fold, index) in folds" :key="index">
      <div
        :class="['fold-title', 'flex-v', fold.foldH == 0 ? '' : 'active']"
        @click="foldHandle(index)"
      >
        <div class="flex-item">职位：{{fold.name}}</div>
        <div class="arrow bg"></div>
      </div>
      <div
        class="fold-wrapper"
        :style="{height: fold.foldH == 'auto' ? 'auto' : fold.foldH + 'px'}"
      >
        <div class="fold-content" ref="foldContent">
          <!-- 招聘信息 -->
          <div class="office-item">
            <div class="office-title flex-v">
              <img class="icon" src="@/assets/img/icon-11.png">
              <div>岗位职责：</div>
            </div>
            <div class="office-info" v-html="fold.responsibility"></div>
          </div>
          <div class="office-item">
            <div class="office-title flex-v">
              <img class="icon" src="@/assets/img/icon-12.png">
              <div>任职资格：</div>
            </div>
            <div class="office-info" v-html="fold.membership"></div>
          </div>
          <div class="office-item">
            <div class="office-title flex-v">
              <img class="icon" src="@/assets/img/icon-13.png">
              <div>薪资待遇：</div>
            </div>
            <div class="office-info" v-html="fold.remuneration"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api_recruitment } from "@/api/index";
export default {
  name: "join",
  components: {},
  data() {
    return {
      info: {},
      folds: []
    };
  },

  methods: {
    foldHandle(index) {
      let H = this.$refs.foldContent[index].offsetHeight;
      if (this.folds[index].foldH == "auto") {
        // 防止高度为auto时，height没有过渡动画。(height:auto无法计算速度，所以会表现为无动画)
        this.folds[index].foldH = H;
        this.$nextTick(() => {
          setTimeout(() => {
            this.folds[index].foldH = 0;
          }, 10);
        });
      } else {
        if (this.folds[index].foldH > 0) {
          this.folds[index].foldH = 0;
        } else {
          this.folds[index].foldH = H;

        }
      }
    }
  },
  created() {
    api_recruitment().then(({ data }) => {
      data.forEach((item, index) => {
        if (index == 0) {
          // 为0代表关闭，大于0代表展开或者auto
          item.foldH = 'auto'
        } else {
          item.foldH = 0
        }
      })
      this.folds = data
    })
  }
}
</script>

<style lang='scss' scoped>
.contact-info {
  font-size: $fs-lg;
  line-height: 36px;
  padding-bottom: 30px;
}

.fold-item {
  background: #f0f0f0;
  margin-top: 2px;
  .arrow {
    @include wh(14px);
    background-image: url("/static/img/bg-7.png");
  }
  .fold-title {
    height: 60px;
    padding: 0 30px;
    transition: all 0.3s;
    &.active {
      background: rgba(51, 51, 51,0.45);
      color: #fff;
      .arrow {
        background-image: url("/static/img/bg-8.png");
      }
    }
  }
  .fold-wrapper {
    overflow: hidden;
    will-change: height;
    transition: height 0.3s ease-in-out;
  }
  .fold-content {
    padding: 0 40px 60px;
  }
}
.office-title {
  padding: 60px 0 20px;
  .icon {
    width: 24px;
    margin-right: 10px;
  }
}
.office-info {
  padding-left: 34px;
  line-height: 20px;
}
</style>