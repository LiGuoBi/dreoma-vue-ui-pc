import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '',
      redirect: '/home/index',
      hidden: true // 如果设置为true，则项目不会显示在侧边栏中
    },
    {
      path: '/home',
      component: layout,
      redirect: '/home/index',
      children: [{
        path: 'index',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页'
        }
      }]
    },
    {
      path: '/common',
      component: layout,
      redirect: '/common/header',
      meta: {
        title: '通用模块'
      },
      children: [{
          path: 'header',
          name: 'header',
          component: () => import('@/views/common/header'),
          meta: {
            title: '顶栏'
          }
        },
        {
          path: 'footer',
          name: 'footer',
          component: () => import('@/views/common/footer'),
          meta: {
            title: '底栏'
          }
        },
        {
          path: 'nav',
          name: 'nav',
          component: () => import('@/views/common/nav'),
          meta: {
            title: '导航'
          }
        },
        {
          path: 'tab',
          name: 'tab',
          component: () => import('@/views/common/tab'),
          meta: {
            title: 'tab切换'
          }
        },
        {
          path: 'carousel',
          name: 'carousel',
          component: () => import('@/views/common/carousel'),
          meta: {
            title: '轮播图'
          }
        },
        {
          path: 'title',
          name: 'title',
          component: () => import('@/views/common/title'),
          meta: {
            title: '通用标题'
          }
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('@/views/common/list'),
          meta: {
            title: '列表'
          }
        },
        {
          path: 'popup',
          name: 'popup',
          component: () => import('@/views/common/popup'),
          meta: {
            title: '弹出层'
          }
        },
        {
          path: 'count-bar',
          name: 'count-bar',
          component: () => import('@/views/common/count-bar'),
          meta: {
            title: '统计'
          }
        },
        {
          path: 'media',
          name: 'media',
          component: () => import('@/views/common/media'),
          meta: {
            title: '图文展示'
          }
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('@/views/common/news'),
          meta: {
            title: '资讯动态(文章展示)'
          }
        },
        {
          path: 'login-reg',
          name: 'login-reg',
          component: () => import('@/views/common/login-reg'),
          meta: {
            title: '登录注册'
          }
        }
      ]
    },
    {
      path: '/about',
      component: layout,
      redirect: '/about/join',
      meta: {
        title: '企业介绍'
      },
      children: [{
          path: 'course',
          name: 'course',
          component: () => import('@/views/about/course'),
          meta: {
            title: '发展历程'
          }
        },
        {
          path: 'join',
          name: 'join',
          component: () => import('@/views/about/join'),
          meta: {
            title: '加入我们'
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/about/contact'),
          meta: {
            title: '联系我们'
          }
        }
      ]
    },
    {
      path: '/article',
      component: layout,
      redirect: '/article/tab',
      meta: {
        title: '文章'
      },
      children: [{
          path: 'tab',
          name: 'article-tab',
          component: () => import('@/views/article/article-tab'),
          meta: {
            title: '文章分类'
          }
        },
        {
          path: 'list',
          name: 'article-list',
          component: () => import('@/views/article/article-list'),
          meta: {
            title: '文章列表'
          }
        },
        {
          path: 'detail',
          name: 'article-detail',
          component: () => import('@/views/article/article-detail'),
          meta: {
            title: '文章详情'
          }
        }
      ]
    },
    {
      path: '/icon',
      component: layout,
      redirect: '/icon/index',
      children: [{
        path: 'index',
        name: 'icon',
        component: () => import('@/views/icon'),
        meta: {
          title: 'icon图标'
        }
      }]
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      meta: {
        title: '404'
      },
      hidden: true // 如果设置为true，则项目不会显示在侧边栏中
    },
  ]
})