<template>
  <div class="product-options">
    <label class="product-options__label product-options__label--quantity">
      <div class="product-options__label-text">Количество:</div>

      <b-form-input v-model="quantity" type="number" min="1" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'ProductOptions',
  props: {
    value: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: true,
      default: () => null
    }
  },
  data () {
    return {
      quantity: this.value.quantity
    }
  },
  watch: {
    quantity () {
      this.$emit('input', {
        quantity: +this.quantity
      })
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/common";

.product-options {
  &__label {
    max-width: 150px;

    &--quantity {
      max-width: 70px;
    }

    &--maternity select {
      transform: translateY(-2px);
    }
  }

  &__label-text {
    &--maternity {
      transform: translateY(-2px);
    }
  }

  input, select {
    &:focus {
      border: none;
      outline: none !important;
      box-shadow: none;
    }
  }
}
</style>
