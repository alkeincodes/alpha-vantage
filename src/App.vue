<template>
  <div id="app">
    <div class="main-container">
      <div class="sidenav">
        SideNav
      </div>
      <div class="site-content">
        <app-header />
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import '@/sass/app.scss';
</style>
