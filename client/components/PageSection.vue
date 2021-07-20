<template>
  <section class="page-section">
    <header class="page-section__title pb-4">
      <h2>{{ title }}</h2>
    </header>

    <slot />
  </section>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.page-section {
  text-align: center;
  text-transform: uppercase;
}
</style>
