<!-- 分页插件 -->
<template>
  <div class="pagination" v-show="show">
    <a class="btn" href="javascript:;" @click="goPage(page - 1)">上一页</a>
    <!-- 首页 -->
    <a href="javascript:;" :class="['btn', page == 1 ? 'active' : '']" @click="goPage(1)">1</a>
    <span class="dot" v-if="showPrevMore">...</span>
    <!-- 循环分页 -->
    <a
      href="javascript:;"
      v-for="num in pageArr"
      :key="num"
      :class="['btn', page == num ? 'active' : '']"
      @click="goPage(num)"
    >{{num}}</a>
    <!-- 循环分页 end -->
    <span class="dot" v-if="showNextMore">...</span>
    <!-- 尾页 -->
    <a href="javascript:;" :class="['btn', page == totalPage ? 'active' : '']" @click="goPage(totalPage)">{{totalPage}}</a>
    <a class="btn" href="javascript:;" @click="goPage(page + 1)">下一页</a>
    
    <!-- 跳转页 -->
    <template v-if="toPageShow">
      <span class="to-txt">跳转页：</span>
      <input class="in-page" type="number" v-model="toPage">
      <a class="btn go-btn" href="javascript:;" @click="goPage(toPage)">go</a>
    </template>
    <!-- 跳转页 end -->
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    // 数据总条数
    total: {
      type: Number,
      required: true
    },
    // 每页显示条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 当前页码
    currentPage: {
      type: Number,
      default: 1
    },
    // 分页条数-大于等于 5 且小于等于 21 的奇数
    pagerCount: {
      type: Number,
      default: 7
    },
    // 是否显示跳转页面
    toPageShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      page: this.currentPage, // 当前页
      showPrevMore: false,
      showNextMore: false,
      toPage: ''
    }
  },
  //监听当前页面page
  // watch: {
  //   currentPage (newPage, old) {
  //     this.page = newPage
  //   }
  // },
  computed: {
    totalPage() {
      // 总页数
      return Math.ceil(this.total / this.pageSize)
    },
    // 是否显示分页
    show() {
      return this.totalPage > 1
    },
    // 获取分页数
    pageArr() {
      // 分页条数
      const pagerCount = this.pagerCount
      // 分页条数-半
      const halfPagerCount = (pagerCount - 1) / 2
      // 当前页
      const currentPage = Number(this.page)
      // 总页数
      const pageCount = Number(this.totalPage)
      let showPrevMore = false
      let showNextMore = false
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore = true
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore = true
        }
      }
      const array = []
      if (showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2)
        for (let i = startPage; i < pageCount; i++) {
          array.push(i)
        }
      } else if (!showPrevMore && showNextMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (showPrevMore && showNextMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i)
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i)
        }
      }
      this.showMore(showPrevMore, showNextMore)
      return array
    }
  },
  methods: {
    goPage(page) {
      if (this.page != page && page > 0 && page < this.totalPage + 1) {
        this.page = Number(page)
        this.$emit('pagechange', this.page)
      }
    },
    // 因为 ESLint 设置了 vue/no-side-effects-in-computed-properties (禁止在计算属性中对属性修改)
    // 所以创建 showMore 函数在计算属性中调用，把值传入 showMore 函数在 showMore 函数体中赋值
    showMore(showPrevMore, showNextMore) {
      this.showPrevMore = showPrevMore
      this.showNextMore = showNextMore
    }
  }
}
</script>

<style lang='scss' scoped>
.pagination {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    border: 1px solid #202020;
    background-color: #fff;
    border-radius: 4px;
    line-height: 34px;
    padding: 0 13px;
    margin: 0 10px;
    // 选中样式
    &.active,
    &:hover {
      color: #fff;
      border: 1px solid #00a0e8;
      background-color: #00a0e8;
    }
  }
  .dot {
    margin: 0 5px;
    font-size: 20px;
  }
  .to-txt {
    margin-left: 10px;
    color: #cecece;
  }
  .in-page {
    box-sizing: border-box;
    width: 50px;
    height: 36px;
    border: 1px solid #202020;
    background-color: #fff;
    border-radius: 4px;
    text-align: center;
    // input number类型的标签不产生上下加减的按钮
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
    }
  }
  .go-btn {
    padding: 0;
    width: 36px;
    text-align: center;
  }
}
.news-page {
  padding: 0 0 100px;
}
</style>