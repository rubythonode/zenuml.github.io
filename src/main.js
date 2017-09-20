import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'

Vue.use(Vuetify)

import Vuex from 'vuex'
import 'vue-sequence/dist/main.css'
import {Store, SeqDiagram} from 'vue-sequence'
import Workspace from './components/Workspace.vue'
import SplitPane from './components/SplitPane.vue'
import DslEditor from './components/DslEditor.vue'

Vue.use(Vuex)
Vue.component('seq-diagram', SeqDiagram)
Vue.component('workspace', Workspace)
Vue.component('split-pan', SplitPane)
Vue.component('dsl-editor', DslEditor)

new Vue({
  el: '#app',
  store: Store,
  render: h => h(App)
})