<!-- 通用标题 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>标题1</span>
      </div>
      <!-- 组件 -->
      <vrs-title1 en="ZheShiGeBiaoTi" zh="副标题"></vrs-title1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：可传参数，t1-第一个标题 t2-第二个标题 color-字体颜色 bg-背景色</dt>
        <dd>组件位置：@/views/common/title/vrs-title1/vrs-title1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>标题2</span>
      </div>
      <!-- 组件 -->
      <vrs-title2 zh="中文标题" en="English"></vrs-title2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：可传参数，en-第一个标题 zh-第二个标题 color-字体颜色 bg-背景色</dt>
        <dd>组件位置：@/views/common/title/vrs-title2/vrs-title2.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>标题3</span>
      </div>
      <!-- 组件 -->
      <vrs-title3 zh="中文标题" en="English"></vrs-title3>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：可传参数，t1-第一个标题 t2-第二个标题 color-字体颜色 bg-背景色 align传flex-end可设置右对齐</dt>
        <dd>组件位置：@/views/common/title/vrs-title3/vrs-title3.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import vrsTitle1 from './vrs-title1/vrs-title1'
import vrsTitle2 from './vrs-title2/vrs-title2'
import vrsTitle3 from './vrs-title3/vrs-title3'
export default {
  name: 'vrs-title',
  components: {
    vrsTitle1,
    vrsTitle2,
    vrsTitle3,
  }
}
</script>