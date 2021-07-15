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
    }
  }
}
</script>
