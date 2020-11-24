<!-- 导航类 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>导航栏1</span>
      </div>
      <!-- 组件 -->
      <vrs-header1></vrs-header1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：中间navBar1200宽度，两边撑满剩余空间</dt>
        <dd>组件位置：@/views/common/nav/vrs-header1/vrs-header1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>导航栏2</span>
      </div>
      <!-- 组件 -->
      <vrs-header2></vrs-header2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：整体宽度1200，居中</dt>
        <dd>组件位置：@/views/common/nav/vrs-header2/vrs-header2.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>导航栏3</span>
      </div>
      <!-- 组件 -->
      <vrs-header3></vrs-header3>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：最大宽度1560px，最小宽度1200，居中</dt>
        <dd>组件位置：@/views/common/nav/vrs-header3/vrs-header3.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import vrsHeader1 from './vrs-header1/vrs-header1'
import vrsHeader2 from './vrs-header2/vrs-header2'
import vrsHeader3 from './vrs-header3/vrs-header3'
export default {
  name: 'vrs-header',
  components: {
    vrsHeader1,
    vrsHeader2,
    vrsHeader3
  }
}
</script>