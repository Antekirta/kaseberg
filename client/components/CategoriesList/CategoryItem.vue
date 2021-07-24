<template>
  <NuxtLink :to="`/products#${category.urlAlias}`" class="category-item">
    <b-img-lazy :src="category.cover" :alt="category.description" class="category-item__img" />

    <div class="category-item__title mt-2">
      {{ category.title }}
    </div>

    <div class="category-item__description">
      {{ category.description }}
    </div>
  </NuxtLink>
</template>

<script lang="ts">

import { Category } from '../../../server/dist/modules/Category/schemas/category.schema'

export default {
  name: 'CategoryItem',
  props: {
    category: {
      type: Object,
      required: true,
      default: () : Category | null => null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/colors";

.category-item {
  $this: &;

  display: block;
  width: 100%;
  overflow: hidden;
  color: $my__color--black;

  &__title {
    font-size: 26px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  &__description {
    font-size: 18px;
    text-transform: none;
  }

  &__img {
    display: block;
    width: 100%;
  }

  &:hover {
    text-decoration: none;
    opacity: 0.8;

    #{$this}__title {
      color: $my__color--gold;
    }
  }
}
</style>
