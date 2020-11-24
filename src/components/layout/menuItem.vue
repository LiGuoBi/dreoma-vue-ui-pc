<!--  -->
<template>
  <el-menu-item
    v-if="hasChild(item, item.children) == 1"
    :index="resolvePath(route.path)"
    >{{ route.meta.title }}
  </el-menu-item>
  <el-submenu
    v-else-if="hasChild(item, item.children) == 2"
    :index="resolvePath(item.path)"
  >
    <template slot="title">
      <span v-if="item.meta">{{ item.meta.title }}</span>
    </template>
    <!-- 递归循环菜单项 -->
    <menu-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
      :base-path="resolvePath(child.path)"
    ></menu-item>
  </el-submenu>
</template>

<script>
import path from 'path'
export default {
  name: 'menuItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      route: {}
    }
  },
  methods: {
    hasChild(item, children = []) {
      if (item.hidden) {
        return 0 // 不显示此路由
      }
      // 如果没有要显示的子路由器，则显示父级
      if (children.length == 0) {
        this.route = { ...item, path: '' } // path清空，因为 basePath 
        return 1
      }
      // 当只有一个子路由器时，默认显示子路由器
      if (children.length == 1) {
        this.route = children[0]
        return 1
      }
      // 有多个子路由器(二级菜单)
      return 2
    },
    resolvePath(routePath) {
      // path.resolve 把一个路径或路径片段的序列解析为一个绝对路径
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>