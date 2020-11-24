<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>底部栏1</span>
      </div>
      <!-- 组件 -->
      <vrs-footer1></vrs-footer1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：包含验证信息提示，提示.showMessage</dt>
        <dd>组件位置：@/views/common/footer/vrs-footer1/vrs-footer1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>底部栏2</span>
      </div>
      <!-- 组件 -->
      <vrs-footer2></vrs-footer2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：包含验证信息提示，提示.showMessage message(注意参数)</dt>
        <dd>组件位置：@/views/common/footer/vrs-footer2/vrs-footer2.vue</dd>
      </dl>
    </el-card>

  </div>
</template>

<script>
import vrsFooter1 from './vrs-footer1/vrs-footer1'
import vrsFooter2 from './vrs-footer2/vrs-footer2'
export default {
  name: 'vrs-footer',
  components: {
    vrsFooter1,
    vrsFooter2
  }
}
</script>