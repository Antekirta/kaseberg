<template>
  <div class="products-list">
    <b-row class="mx-0">
      <b-col
        v-for="product in products"
        :key="product.id"
        col
        cols="12"
        xl="4"
        lg="6"
        class="mb-5"
      >
        <product-item :product="product" />
      </b-col>
    </b-row>

    <hr class="products-list__hr">

    <ka-button class="products-list__button">
      Смотреть всё
    </ka-button>
  </div>
</template>

<script lang="ts">
import { Category } from '../../../server/dist/modules/Category/schemas/category.schema'
import ProductItem from '~/components/ProductsList/ProductItem.vue'
import KaButton from '~/components/form/KaButton.vue'

const products : Category[] = []

export default {
  name: 'ProductsList',
  components: {
    ProductItem,
    KaButton
  },
  props: {
    products: {
      type: Array,
      default: () => products
    }
  }
}
</script>

<style lang="scss" scoped>
.products-list {
  &__hr {
    margin-top: 60px;
  }

  &__button {
    transform: translateY(-34px);
  }
}
</style>
