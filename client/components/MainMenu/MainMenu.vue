<template>
  <b-row class="main-menu mx-0 justify-content-around" :class="{'main-menu--fullscreen': fullscreen}">
    <li v-for="item in items" :key="item.link" class="main-menu__item mx-0 mb-3 mr-lg-4">
      <NuxtLink :to="item.link" class="main-menu__link">
        {{ item.text }}
      </NuxtLink>
    </li>
  </b-row>
</template>

<script lang="ts">
export default {
  name: 'MainMenu',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    fullscreen: Boolean
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/common";

.main-menu {
  $this: &;
  display: flex;

  &__item {
    list-style-type: none;
  }

  &__link {
    font-size: 20px;
    font-weight: 300;
    color: $my__color--black;

    @media all and (max-width: map-get($grid-breakpoints, 'sm')) {
      font-size: 18px;
    }

    &:hover {
      text-decoration: none;
      color: $my__color--gold;
    }
  }

  &--fullscreen {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    padding-top: 100px;
    background-color: $my__color--milk;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start!important;

    #{$this}__link {
      font-size: 40px;
    }
  }
}
</style>
