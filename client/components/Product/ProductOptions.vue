<template>
  <div class="product-options">
    <label class="product-options__label product-options__label--amount">
      <div class="product-options__label-text">Количество:</div>
      <b-form-input v-model="amount" type="number" min="1" />
    </label>

    <label v-if="isMaternityVisible" class="product-options__label product-options__label--maternity ml-2">
      <div class="product-options__label-text product-options__label-text--maternity">Степень зрелости:</div>
      <b-form-select v-model="maternity" :options="maternityOptions" />
    </label>
  </div>
</template>

<script lang="ts">
import { CHEESE_MATERNITY, PRODUCT_TYPES } from '../../../server/src/registry/enums/PRODUCT'
import { ProductDocument } from '../../../server/src/modules/Product/schemas/product.schema'

// TODO Добавлять камамберы разной степени зрелости одновременно

export default {
  name: 'ProductOptions',
  props: {
    product: {
      type: Object,
      required: true,
      default: () : ProductDocument | null => null
    }
  },
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
  computed: {
    isMaternityVisible () : boolean {
      const product : ProductDocument = this.product

      return product.productType === PRODUCT_TYPES.CHEESE
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
