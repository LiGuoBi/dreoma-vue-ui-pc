<!--
  name: 图文展示1
  author: LXL
  desc: 其中vrs-title引用了通用标题vrs-title3，from @/views/common/title/vrs-title3/vrs-title3.vue
-->
<template>
  <div class="vrs-media-show1 container flex between">
    <div class="vrs-cont flex column between">
      <div>
        <vrs-title en="CORE CURRICULUM" zh="核心课程"></vrs-title>
        <div class="vrs-html multiline-txt" v-html="vHtml"></div>
      </div>
      <router-link class="vrs-more" to>
        <img src="./img/learnmore.png" />
      </router-link>
    </div>
    <img class="vrs-right-img" src="./img/img.png" alt />
  </div>
</template>

<script>
import vrsTitle from '@/views/common/title/vrs-title3/vrs-title3.vue'
export default {
  name: 'vrs-media-show1',
  components: { vrsTitle },
  data() {
    return {
      vHtml: ''
    }
  },
  created() {
    this.vHtml =
      '<p>【 翰森贝迪幼儿园核心课程 】</p><p>【 翰森贝迪幼儿园核心课程 】</p><p>【 翰森贝迪幼儿园核心课程 】</p><br><div>各个核心课程按照年龄划分为2-6岁课程、6-12岁课程、4-14岁课程，有针对性教学，根据学生的年龄特点进行教学，激发学生的学习兴趣。</div>'
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-media-show1 {
  // margin: 84px 0 0;
  .vrs-cont {
    max-width: 506px;
    .vrs-html {
      height: 144px;
      -webkit-line-clamp: 6;
      text-align: justify;
      font-size: 14px;
      line-height: 24px;
      margin-top: 30px;
    }
    .vrs-more {
      img {
        cursor: pointer;
        @include wh(220px, 50px);
      }
    }
  }
  .vrs-right-img {
    max-width: 612px;
    max-height: 434px;
  }
}
</style>