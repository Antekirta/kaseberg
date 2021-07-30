<template>
  <div class="add-to-basket">
    <b-button id="add-to-basket" class="add-to-basket__btn" variant="dark" size="lg" @click="addToBasket">
      Добавить в корзину
    </b-button>

    <b-tooltip
      target="add-to-basket"
      :title="tooltipTitle"
      triggers="click"
      :show="isTooltipVisible"
      variant="dark"
      placement="topright"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
    },
    tooltipTimeout: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      isTooltipVisible: false,
      tooltipTitle: 'Товар успешно добавлен в корзину! 🥳'
    }
  },
  computed: {
    ...mapState(['basket'])
  },
  methods: {
    ...mapMutations([MUTATIONS.M_ADD_TO_BASKET]),

    addToBasket () {
      if (this.basket[this.productId]) {
        this.tooltipTitle = 'А этот товар уже добавлен в корзину 😉 Вон она, в правом верхнем углу ↗'
      } else {
        this.tooltipTitle = 'Товар успешно добавлен в корзину! 🥳'
      }

      if (!this.isTooltipVisible) {
        this.isTooltipVisible = true

        setTimeout(() => {
          this.isTooltipVisible = false
        }, this.tooltipTimeout)
      }

      this[MUTATIONS.M_ADD_TO_BASKET]({
        id: this.productId,
        quantity: this.quantity
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-to-basket {
  &__btn {
    box-shadow: none!important;
  }
}
</style>
