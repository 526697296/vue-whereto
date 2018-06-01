import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Search from '@/pages/city/components/Search.vue'
import Searcht from '@/pages/city/components/Searcht.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/city',
      name: 'City',
      component: City,
      children:[
        {
          path:'/search',
          name: 'Search',
          component: Search,
        },
        {
          path:'/searcht',
          name: 'Searcht',
          component: Searcht,
        }
      ]
          
      
    }
  ]
})
