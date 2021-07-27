<template>
  <NuxtLink to="/" class="logo">
    <span v-if="isText">Kaseberg</span>
    <img v-else :width="width" src="/images/logo/logo--clean.png" alt="">
  </NuxtLink>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isText: Boolean,
    width: {
      type: Number,
      default: 50
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/colors";

.logo {
  display: block;
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  font-family: 'Deutsch Gothic';
  color: $my__color--gold;

  &:hover {
    color: $my__color--gold;
    text-decoration: none;
  }
}
</style>
