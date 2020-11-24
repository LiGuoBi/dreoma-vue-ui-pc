<!-- 卡组 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>列表1</span>
      </div>
      <!-- 组件 -->
      <vrs-list1></vrs-list1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP:每列3个可自定义，自动换行，最后一个显示更多不包含在循环内</dt>
        <dd>组件位置：@/views/common/list/vrs-list1/vrs-list1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>列表2</span>
      </div>
      <!-- 组件 -->
      <vrs-list2></vrs-list2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP: 整体宽度1200px，三列，显示描述</dt>
        <dd>组件位置：@/views/common/list/vrs-list2/vrs-list2.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>列表3</span>
      </div>
      <!-- 组件 -->
      <vrs-list3></vrs-list3>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP: </dt>
        <dd>组件位置：@/views/common/list/vrs-list3/vrs-list3.vue</dd>
      </dl>
    </el-card>
  </div>
</template>

<script>
import vrsList1 from './vrs-list1/vrs-list1'
import vrsList2 from './vrs-list2/vrs-list2'
import vrsList3 from './vrs-list3/vrs-list3'
export default {
  name: 'list',
  components: {
    vrsList1,
    vrsList2,
    vrsList3
  }
}
</script>
