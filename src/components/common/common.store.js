const namespaced = true

const state = {
  isSidenavOpen: false
}

const mutations = {
  TOGGLE_SIDENAV (state) {
    state.isSidenavOpen = !state.isSidenavOpen
  }
}

const actions = {}

const getters = {
  isSidenavOpen: state => state.isSidenavOpen
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
