<template>
  <div class="categories-list">
    <b-row class="mx-0">
      <b-col
        v-for="category in categories"
        :key="category.id"
        col
        cols="12"
        xl="4"
        lg="6"
        class="mb-5"
      >
        <category-item :category="category" />
      </b-col>
    </b-row>

    <hr class="categories-list__hr">

    <ka-button class="categories-list__button">
      Смотреть всё
    </ka-button>
  </div>
</template>

<script lang="ts">
import { Category } from '../../../server/dist/modules/Category/schemas/category.schema'
import CategoryItem from '~/components/CategoriesList/CategoryItem.vue'
import KaButton from '~/components/form/KaButton.vue'

const categories : Category[] = []

export default {
  name: 'CategoriesList',
  components: {
    CategoryItem,
    KaButton
  },
  props: {
    categories: {
      type: Array,
      default: () => categories
    }
  }
}
</script>

<style lang="scss" scoped>
.categories-list {
  &__hr {
    margin-top: 40px;
  }

  &__button {
    transform: translateY(-34px);
  }
}
</style>
