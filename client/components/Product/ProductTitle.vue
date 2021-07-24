<template>
  <main class="product-title">
    <h1 class="product-title__main-title">
      {{ title }}
    </h1>

    <h2 v-if="subtitle" class="product-title__subtitle">
      {{ subtitle }}
    </h2>
  </main>
</template>

<script lang="ts">
const component = {
  name: 'ProductTitle',
  props: {
    product: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    title () : string {
      const product = this.product

      return product.title
    },
    subtitle () {
      return ''
    }
  }
}

export default component
</script>
