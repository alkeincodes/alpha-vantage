<template>
  <div class="side-nav">
    <div class="logo-container">
      <div>
        <h3>Logo Logo</h3>
      </div>
    </div>
    <!-- <ul>
      <template v-for="(route, key) in routerList">
        <li
        v-if="!route.hidden"
        :key="key"
        >
          {{ route.meta.title }}
        </li>
      </template>
    </ul> -->

    <div class="nav-links">
      <div class="accordion" role="tablist">
        <template v-for="(route, key) in routerList">
          <div
            v-if="!route.hidden"
            :key="key"
          >
            <div
              class="nav-links__item"
              v-b-toggle="`accordion-${key+1}`"
              block
            >
              <span>{{ route.meta.title }}</span>
              <icon-chevron-down />
            </div>
            <b-collapse :id="`accordion-${key+1}`"  :visible="route.children.find(({ path }) => path === $route.path.substring(1)) ? true : false" accordion="my-accordion" role="tabpanel">
               <ul v-if="route.children">
                 <li v-for="child in route.children" :key="child.id">
                   <router-link :to="child.path">{{ child.meta.title }}</router-link>
                 </li>
               </ul>
            </b-collapse>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  computed: {
    routerList () {
      return this.$router.options.routes
    }
  },
  created () {
    this.$nextTick(() => {
      console.log('router: ', this.$router)
      console.log('route: ', this.$route)
    })
  }
}
</script>
