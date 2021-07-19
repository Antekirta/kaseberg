<template>
  <aside class="main-sidebar p-4">
    <logo />

    Main sidebar
  </aside>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/colors";

.main-sidebar {
  position: fixed;
  width: 150px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: $my__color--black;
}
</style>
