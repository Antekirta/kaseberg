<template>
  <div class="basket-icon pt-1">
    <b-icon-basket3-fill class="basket-icon__icon" scale="1.5" :title="title" />
  </div>
</template>

<script>
import { BIconBasket3Fill } from 'bootstrap-vue'

export default {
  components: {
    BIconBasket3Fill
  },
  computed: {
    title () {
      return 'Корзина пуста'
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/common";

.basket-icon {
  @media all and (max-width: map-get($grid-breakpoints, 'sm')) {
    position: fixed;
    top: 5px;
    right: 10px;
    z-index: 99;
  }

  &__icon {
    cursor: pointer;

    &:hover {
      fill: $my__color--gold;
    }
  }
}
</style>
