import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout/'
import Cash from '@/views/cash/'
import Triangle from '@/views/triangle'
import Sales from '@/views/sales/'
import web from '@/views/web/'

import five from '@/views/five/'
import erp from '@/views/erp/'
import Sales1 from '@/views/sales1/'
import CS from '@/views/CS/'
import Nine from '@/views/nine/'
import Twelve from '@/views/twelve/'
import Thirteen from '@/views/thirteen/'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'',
        name:'home',
        component:Home
      },
      {
        path:'/cash',
        name:'cash',
        component:Cash
      },
      {
        path:'/five',
        name:'five',
        component:five
      },
      {
        path:'/erp',
        name:'erp',
        component:erp
      },
      {
        path:'/web',
        name:'web',
        component:web
      },
      {
        path:'/triangle',
        name:'triangle',
        component:Triangle
      },
      {
        path:'/calendar',
        name:'calendar',
        component: () => import("@/views/calendar")
      },
      {
        path:'/sales',
        name:'sales',
        component:Sales
      },
      {
        path:'/sales1',
        name:'sales1',
        component:Sales1
      },
      {
        path:'/CS',
        name:'CS',
        component:CS
      },
      {
        path:'/nine',
        name:'nine',
        component:Nine
      },
      {
        path:'/twelve',
        name:'twelve',
        component:Twelve
      },
      {
        path:'/thirteen',
        name:'thirteen',
        component:Thirteen
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const user = JSON.parse(window.localStorage.getItem('user'));
//导航守卫
// router.beforeEach((to,_,next) =>{
//   //校验非登录页面的登录状态
//   if(to.path !== '/login'){
//     if(user){
//       next();
//     }else{
//       next('./login');
//     }
//   }else{
//     //登录页面正常允许通过
//     next()
//   }
// })

export default router
