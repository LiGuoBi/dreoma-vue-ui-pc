<!-- 历程类 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发展历程1</span>
      </div>
      <!-- 组件 -->
      <vrs-course1></vrs-course1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：居中 item：odd可自定义对齐方式</dt>
        <dd>组件位置：@/views/common/course/vrs-course1/vrs-course1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>发展历程2</span>
      </div>
      <!-- 组件 -->
      <vrs-course2></vrs-course2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：根据index更改标识颜色</dt>
        <dd>组件位置：@/views/common/course/vrs-course2/vrs-course2.vue</dd>
      </dl>
    </el-card>

  </div>
</template>

<script>
import vrsCourse1 from './vrs-course1/vrs-course1'
import vrsCourse2 from './vrs-course2/vrs-course2'
export default {
  name: 'course',
  components: {
    vrsCourse1,
    vrsCourse2
  }
}
</script>