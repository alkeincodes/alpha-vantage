<template>
  <div class="pages-performance av-container">
    <div class="pages-performance__header">
      <div class="left">
        <h1 class="page-title">Pages Performance</h1>
        <a href="#" class="learn-more">
          <icon-fill-play />
          Learn more
        </a>
      </div>
      <div class="right">
        <date-filters />
      </div>
    </div>
    <div class="pages-performance__content">
      <b-row class="mb-5">
        <b-col v-for="(data, key) in dataCards" :key="key">
          <data-card :data="data" />
        </b-col>
      </b-row>
      <h4 class="page-subtitle mb-3">Table Title <icon-fill-share /></h4>
      <b-alert
        show
        dismissible
      >
        <div class="alert-with-icon">
          <icon-graduation-hat />
          <span class="text-success"><strong>+236</strong> clicks from new keywords containing the phrase '<strong>compare</strong>'</span>
        </div>
      </b-alert>
      <div class="card-style mt-1 mb-5">
        <b-table
          :busy="isLoading"
          :items="tableData"
          :fields="fields"
          striped
          sticky-header
          hover
        >
          <template #cell(date)="prop">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <span class="date">{{ prop.value }}</span>
          </template>
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <!-- <b-spinner class="align-middle"></b-spinner> -->
              <strong>Loading...</strong>
            </div>
          </template>
        </b-table>
      </div>

      <h4 class="page-subtitle mb-3">Graph: Table Title <icon-fill-share /></h4>

      <div class="card-style">
        <chart />
      </div>
    </div>
  </div>
</template>

<script>
import DataCard from '@/views/SiteTesting/components/DataCard'
import DateFilters from '@/views/SiteTesting/components/DateFilters'
import Chart from '@/views/SiteTesting/components/Chart'

export default {
  name: 'PagesPerformance',
  components: {
    DataCard,
    DateFilters,
    Chart
  },
  computed: {
    dataCards () {
      return this.$store.getters['SiteTesting/dataCard']
    },
    tableData () {
      return this.$store.getters['SiteTesting/tableData']
    },
    isLoading () {
      return this.$store.getters['SiteTesting/isLoading']
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'date',
          width: 180,
          sortable: true
        },
        {
          key: 'open',
          sortable: true
        },
        {
          key: 'high',
          sortable: true
        },
        {
          key: 'low',
          sortable: true
        },
        {
          key: 'close',
          sortable: true
        }
      ]
    }
  },
  async created () {
    await this.$store.dispatch('SiteTesting/getApiData')
  }
}
</script>
