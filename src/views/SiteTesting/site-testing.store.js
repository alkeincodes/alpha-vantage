const namespaced = true

const state = {
  dataCard: [
    {
      figure: '2158',
      title: 'Clicks',
      sign: '+',
      percentage: '64.2%'
    },
    {
      figure: '18 M',
      title: 'Impressions',
      sign: '-',
      percentage: '5.2%'
    },
    {
      figure: '.12 %',
      title: 'Average CTR',
      sign: '+',
      percentage: '82%'
    },
    {
      figure: '0',
      title: 'Average Position',
      sign: '+',
      percentage: '100%'
    }
  ]
}

const mutations = {}

const actions = {}

const getters = {
  dataCard: state => state.dataCard
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
