<!-- 文章详情类 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>文章详情样式1</span>
      </div>
      <!-- 组件 -->
      <vrs-article-detail1></vrs-article-detail1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：左侧文章列表，右侧文章详情，可以用于Tab切换</dt>
        <dd>组件位置：@/views/article/article-detail/vrs-article-detail1/vrs-article-detail1.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import vrsArticleDetail1 from './vrs-article-detail1/vrs-article-detail1'
export default {
  name: 'articleDetail',
  components: {
    vrsArticleDetail1
  }
}
</script>