<template>
  <div class="product-description">
    <b-tabs content-class="mt-3">
      <b-tab class="product-description__tab" title="Описание" active>
        <div v-html="product.description" />
      </b-tab>
      <b-tab class="product-description__tab" title="Идеи 💡">
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab class="product-description__tab" title="Отзывы ⭐">
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'ProductDescription',
  props: {
    product: {
      type: Object,
      required: true,
      /** @return {Product | null} */
      default: () => null
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/common";

.product-description {
  .nav-link {
    color: $my__color--black !important;

    &.active {
      color: $my__color--gold !important;
    }
  }

  &__tab {
    font-size: 20px;
  }
}
</style>
