<template>
  <div class="product-options">
    <label class="product-options__label product-options__label--amount">
      <div class="product-options__label-text">Количество:</div>
      <b-form-input v-model="amount" type="number" min="1" />
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductOptions',
  props: {
    product: {
      type: Object,
      required: true,
      default: ()  => null
    }
  },
  data () {
    return {
      amount: 1
    }
  },
  watch: {
    amount () {
      this.$emit('change', this.amount)
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/common";

.product-options {
  &__label {
    max-width: 150px;

    &--amount {
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
