<!-- 媒体(图文展示) -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图文展示1</span>
      </div>
      <!-- 组件 -->
      <vrs-media-show1></vrs-media-show1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：其中vrs-title引用了通用标题vrs-title3，from @/views/common/title/vrs-title3/vrs-title3.vue</dt>
        <dd>组件位置：@/views/common/media/vrs-media-show1/vrs-media-show1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图文展示2</span>
      </div>
      <!-- 组件 -->
      <vrs-media-show2></vrs-media-show2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：其中vrs-title引用了通用标题vrs-title3，from @/views/common/title/vrs-title3/vrs-title3.vue</dt>
        <dd>组件位置：@/views/common/media/vrs-media-show2/vrs-media-show2.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图文展示3</span>
      </div>
      <!-- 组件 -->
      <vrs-media-show3></vrs-media-show3>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：通用图文3</dt>
        <dd>组件位置：@/views/common/media/vrs-media-show3/vrs-media-show3.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图文展示4</span>
      </div>
      <!-- 组件 -->
      <vrs-media-show4></vrs-media-show4>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：背景图100%宽度，中间div通过调整margin覆盖背景，宽度1200自动居中。图标可以使用本地或接口数据</dt>
        <dd>组件位置：@/views/common/media/vrs-media-show4/vrs-media-show4.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图文展示5</span>
      </div>
      <!-- 组件 -->
      <vrs-media-show5></vrs-media-show5>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：content超出9行显示省略</dt>
        <dd>组件位置：@/views/common/media/vrs-media-show5/vrs-media-show5.vue</dd>
      </dl>
    </el-card>

  </div>
</template>

<script>
import vrsMediaShow1 from './vrs-media-show1/vrs-media-show1.vue'
import vrsMediaShow2 from './vrs-media-show2/vrs-media-show2.vue'
import vrsMediaShow3 from './vrs-media-show3/vrs-media-show3.vue'
import vrsMediaShow4 from './vrs-media-show4/vrs-media-show4.vue'
import vrsMediaShow5 from './vrs-media-show5/vrs-media-show5.vue'
export default {
  name: 'vrs-media',
  components: {
    vrsMediaShow1,
    vrsMediaShow2,
    vrsMediaShow3,
    vrsMediaShow4,
    vrsMediaShow5,
  }
}
</script>