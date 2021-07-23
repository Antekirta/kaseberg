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
import { Product } from '../../../server/dist/modules/Product/schemas/product.schema'

const component = {
  name: 'ProductTitle',
  props: {
    product: {
      type: Object,
      default: () : Product | null => null
    }
  },
  computed: {
    title () : string {
      const product : Product = this.product

      return product.title
    },
    subtitle () {
      return ''
    }
  }
}

export default component
</script>
