<template>
  <ul class="main-menu">
    <li v-for="item in items" :key="item.link" class="main-menu__item mr-4">
      <a :href="item.link" class="main-menu__link">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'MainMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/colors";

.main-menu {
  display: flex;

  &__item {
    list-style-type: none;
  }

  &__link {
    font-size: 20px;
    font-weight: 300;
    color: $my__color--black;

    &:hover {
      text-decoration: none;
      color: $my__color--gold;
    }
  }
}
</style>
