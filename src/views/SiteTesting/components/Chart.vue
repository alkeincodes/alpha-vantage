c<template>
  <div class="av-chart">
    <div class="chart-date-controls">
      <div>
        <b-input-group prepend="Start Date" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-datepicker
            v-model="chartControl.startDate"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            class="mb-2"
          />
        </b-input-group>
        <b-input-group prepend="End Date" class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-datepicker
            v-model="chartControl.endDate"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            class="mb-2"
          />
        </b-input-group>
      </div>
      <b-button
        variant="success"
        class="mt-2 mb-4"
        @click="filterByDate"
      >
        Search
      </b-button>
    </div>

    <vue-apex-charts
      v-if="series[0].data"
      ref="chart"
      type="candlestick"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// import moment from 'moment'

export default {
  name: 'Chart',
  components: {
    VueApexCharts
  },
  computed: {
    candleStickData () {
      return this.$store.getters['SiteTesting/candleStickData']
    }
  },
  watch: {
    candleStickData: {
      handler (val) {
        this.series[0].data = val
      },
      deep: true
    }
  },
  data () {
    return {
      chartControl: {
        startDate: new Date(),
        endDate: new Date()
      },
      symbolOptions: ['IBM'],
      series: [{
        name: 'candle',
        data: this.candleStickData
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'candlestick'
        },
        title: {
          text: 'CandleStick Chart - Category X-axis',
          align: 'left'
        },
        tooltip: {
          enabled: true
        },
        xaxis: {
          type: 'category'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      }
    }
  },
  methods: {
    filterByDate () {
      const startDate = new Date(this.chartControl.startDate)
      const endDate = new Date(this.chartControl.endDate)

      this.series[0].data = this.candleStickData.filter((a) => {
        const date = new Date(a.x)

        return date >= startDate && date <= endDate
      })

      this.$refs.chart.refresh()
    }
  }
}
</script>
