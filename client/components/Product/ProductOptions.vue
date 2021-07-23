<template>
  <div class="product-options">
    <label class="product-options__label product-options__label--amount">
      <div class="product-options__label-text">Количество:</div>
      <b-form-input v-model="amount" type="number" min="1" />
    </label>

    <label class="product-options__label product-options__label--maternity ml-2">
      <div class="product-options__label-text product-options__label-text--maternity">Степень зрелости:</div>
      <b-form-select v-model="maternity" :options="maternityOptions" />
    </label>
  </div>
</template>

<script lang="ts">
import { CHEESE_MATERNITY } from '../../../server/src/registry/PRODUCT_OPTIONS'

// TODO Добавлять камамберы разной степени зрелости одновременно

export default {
  name: 'ProductOptions',
  data () {
    return {
      amount: 1,
      maternity: CHEESE_MATERNITY.YOUNG,
      maternityOptions: [
        {
          value: CHEESE_MATERNITY.YOUNG,
          text: 'Молодой'
        },
        {
          value: CHEESE_MATERNITY.MATURE,
          text: 'Зрелый'
        },
        {
          value: CHEESE_MATERNITY.SUPER_MATURE,
          text: 'Очень зрелый'
        }
      ]
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
