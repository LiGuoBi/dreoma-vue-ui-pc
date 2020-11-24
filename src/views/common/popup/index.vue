<!-- 弹出层 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>弹出层1</span>
      </div>
      <!-- 组件 -->
      <vrs-popup1></vrs-popup1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：简单放大单个元素</dt>
        <dd>组件位置：@/views/common/popUp/vrs-pop1/vrs-pop1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>弹出层2</span>
      </div>
      <!-- 组件 -->
      <vrs-popup2></vrs-popup2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：图集轮播弹窗,整体宽度1200px</dt>
        <dd>组件位置：@/views/common/popUp/vrs-pop-up2/vrs-popup2.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import vrsPopup1 from './vrs-popup1/vrs-popup1'
import vrsPopup2 from './vrs-popup2/vrs-popup2'
export default {
  name: 'popup',
  components: {
    vrsPopup1,
    vrsPopup2
  }
}
</script>