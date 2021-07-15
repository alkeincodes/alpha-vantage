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
      <b-row>
        <b-col v-for="(data, key) in dataCards" :key="key">
          <data-card :data="data" />
        </b-col>
      </b-row>

      <div class="data-table mt-4">
        <b-alert
          show
          dismissible
        >
          <div class="alert-with-icon">
            <icon-graduation-hat />
            <span class="text-success"><strong>+236</strong> clicks from new keywords containing the phrase '<strong>compare</strong>'</span>
          </div>
        </b-alert>
        <b-table
          :items="tableData"
          :fields="fields"
          striped
          sticky-header
          hover
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataCard from '@/views/SiteTesting/components/DataCard'
import DateFilters from '@/views/SiteTesting/components/DateFilters'

export default {
  name: 'PagesPerformance',
  components: {
    DataCard,
    DateFilters
  },
  computed: {
    dataCards () {
      return this.$store.getters['SiteTesting/dataCard']
    },
    tableData () {
      return this.$store.getters['SiteTesting/tableData']
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
  created () {
    this.$store.dispatch('SiteTesting/getApiData')
  }
}
</script>
