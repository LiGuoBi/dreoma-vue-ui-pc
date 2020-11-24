<!-- tab切换 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>tab切换样式一</span>
      </div>
      <!-- 组件 -->
      <vrs-tab1></vrs-tab1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：简单Tab切换</dt>
        <dd>组件位置：@/views/common/tab/vrs-tab1/vrs-tab1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>tab切换样式二</span>
      </div>
      <!-- 组件 -->
      <vrs-tab2></vrs-tab2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：左边标题，右边详情，根据标题切换详情，宽度1200px,居中</dt>
        <dd>组件位置：@/views/common/tab/vrs-tab2/vrs-tab2.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import  vrsTab1  from './vrs-tab1/vrs-tab1'
import  vrsTab2  from './vrs-tab2/vrs-tab2'
export default {
  name: 'tab',
  components: {
    vrsTab1,
    vrsTab2
  }
}
</script>