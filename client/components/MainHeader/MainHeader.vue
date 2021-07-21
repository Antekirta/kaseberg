<template>
  <b-container class="main-header pb-2 pt-4" fluid="xl">
    <b-row class="justify-content-center justify-content-md-start">
      <b-col cols="5" class="d-none d-lg-block">
        <main-menu :items="mainMenuItems" />
      </b-col>

      <b-col cols="12" col lg="2">
        <logo is-text class="main-header__logo" />
      </b-col>

      <b-col cols="4" class="d-none d-lg-block">
        <main-menu :items="mainMenuSocials" />
      </b-col>

      <b-col cols="12" col lg="1">
        <basket-icon />
      </b-col>
    </b-row>

    <hamburger-menu class="main-header__hamburger" />
  </b-container>
</template>

<script lang="ts">
import MainMenu from '~/components/MainMenu/MainMenu.vue'
import BasketIcon from '~/components/BasketIcon.vue'
import Logo from '~/components/Logo.vue'
import { IMainMenuItem } from '~/shared/interfaces/main-menu'
import HamburgerMenu from '~/components/MainMenu/HamburgerMenu.vue'

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
    MainMenu,
    BasketIcon,
    Logo,
    HamburgerMenu
  },
  data: () => ({
    mainMenuItems,
    mainMenuSocials
  })
}
</script>

<style lang="scss" scoped>
@import "assets/styles/common";

.main-header {
  &__logo {
    transform: translateY(-7px);
    font-size: 30px;

    @media all and (max-width: map-get($grid-breakpoints, 'sm')) {
      transform: translateY(-22px);
    }
  }

  &__hamburger {
    display: none;

    @media all and (max-width: map-get($grid-breakpoints, 'sm')) {
      display: block;
    }
  }
}
</style>
