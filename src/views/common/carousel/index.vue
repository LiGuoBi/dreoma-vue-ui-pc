<!-- 轮播类 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>首页轮播图1</span>
      </div>
      <!-- 组件 -->
      <vrs-swiper1></vrs-swiper1>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：</dt>
        <dd>组件位置：@/views/common/carousel/vrs-swiper1/vrs-swiper1.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>轮播图2</span>
      </div>
      <!-- 组件 -->
      <vrs-swiper2></vrs-swiper2>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：更改按钮的多列Swiper</dt>
        <dd>组件位置：@/views/common/vrs-swiper2/vrs-swiper2.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>轮播图6</span>
      </div>
      <!-- 组件 -->
      <vrs-swiper6></vrs-swiper6>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：带标题的Swpier,样式自定义箭头高度,箭头是在1200容器内</dt>
        <dd>组件位置：@/views/common/vrs-swiper6/vrs-swiper6.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>轮播图3</span>
      </div>
      <!-- 组件 -->
      <vrs-swiper3></vrs-swiper3>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：带标题的Swpier,主体部分1200px,前后箭头相对定位</dt>
        <dd>组件位置：@/views/common/vrs-swiper3/vrs-swiper3.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>轮播图4</span>
      </div>
      <!-- 组件 -->
      <vrs-swiper4></vrs-swiper4>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：宽度1200居中，箭头相对定位</dt>
        <dd>组件位置：@/views/common/vrs-swiper4/vrs-swiper4.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>轮播5</span>
      </div>
      <!-- 组件 -->
      <vrs-swiper5></vrs-swiper5>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：竖型轮播，整体宽度1200px，两端对齐方式，自动轮播</dt>
        <dd>组件位置：@/views/common/vrs-swiper5/vrs-swiper5.vue</dd>
      </dl>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>轮播7</span>
      </div>
      <!-- 组件 -->
      <vrs-swiper7></vrs-swiper7>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：修改了分页样式的全屏轮播</dt>
        <dd>组件位置：@/views/common/vrs-swiper7/vrs-swiper7.vue</dd>
      </dl>
    </el-card>

  </div>
</template>

<script>
import vrsSwiper1 from './vrs-swiper1/vrs-swiper1'
import vrsSwiper2 from './vrs-swiper2/vrs-swiper2'
import vrsSwiper3 from './vrs-swiper3/vrs-swiper3'
import vrsSwiper4 from './vrs-swiper4/vrs-swiper4'
import vrsSwiper5 from './vrs-swiper5/vrs-swiper5'
import vrsSwiper6 from './vrs-swiper6/vrs-swiper6'
import vrsSwiper7 from './vrs-swiper7/vrs-swiper7'
export default {
  name: 'carousel',
  components: {
    vrsSwiper1,
    vrsSwiper2,
    vrsSwiper3,
    vrsSwiper4,
    vrsSwiper5,
    vrsSwiper6,
    vrsSwiper7
  }
}
</script>