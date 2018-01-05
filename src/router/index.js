import Vue from 'vue'
import Router from 'vue-router'
import huaban from '@/components/HelloWorld'
import common from '@/components/Common'
import badbad from '@/components/Badbad'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/huaban',
      name: 'huaban',
      component: huaban
    },
    {
      path: '/common',
      name: 'common',
      component: common
    },
    {
      path: '/badbad',
      name: 'badbad',
      component: badbad
    }
  ]
})
