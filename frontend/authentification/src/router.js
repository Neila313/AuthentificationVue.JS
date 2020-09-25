import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard'
import HomePage from './components/HomePage'
import store from './store'


Vue.use(VueRouter)

const routes = 
     [
          {
            path: '/dashboard',
            component: Dashboard,
            meta: {requiresAuth: true}

          },  
          {
            path: '/homepage',
            component: HomePage
          },  
    ]
  

  const router = new VueRouter({

    mode: "history", 
    routes
  })
  
  router.beforeEach((to, from, next)=>{
      if(to.matched.some(rout=> rout.meta.requiresAuth === true)){
          if(store.state.token){
              next()
          } else if(store.state.token == null){

            next({
                path: '/homepage',
                params: { nextUrl: to.fullPath }
            })

          } else {
            next()
      }
      } else {
          next()
      }
  })

  export default router




