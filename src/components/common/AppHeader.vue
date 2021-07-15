<template>
  <div class="site-header">
    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret>
      <template #button-content>
        &#x1f50d;<span class="sr-only">Search</span>
      </template>
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>
