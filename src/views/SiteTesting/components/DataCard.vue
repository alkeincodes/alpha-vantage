<template>
  <div class="data-card">
    <h5 class="figure">{{ data.figure }}</h5>
    <p class="info">{{ data.title }} <span class="percentage" :class="{'increased': data.sign === '+', 'decreased': data.sign === '-'}">({{ data.sign }}{{ data.percentage }})</span></p>
  </div>
</template>

<script>
export default {
  name: 'DataCard',
  props: {
    data: Object
  }
}
</script>
