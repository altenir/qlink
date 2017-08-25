import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: load('Hello'),
      children: [
        { path: '/index', component: load('Index') },
        { path: '/home', component: load('Home') },
        { path: '*', component: load('Index') }
      ]
    }
  ]
})
