<!-- 文章列表类 -->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>文章列表1</span>
    </div>
    <!-- 组件 -->
    <vrs-article-list1></vrs-article-list1>
    <!-- 说明 -->
    <dl class="tip-box">
      <dt>TIP：宽度1200px,居中</dt>
      <dd>组件位置：@/views/article/article-list/vrs-article-list1/vrs-article-list1.vue</dd>
    </dl>
  </el-card>
</template>

<script>
import vrsArticleList1 from './vrs-article-list1/vrs-article-list1'
export default {
  name: 'articleList',
  components: {
    vrsArticleList1
  }
}
</script>