<template>
  <div class="add-to-basket">
    <b-button variant="dark" size="lg" @click="addToBasket">
      Добавить в корзину
    </b-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { MUTATIONS } from '@/store'

export default {
  name: 'AddToBasket',
  props: {
    productId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations([MUTATIONS.M_ADD_TO_BASKET]),

    addToBasket () {
      this[MUTATIONS.M_ADD_TO_BASKET]({
        id: this.productId,
        quantity: this.quantity
      })
    }
  }
}
</script>
