import Vue from 'vue'
import Vuex from 'vuex'

import common from '@/components/common/common.store'

import SiteTesting from '@/views/SiteTesting/site-testing.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SiteTesting,
    common
  }
})
