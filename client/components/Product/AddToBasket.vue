<template>
  <div class="add-to-basket">
    <b-button variant="dark" size="lg" @click="$emit('add-to-basket')">
      Добавить в корзину
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'AddToBasket'
}
</script>
