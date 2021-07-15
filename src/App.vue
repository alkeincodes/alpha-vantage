<template>
  <div id="app">
    <div class="main-container">
      <div class="sidenav">
        <side-nav />
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
import SideNav from '@/components/common/Sidenav'

export default {
  name: 'App',
  components: {
    AppHeader,
    SideNav
  }
}
</script>

<style lang="scss">
@import '@/sass/app.scss';
</style>
