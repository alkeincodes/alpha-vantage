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
          :key="item"
          @click="activeName = item"
          :class="{'active': activeName === item}"
        >
          {{ item }}
        </span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateFilters',
  data () {
    return {
      activeName: 'month',
      filters: [
        'day',
        'week',
        'month',
        'year'
      ]
    }
  }
}
</script>
