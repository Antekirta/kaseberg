<template>
  <b-container class="main-header py-3" fluid="xl">
    <b-row>
      <b-col cols="5">
        <main-menu :items="mainMenuItems" />
      </b-col>

      <b-col cols="2">
        <logo is-text class="main-header__logo" />
      </b-col>

      <b-col cols="4">
        <main-menu :items="mainMenuSocials" />
      </b-col>

      <b-col cols="1">
        <basket-icon />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import MainMenu from '~/components/MainMenu.vue'
import BasketIcon from '~/components/BasketIcon.vue'
import Logo from '~/components/Logo.vue'
import { IMainMenuItem } from '~/shared/interfaces/main-menu'

const mainMenuItems : IMainMenuItem[] = [
  {
    text: 'Главная',
    link: '/'
  },
  {
    text: 'Магазин',
    link: '/shop'
  },
  {
    text: 'Обо мне',
    link: '/about'
  },
  {
    text: 'Контакты',
    link: '/contacts'
  }
]

const mainMenuSocials : IMainMenuItem[] = [
  {
    text: 'Instagram',
    link: '/'
  },
  {
    text: 'VK',
    link: '/shop'
  },
  {
    text: 'Avito',
    link: '/about'
  }
]

export default {
  name: 'MainHeader',
  components: {
    MainMenu, BasketIcon, Logo
  },
  data: () => ({
    mainMenuItems,
    mainMenuSocials
  })
}
</script>

<style lang="scss" scoped>
.main-header {
  //outline: solid 1px #222;
  font-family: 'Open Sans Condensed', sans-serif;

  &__logo {
    transform: translateY(-7px);
    font-size: 30px;
  }
}
</style>
