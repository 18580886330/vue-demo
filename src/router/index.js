import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Log from '@/components/Log'

import home from '@/components/home'
import document from '@/components/document'
import about from '@/components/about'

import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'

import slider from '@/views/slider'


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/document',
      name: 'document',
      components: {
        default: document,
        slider: slider
      }
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: '',
          name: 'About',
          component: study
         },
        {
          path: 'work',
          name: 'Work',
          component: work
        },
        {
          path: 'hobby',
          name: 'Hobby',
          component: hobby
        }
      ]
    },
    {
      path: '*',
      redirect: {
        path: '/home'
      }
    }
  ]
})
