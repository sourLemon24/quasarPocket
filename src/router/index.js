import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store/index.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    name: "Signin",
    path: '/auth/signin',
    component: () => import ("@/views/SignIn")
  },
  {
    name: "Signup",
    path: '/auth/signup',
    component: () => import ("@/views/SignUp")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach ((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/auth/signin') 
  } else {
    next() 
  }
})

export default router
