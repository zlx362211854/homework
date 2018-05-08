/**
 * @Author zlx
 * @Date 2018/5/7 下午6:30
 */
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './module/index'
import createPersistedState from 'vuex-persistedstate'

var _ = require('lodash')
Vue.use(Vuex)
// 注册需要存储的字段
let persistent = []
const moduleObjects = _.cloneDeep(modules)
Object.keys(moduleObjects).forEach(name => {
  let pack
  if (moduleObjects[name].persistent) {
    pack = moduleObjects[name].persistent.map(key => `${name}.${key}`)
  } else {
    pack = name
  }
  persistent = persistent.concat(pack)
})
const store = new Vuex.Store({
  modules: {
    ...modules
  },
  plugins: [createPersistedState({paths: persistent})]
});

export default store
