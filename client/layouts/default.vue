<template>
  <div>
    <main-header />

    <main-sidebar />

    <b-container>
      <nuxt />
    </b-container>

    <main-footer />
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
