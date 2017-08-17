import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Favourite from '@/components/Favourite'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Teacher from '@/components/Teacher'
import UploadTeacher from '@/components/UploadTeacher'
import UploadHomework from '@/components/UploadHomework'
import UpdateTeacher from '@/components/UpdateTeacher'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '/home/favourite',
      name: 'favourite',
      component: Favourite
    }, {
      path: '/home/upload_teacher',
      name: 'upload_teacher',
      component: UploadTeacher,
      meta: { requiresAuth: true }
    }, {
      path: '/home/sign_in',
      name: 'sign_in',
      component: SignIn
    }, {
      path: '/home/sign_up',
      name: 'sign_up',
      component: SignUp
    }]
  }, {
    path: '/upload_homework',
    name: 'upload_homework',
    component: UploadHomework,
    meta: { requiresAuth: true }
  }, {
    path: '/update_teacher',
    name: 'update_teacher',
    component: UpdateTeacher,
    meta: { requiresAuth: true }
  }, {
    path: '/teacher',
    name: 'teacher',
    component: Teacher
  }, {
    path: '*',
    redirect: '/home/favourite'
  }]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuth) {
    console.info(`[Router]'${from.name}' need auth, go 'sign_in'`)
    store.commit('setNavIndex', {navIndex: 'sign_in'})
    next('/home/sign_in')
  } else {
    store.commit('setNavIndex', {navIndex: to.name})
    next()
  }
})

export default router
