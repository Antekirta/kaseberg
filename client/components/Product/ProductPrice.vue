<template>
  <div class="product-price">
    {{ price }} <span class="product-price__padding">руб / {{ unit }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: {
    product: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    price () {
      const { price } = this.product

      return price
    },
    unit () {
      return this.product.unit || 'шт.'
    }
  }
}
</script>

<style lang="scss" scoped>
.product-price {
  font-size: 24px;
  font-weight: 100;

  &__padding {
    font-size: 16px;
    //opacity: 0.8;
  }
}
</style>
