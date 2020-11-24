<!--
  name: 图文展示3
  author: LXL
  desc: 图文展示3
-->
<template>
  <div class="vrs-media-show3 flex-v container">
    <img class="vrs-media-img" src="./img/img.png" />
    <div class="vrs-content flex-item">
      <P class="vrs-txt">GROUP PROFILE</P>
      <P class="vrs-txt">集团概况</P>
      <P class="vrs-txt multiline-txt" v-html="vhtml"></P>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrs-media-show3',
  components: {},
  data() {
    return {
      vhtml: ''
    }
  },
  created() {
    this.vhtml =
      '<div>翰森贝迪教育集团有着资深的国际教育资源背景，在“SSE 幼儿自我服务教育+同步学习 “的运用下，以自信、希望、爱为核心价值准则，致力于打造国际一流的教育机构，主要 业务包括:高端幼儿园服务、专业课程辅导培训、特色教学兴趣培训、学前教育产品研</div>'
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-media-show3 {
  .vrs-media-img {
    @include wh(612px, 434px);
    object-fit: cover;
  }
  .vrs-content {
    height: 380px;
    background: #ffffff;
    border: 1px solid #c6c6c6;
    border-left: none;
    color: #222222;
    padding: 27px;
    .vrs-txt:nth-of-type(1) {
      font-family: Impact;
      font-size: 50px;
    }
    .vrs-txt:nth-of-type(2) {
      font-size: 40px;
      margin: 6px 0 36px;
    }
    .vrs-txt:nth-of-type(3) {
      font-size: 14px;
      line-height: 26px;
      height: 156px;
      -webkit-line-clamp: 6;
    }
  }
}
</style>