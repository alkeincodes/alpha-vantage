<template>
  <div class="date-filters">
    <div class="date-filters__header">
      <icon-double-grid />
      <span>4 Oct 2019 - 4 Nov 2019</span>
    </div>
    <div class="date-filters__controls">
      <nav class="date-controls">
        <span
          v-for="item in filters"
          :key="item.key"
          @click="$store.commit('SiteTesting/SET_DATE_FILTER', item.key)"
          :class="{'active': dateFilter === item.key}"
        >
          {{ item.label }}
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateFilters',
  computed: {
    dateFilter () {
      return this.$store.getters['SiteTesting/dateFilter']
    }
  },
  data () {
    return {
      filters: [
        {
          key: 'daily',
          label: 'Day'
        },
        {
          key: 'weekly',
          label: 'Week'
        },
        {
          key: 'monthly',
          label: 'Month'
        },
        {
          key: 'yearly',
          label: 'Year'
        }
      ]
    }
  }
}
</script>
