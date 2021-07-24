<template>
  <div id="index-page" class="px-lg-0">
    <page-section class="pt-5">
      <div class="products">
        <section
          v-for="category in categories"
          :key="category.id"
          class="products__section"
        >
          <a :name="category.urlAlias" /> <br>
          <h2 class="products__category-title">
            / {{ category.categoryTitle }}
          </h2>

          <hr class="products__hr mt-2 mb-5">

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
    </page-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageSection from '~/components/PageSection.vue'
import ProductItem from '~/components/ProductsList/ProductItem.vue'
import { getCategoriesWithProducts } from '~/shared/repo/main.repository'

export default Vue.extend({
  components: {
    PageSection,
    ProductItem
  },
  async asyncData () {
    const [categories] = await Promise.all([
      getCategoriesWithProducts()
    ])

    return {
      categories
    }
  },
  mounted () {
    const $anchor = document.querySelector(`[name="${location.hash.replace('#', '')}"]`)

    if ($anchor) {
      $anchor.scrollIntoView()
    }
  }
})
</script>

<style lang="scss" scoped>
.products {
  &__category-title {
    text-transform: none;
    text-align: left;
  }
}
</style>
