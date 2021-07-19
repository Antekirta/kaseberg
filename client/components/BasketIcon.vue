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
    title() {
      return 'Корзина пуста';
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/colors";

.basket-icon {
  &__icon {
    cursor: pointer;

    &:hover {
      fill: $my__color--gold;
    }
  }
}
</style>
