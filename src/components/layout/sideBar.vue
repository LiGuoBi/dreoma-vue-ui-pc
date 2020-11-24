<!-- 侧边导航栏 -->
<template>
  <el-menu
    :default-active="activeRoute"
    class="sidebar"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
    :router="true"
    :collapse="false"
  >
    <!-- 循环菜单项 -->
    <menu-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></menu-item>
  </el-menu>
</template>

<script>
import menuItem from './menuItem'
export default {
  name: 'sideBar',
  components: {
    menuItem
  },
  data() {
    return {}
  },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    activeRoute() {
      return this.$route.path
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.sidebar{
  position: fixed;
  left: 0;
  top: 0;
  width: 240px;
  height: 100%;
  border: none;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>