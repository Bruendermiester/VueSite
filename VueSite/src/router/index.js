import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import MyGame from '@/components/MyGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/game',
      name: 'MyGame',
      component: MyGame
    }
  ]
})
