<template>
  <div id="app">
    <div
      class="dashboard"
      :class="{'sidenav-open': $store.getters['common/isSidenavOpen']}"
    >
      <div class="dashboard__left">
        <side-nav />
      </div>
      <div class="dashboard__right">
        <app-header />
        <div class="site-main">
          <router-view></router-view>
        </div>
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
