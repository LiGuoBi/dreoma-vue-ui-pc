<!-- 加入我们类 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>加入我们样式1</span>
      </div>
      <!-- 组件 -->
      <vrs-join1></vrs-join1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：宽度1200px, 居中 ，折叠面板模拟了数据</dt>
        <dd>组件位置：@/views/about/join/vrs-join1/vrs-join1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>加入我们样式2</span>
    </div>
    <!-- 组件 -->
    <vrs-join2></vrs-join2>
    <!-- 说明 -->
    <dl class="tip-box">
      <dt>TIP：宽度1200px, 居中 ，tab切换方式</dt>
      <dd>组件位置：@/views/about/join/vrs-join2/vrs-join2.vue</dd>
    </dl>
  </el-card>
  </div>
</template>

<script>
import vrsJoin1 from './vrs-join1/vrs-join1'
import vrsJoin2 from './vrs-join2/vrs-join2'
export default {
  name: 'join',
  components: {
    vrsJoin1,
    vrsJoin2
  }
}
</script>
