<template>
  <div>
<!--    <main-header />-->

<!--    <main-sidebar />-->

    <b-container class="px-0 px-lg-2">
      <nuxt />
    </b-container>

<!--    <main-footer />-->
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader/MainHeader'
import MainSidebar from '../components/MainSidebar/MainSidebar'
import MainFooter from '../components/MainFooter/MainFooter'

export default {
  components: {
    MainHeader,
    MainSidebar,
    MainFooter
  }
}
</script>
