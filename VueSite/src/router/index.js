import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import MyGame from '@/components/MyGame'
import Resume from '@/components/Resume'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/connectFive',
      name: 'MyGame',
      component: MyGame
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})