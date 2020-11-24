<!-- 资讯动态 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>资讯动态1</span>
      </div>
      <!-- 组件 -->
      <vrs-news1></vrs-news1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：新闻展示，hover状态，跳转至新闻页</dt>
        <dd>组件位置：@/views/common/news/vrs-news1/vrs-news1.vue</dd>
      </dl>
    </el-card>

  </div>
</template>

<script>
import vrsNews1 from './vrs-news1/vrs-news1'
export default {
  name: 'vrs-news',
  components: {vrsNews1}
}
</script>