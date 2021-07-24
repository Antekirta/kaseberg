<template>
  <div id="index-page" class="py-5 px-lg-0">
    <main-carousel />

    <page-section title=" / Магазин" class="pt-5">
      <categories-list :categories="categories" />
    </page-section>

    <page-section title=" / Самые популярные и вкусные товары 😉" class="pt-5">
      <products-list :products="popularProducts" />
    </page-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageSection from '~/components/PageSection.vue'
import MainCarousel from '~/components/MainCarousel.vue'
import CategoriesList from '~/components/CategoriesList/CategoriesList.vue'
import ProductsList from '~/components/ProductsList/ProductsList.vue'
import { getCategories, getPopularProducts } from '~/shared/repo/main.repository'

export default Vue.extend({
  components: {
    PageSection,
    MainCarousel,
    CategoriesList,
    ProductsList
  },
  async asyncData () {
    const [categories, popularProducts] = await Promise.all([
      getCategories(),
      getPopularProducts()
    ])

    return {
      categories,
      popularProducts
    }
  }
})
</script>
