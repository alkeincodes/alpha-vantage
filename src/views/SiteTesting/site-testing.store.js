import axios from 'axios'

const namespaced = true

const state = {
  dateFilter: 'daily',
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
  ],
  tableData: [
    {
      date: new Date(),
      symbol: '1018gs2026',
      open: '107.1',
      high: '107',
      low: '107',
      close: '130'
    },
    {
      date: new Date(),
      symbol: '1018gs2026',
      open: '107.1',
      high: '107',
      low: '107',
      close: '130'
    }
  ]
}

const mutations = {
  SET_DATE_FILTER (state, payload) {
    state.dateFilter = payload
  },
  SET_TABLE_DATA (state, payload) {
    state.tableData = payload
  }
}

const actions = {
  getApiData ({ commit }) {
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=KY9FUXWTIRKBCWPX').then(({ data }) => {
      const apiData = data['Time Series (Daily)']
      const reconData = []
      for (const [key, value] of Object.entries(apiData)) {
        const propKey = key
        const dataByProp = []

        for (const [vKey, vValue] of Object.entries(value)) {
          const rKey = vKey.substring(3)
          dataByProp[rKey] = vValue
        }
        reconData.push({
          date: propKey,
          ...dataByProp
        })
      }
      commit('SET_TABLE_DATA', reconData)
    })
  }
}

const getters = {
  dataCard: state => state.dataCard,
  tableData: state => state.tableData,
  dateFilter: state => state.dateFilter
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
