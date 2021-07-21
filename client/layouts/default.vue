<template>
  <div>
    <main-header />

    <!--    <cheesy-sidebar />-->

    <!--    <main-sidebar />-->

    <b-container class="px-0 px-lg-2">
      <nuxt />
    </b-container>

    <main-footer />
  </div>
</template>

<script>
import CheesySidebar from '@/components/CheesySidebar.vue'
import MainHeader from '../components/MainHeader/MainHeader'
import MainSidebar from '../components/MainSidebar/MainSidebar'
import MainFooter from '../components/MainFooter/MainFooter'

export default {
  components: {
    CheesySidebar,
    MainHeader,
    MainSidebar,
    MainFooter
  }
}
</script>
