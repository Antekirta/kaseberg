<template>
  <div id="index-page" class="pt-5">
    <main-carousel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainCarousel from '~/components/MainCarousel.vue'

export default Vue.extend({
  components: {
    MainCarousel
  }
})
</script>
