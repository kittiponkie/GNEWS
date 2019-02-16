import Vue from 'vue'
import Router from 'vue-router'
import VueMaterial from 'vue-material'
import AppHeader from '@/components/AppHeader'
import Token from '@/components/Token'
import News from '@/components/News'
import card from '@/components/card'
import vod from '@/components/Vod'
import radio from '@/components/Radio'
import live from '@/components/Live'
import Searchcon from '@/components/Searchcon'
import Block from '@/components/Block'
import card_sm from '@/components/card_sm'
import ChangePassword from '@/components/ChangePassword'
import Department from '@/components/Department'
import Econ from '@/components/Econ'
import History from '@/components/History'
import Lastestnews from '@/components/Lastestnews'
import Later from '@/components/Later'
import Suggestion from '@/components/Suggestion'
import Ministry from '@/components/Ministry'
import GovServ from '@/components/GovServ'
import Lottery from '@/components/Lottery'
import Calendar from '@/components/Calendar'
import Ministrydata from '@/components/Ministrydata'
import MyNews from '@/components/MyNews'
import Notification from '@/components/Notification'
import home from '@/components/home'
import test from '@/components/test'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueLocalForage from 'vue-localforage'
Vue.use(VueLocalForage)

var SocialSharing = require('vue-social-sharing');
Vue.use(VueMaterial)
Vue.use(SocialSharing);
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: Notification
    },
    {
      path: '/Ministry',
      name: 'Ministry',
      component: Ministry
    },
    {
      path: '/Block',
      name: 'Block',
      component: Block
    },
    {
      path: '/card_sm',
      name: 'card_sm',
      component: card_sm
    },
    {
      path: '/ChangePassword/:Token',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/Ministry/:id/:departmentid',
      name: 'Department',
      component: Department
    },
    {
      path: '/Ministry/:id',
      name: 'Ministrydata',
      component: Ministrydata
    },
    {
      path: '/Econ',
      name: 'Econ',
      component: Econ
    },
    {
      path: '/History',
      name: 'History',
      component: History
    },
    {
      path: '/Lastestnews',
      name: 'Lastestnews',
      component: Lastestnews
    },
    {
      path: '/Later',
      name: 'Later',
      component: Later
    },
    {
      path: '/MyNews',
      name: 'MyNews',
      component: MyNews
    },
    {
      path: '/Suggestion',
      name: 'Suggestion',
      component: Suggestion
    },
    {
      path: '/Searchcon/:searchdata',
      name: 'Searchcon',
      component: Searchcon
    },
    {
      path: '/AppHeader',
      name: 'AppHeader',
      component: AppHeader
    },
    {
      path: '/Token/:Token',
      name: 'Token',
      component: Token
    },
    {
      path: '/GovServ',
      name: 'GovServ',
      component: GovServ
    },
    {
      path: '/News/:id',
      name: 'News',
      component: News
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/vod/:id',
      name: 'vod',
      component: vod
    },
    {
      path: '/vod',
      name: 'vod',
      component: vod
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/live',
      name: 'live',
      component: live
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: Lottery
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
