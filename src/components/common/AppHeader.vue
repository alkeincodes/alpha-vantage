<template>
  <div class="site-header">
    <div class="nav-control">
      <button @click="$store.commit('common/TOGGLE_SIDENAV')"><b-icon-arrow-left /></button>
    </div>
    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
      right
    >
      <template #button-content>
        <div class="user-info">
          <div class="name">
            <span>John Doe</span>
            <icon-chevron-down />
          </div>
          <div class="settings">
            <icon-settings /> <span>Settings</span>
          </div>
        </div>
      </template>
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
import { BIconArrowLeft } from 'bootstrap-vue'

export default {
  name: 'AppHeader',
  components: {
    BIconArrowLeft
  }
}
</script>
