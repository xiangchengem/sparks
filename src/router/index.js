import Vue from 'vue'
import Router from 'vue-router'
import Loser from '../components/Loser.vue'
import World from '../components/World.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:'/',
      component:Loser
    },
    {
      path:'/world',
      component:World
    }
  ]
})
