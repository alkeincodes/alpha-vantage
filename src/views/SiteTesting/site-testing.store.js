import axios from 'axios'
import moment from 'moment'

const namespaced = true

const state = {
  dateFilter: 'daily',
  isLoading: false,
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
  tableData: []
}

const mutations = {
  SET_DATE_FILTER (state, payload) {
    state.dateFilter = payload
  },
  SET_TABLE_DATA (state, payload) {
    state.tableData = payload
  },
  SET_LOADING (state, payload) {
    state.isLoading = payload
  }
}

const actions = {
  getApiData ({ commit }) {
    commit('SET_LOADING', true)
    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=KY9FUXWTIRKBCWPX').then(({ data }) => {
      const apiData = data['Time Series (Daily)']
      const reconData = []
      for (const [key, value] of Object.entries(apiData)) {
        const propKey = key
        const dataByProp = []
        const candleStickData = []

        for (const [vKey, vValue] of Object.entries(value)) {
          const rKey = vKey.substring(3)
          dataByProp[rKey] = vValue
          candleStickData.push(vValue)
        }
        reconData.push({
          date: moment(propKey).format('DD MMMM YYYY'),
          ...dataByProp,
          candleStickData
        })
      }
      commit('SET_TABLE_DATA', reconData.sort((a, b) => new Date(a.date) - new Date(b.date)))
      commit('SET_LOADING', false)
    })
  }
}

const getters = {
  dataCard: state => state.dataCard,
  tableData: state => state.tableData,
  dateFilter: state => state.dateFilter,
  candleStickData: state => {
    return state.tableData.map(d => {
      return {
        x: d.date,
        y: d.candleStickData
      }
    })
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
