<template>
  <div class="categories-with-products-list">
    <section
      v-for="category in categories"
      :key="category.id"
      class="categories-with-products-list__section"
    >
      <a :name="category.urlAlias" /> <br>
      <h2 class="categories-with-products-list__category-title">
        / {{ category.categoryTitle }}
      </h2>

      <hr class="categories-with-products-list__hr mt-2 mb-5">

      <b-row class="mx-0">
        <b-col
          v-for="product in category.products"
          :key="product.title"
          col
          cols="12"
          xl="3"
          lg="6"
          class="mb-5"
        >
          <product-item :product="product" />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import ProductItem from '~/components/ProductsList/ProductItem'

export default {
  name: 'CategoriesWithProductsList',
  components: {
    ProductItem
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.categories-with-products-list {
  &__category-title {
    text-transform: none;
    text-align: left;
  }
}
</style>
