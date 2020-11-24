<!-- 首页 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分页</span>
      </div>
      <!-- 组件 -->
      <pagination :total="100"></pagination>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：分页组件</dt>
        <dd>组件位置：@/components/pagination</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
export default {
  name: 'home',
  components: {
    pagination
  }
}
</script>