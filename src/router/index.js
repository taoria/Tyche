import Vue from 'vue'
import Router from 'vue-router'
import ElementUi from 'element-ui'

//Page Com
import HelloWorld from '@/components/HelloWorld'
import CharacterSheet from '@/components/CharacterSheet'
import OverView from '@/components/OverView'
import Character from '@/components/Character'

//Com
import InputField from '@/components/UICom/InputField'
import NumberRollers from '@/components/Sheet/NumberRollers'
import PageJump from '@/components/UICom/PageJump'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Router)
Vue.use(ElementUi)
Vue.component('input-field', InputField)
Vue.component('number-roller',NumberRollers)
Vue.component('page-jump',PageJump)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'OverView',
      component: OverView
    },
    {
      path: '/character',
      name: 'Character',
      component: Character
    }
  ]
})
