import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'

Vue.use(Vuetify)

import Vuex from 'vuex'
import 'vue-sequence/dist/main.css'
import {Store, SeqDiagram} from 'vue-sequence'

Vue.use(Vuex)
Vue.component('seq-diagram', SeqDiagram)

new Vue({
  el: '#app',
  store: Store,
  render: h => h(App)
})

Store.commit('code', 'A.methodA { B.methodB() }')