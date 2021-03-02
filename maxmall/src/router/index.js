/*
 * @Descripttion:
 * @version: X3版本
 * @Author:
 * @Date: 2021-03-02 10:02:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-02 11:14:12
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: () => import('../pages/home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../pages/index.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../pages/product.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('../pages/detail.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/cart.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/order.vue'),
    children: [
      {
        path: '/list',
        name: 'order-list',
        component: () => import('../pages/orderList.vue')
      },
      {
        path: '/confirm',
        name: 'order-confirm',
        component: () => import('../pages/orderConfirm.vue')
      },
      {
        path: '/pay',
        name: 'order-pay',
        component: () => import('../pages/orderPay.vue')
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: () => import('../pages/alipay.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
