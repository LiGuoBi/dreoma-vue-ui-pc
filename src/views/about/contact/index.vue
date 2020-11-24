<!-- 联系我们类 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>联系我们样式1</span>
      </div>
      <!-- 组件 -->
      <vrs-contact1></vrs-contact1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：宽度1200px, 居中 ，提交提示message，轮播</dt>
        <dd>组件位置：@/views/about/contact/vrs-contact1/vrs-contact1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>联系我们样式2</span>
      </div>
      <!-- 组件 -->
      <vrs-contact2></vrs-contact2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：联系我们样式2</dt>
        <dd>组件位置：@/views/about/contact/vrs-contact2/vrs-contact2.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import vrsContact1 from './vrs-contact1/vrs-contact1'
import vrsContact2 from './vrs-contact2/vrs-contact2'
export default {
  name: 'contact',
  components: {
    vrsContact1,
    vrsContact2
  }
}
</script>