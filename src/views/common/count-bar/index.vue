<!-- 统计类 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>统计样式一</span>
      </div>
      <!-- 组件 -->
      <count-bar1></count-bar1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：</dt>
        <dd>运行依赖：需要安装conutup</dd>
        <dd>引用：需要引入countUp组件</dd>
        <dd>组件位置：@/views/common/count-bar/count-bar1/count-bar1.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import countBar1 from './count-bar1/count-bar1'
export default {
  name: 'countBar',
  components: {
    countBar1
  }
}
</script>