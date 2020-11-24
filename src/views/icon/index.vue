<!-- icon 图标库 -->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>首页轮播图1</span>
      </div>
      <!-- 组件 -->
      <ul class="icon-list">
        <li class="flex-v">
          <div class="inner">
            <p><svg-icon class="scg-txt" icon-class="iconshezhi"></svg-icon></p>
            <p class="name">iconshezhi</p>
          </div>
        </li>
      </ul>
      <!-- 说明 -->
      <dl class="tip-box">
        <dt>TIP：</dt>
        <dd>组件位置：@/components/svg-icon/index</dd>
      </dl>
    </el-card>
    
  </div>
</template>

<script>
import svgIcon from '@/components/svg-icon'
export default {
  name: '',
  components: {
    svgIcon
  },
  data() {
    return {

    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.scg-txt {
  font-size: 30px;
}
.icon-list {
  border: 1px solid #eaeefb;
  border-radius: 4px;
  overflow: hidden;
  li {
    float: left;
    width: 16.66%;
    height: 120px;
    color: #666;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    text-align: center;
  }
  .inner {
    width: 100%;
  }
  .name {
    font-family: icomoon!important;
    padding: 15px 10px 0;
  }
}
</style>