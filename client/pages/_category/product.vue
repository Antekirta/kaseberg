<template>
  <b-container class="product p-5 my-5">
    <span>breadcrumbs</span>

    <b-row class="mt-5">
      <b-col cols="12" col lg="5">
        <product-images :product="product" />
      </b-col>

      <b-col cols="12" col lg="7">
        <product-title :product="product" />

        <product-price :product="product" class="mt-3" />

        <product-options class="mt-3" />

        <add-to-basket class="mt-3" />

        <product-description :product="product" class="mt-5" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Product } from '../../../server/dist/modules/Product/schemas/product.schema'
import ProductImages from '~/components/Product/ProductImages.vue'
import ProductTitle from '~/components/Product/ProductTitle.vue'
import ProductPrice from '~/components/Product/ProductPrice.vue'
import ProductOptions from '~/components/Product/ProductOptions.vue'
import AddToBasket from '~/components/Product/AddToBasket.vue'
import ProductDescription from '~/components/Product/ProductDescription.vue'
import { getProductById } from '~/shared/repo/main.repository'

export default {
  name: 'Product',
  components: {
    ProductImages,
    ProductTitle,
    ProductPrice,
    ProductOptions,
    AddToBasket,
    ProductDescription

  },
  async asyncData (ctx: Context): Promise<{product: Product}> {
    const { query } = ctx

    const product : Product = await getProductById(query.id as string)

    return {
      product
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/common";

.product {
  background-color: $my__color--grey;
}
</style>
