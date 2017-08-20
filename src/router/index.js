import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import teacher from '@/components/teacher'
import homework from '@/components/homework'
import about from '@/components/about'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/teacher',
    name: 'teacher',
    component: teacher
  }, {
    path: '/homework',
    name: 'homework',
    component: homework
  }, {
    path: '/about',
    name: 'about',
    component: about
  }, {
    path: '*',
    redirect: '/home'
  }]
})

export default router
