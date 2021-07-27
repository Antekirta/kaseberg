<template>
  <NuxtLink :to="link" class="product-item">
    <b-img :src="product.coverPrimary" :alt="product.description" class="product-item__img product-item__img--primary" />

    <b-img :src="product.coverSecondary" :alt="product.description" class="product-item__img product-item__img--secondary" />

    <div class="product-item__title mt-2">
      {{ product.title }}
    </div>

    <div class="product-item__description px-5">
      {{ product.subtitle }}
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
      default: () => null
    }
  },
  computed: {
    link () {
      const { product } = this

      return `/category/${product.urlAlias}?id=${product._id}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/colors";

.product-item {
  $this: &;

  width: 100%;
  overflow: hidden;
  text-transform: none;
  text-decoration: none;
  color: $my__color--black;

  &__title {
    font-size: 26px;
    letter-spacing: 0.5px;
  }

  &__description {
    font-size: 18px;
  }

  &__img {
    width: 100%;

    &--primary {
      display: block;
    }

    &--secondary {
      display: none;
    }
  }

  &:hover {
    opacity: 0.8;

    #{$this}__title {
      color: $my__color--gold;
    }

    #{$this}__img {
      &--primary {
        display: none;
      }

      &--secondary {
        display: block;
      }
    }
  }
}
</style>
