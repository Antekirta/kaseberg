<template>
  <div>
    <button ref="root" class="hamburger-menu" :class="{active: isOpen}" @click="toggleMenu">
      <span />
      <span />
      <span />
    </button>

    <transition name="slide">
      <main-menu v-if="isOpen" :items="mainMenuItems" fullscreen />
    </transition>
  </div>
</template>

<script>
import MainMenu from '~/components/MainMenu/MainMenu.vue'

const mainMenuItems = [
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

export default {
  name: 'HamburgerMenu',
  components: {
    MainMenu
  },
  data: () => ({
    mainMenuItems,
    isOpen: false
  }),
  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/common";

.hamburger-menu {
  position: fixed;
  top: -3px;
  left: -10px;
  width: 65px;
  height: 45px;
  z-index: 100;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  transform: scale(0.5);

  span {
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: $my__color--black;
    left: 0;
    border-radius: 10px;
    transition: 225ms;

    &:nth-child(1) {
      top: 0;
      width: 50%;
    }

    &:nth-child(2) {
      top: calc(50% - 5px);
    }

    &:nth-child(3) {
      bottom: 0;
      width: 50%;
      left: 30px;
    }
  }

  &.active span {
    background-color: $my__color--gold;

    &:nth-child(1) {
      top: calc(25% - 4px);
      left: 2px;
      transform: rotate(225deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }

    &:nth-child(3) {
      left: calc(26px);
      bottom: calc(25% - 5px);
      transform: rotate(225deg);
    }
  }
}

.slide-enter-active, .slide-leave-active {
  transition: transform .5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100vw);
}
</style>
