import Vue from 'vue'
import Router from 'vue-router'
import ItemsComponent from '@/components/ItemsComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ItemsComponent',
      component: ItemsComponent
    }
  ]
})
