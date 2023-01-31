import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import vSelect from 'vue-select'
// import { MultiSelectPlugin } from '@syncfusion/ej2-vue-dropdowns';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import User_Store from '../src/components/store/User_Store.js'
import Chat_List from '../src/components/store/Chat_List.js'
import ChatStore from '../src/components/store/ChatStore.js'
import Message from '../src/components/store/Message'
import GroupStore from '../src/components/store/GroupStore'
import GroupMember from '../src/components/store/GroupMember'
import Search from '../src/components/store/Search'
import ContactStore from '../src/components/store/ContactStore'
import LoginComponent from '../src/components/LoginComponent.vue'
import GroupChatList from '../src/components/GroupChatList.vue'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.component('v-select', vSelect)

// Vue.use(MultiSelectPlugin)
library.add(faTwitter)
Vue.component('font-awesome-icon',FontAwesomeIcon)

const store= new Vuex.Store({
  modules:
  {
    User_Store,Chat_List,ChatStore,Message,GroupStore,GroupMember,Search,ContactStore
  }
})

let routes = [
  {
      path:'/',
      name : 'LoginComponent',
      component :LoginComponent
  },
  {
    path:'/ChatList',
    name : 'GroupChatList',
    component :GroupChatList
},
  

]

const router=new VueRouter(
{
mode: "history",
routes

}
)

new Vue({
  store,router,
  render: h => h(App),
}).$mount('#app')
