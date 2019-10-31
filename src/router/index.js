import vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import welcome from '@/views/welcome'
import NotFound from '@/views/404'

vue.use(VueRouter)

const router = new VueRouter({
  // 路由配置对象
  // 关键选项：routes作用：配置路由规则
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    },
    // 首页
    {
      path: '/',
      component: Home,
      children: [
        // 欢迎界面
        {
          path: '/',
          component: welcome
        }
      ]
    },
    // 404处理
    {
      path: '*',
      component: NotFound
    }
  ]

})

export default router
