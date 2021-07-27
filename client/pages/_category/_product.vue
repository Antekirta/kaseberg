<template>
  <b-container class="product p-5 my-5">
    <breadcrumbs :breadcrumbs="breadcrumbs" />

    <b-row class="mt-5">
      <b-col cols="12" col lg="5">
        <product-images :product="product" />
      </b-col>

      <b-col cols="12" col lg="7">
        <product-title :product="product" />

        <product-price :product="product" class="mt-3" />

        <product-options v-model="productOptions" :product="product" class="mt-3" />

        <add-to-basket :product-id="product._id" :quantity="productOptions.quantity" class="mt-3" />

        <product-description :product="product" class="mt-5" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import ProductImages from '~/components/Product/ProductImages.vue'
import ProductTitle from '~/components/Product/ProductTitle.vue'
import ProductPrice from '~/components/Product/ProductPrice.vue'
import ProductOptions from '~/components/Product/ProductOptions.vue'
import AddToBasket from '~/components/Product/AddToBasket.vue'
import ProductDescription from '~/components/Product/ProductDescription.vue'
import { getCategoryById, getProductById } from '~/shared/repo/main.repository'

export default {
  name: 'Product',
  components: {
    Breadcrumbs,
    ProductImages,
    ProductTitle,
    ProductPrice,
    ProductOptions,
    AddToBasket,
    ProductDescription

  },
  async asyncData (ctx) {
    const { query } = ctx

    const product = await getProductById(query.id)
    const category = await getCategoryById(product.category)

    return {
      product,
      category
    }
  },
  data () {
    return {
      productOptions: {
        quantity: 1
      }
    }
  },
  computed: {
    breadcrumbs () {
      return [
        {
          text: this.category.title,
          link: `/products#${this.category.urlAlias}`
        },
        {
          text: this.product.title,
          link: ''
        }
      ]
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
