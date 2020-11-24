<!--
  name: 图文展示1
  author: LXL
  desc: 其中vrs-title引用了通用标题vrs-title3，from @/views/common/title/vrs-title3/vrs-title3.vue
-->
<template>
  <div class="vrs-media-show2 flex">
    <div class="flex-item"></div>
    <div class="container flex">
      <img src="./img/img.png" />
      <div class="vrs-us flex-col flex-item">
        <vrs-title en="ABOUT US" zh="关于我们"></vrs-title>
        <div class="vrs-txt multiline-txt" v-html="vHtml"></div>
        <div class="vrs-btn">
          <router-link to="/about">
            <img src="./img/learnmore.png" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex-item us"></div>
  </div>
</template>

<script>
import vrsTitle from '@/views/common/title/vrs-title3/vrs-title3.vue'
export default {
  name: '',
  components: { vrsTitle },
  data() {
    return {
      vHtml: ''
    }
  },
  created() {
    this.vHtml =
      '<div>翰森贝迪教育集团有着资深的国际教育资源背景，在“SSE 幼儿自我服务教育+同步学习 “的运用下，以自信、希望、爱为核心价值准则，致力于打造国际一流的教育机构，主要 业务包括:高端幼儿园服务、专业课程辅导培训、特色教学兴趣培训、学前教育产品研发学前教育师资培训、海外亲子游等。</div>'
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-media-show2 {
  // margin: 87px 0 0;
  background: #f6f8f7;
  img {
    width: 900px;
    margin-left: -325px;
  }
  .vrs-us {
    position: relative;
    color: #222222;
    background: #eeeeee;
    height: 490px;
    padding: 73px 0 89px 87px;
    .vrs-txt {
      height: 144px;
      -webkit-line-clamp: 6;
      text-align: justify;
      font-size: 14px;
      line-height: 24px;
      margin-top: 44px;
    }
    .vrs-btn {
      position: absolute;
      left: 415px;
      bottom: -25px;
      img {
        cursor: pointer;
        @include wh(220px, 50px);
      }
    }
  }
}
</style>