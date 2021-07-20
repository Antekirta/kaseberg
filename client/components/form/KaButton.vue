<template>
  <b-button class="ka-button" squared v-bind="$attrs">
    <slot />
  </b-button>
</template>

<script>
export default {
  name: 'KaButton'
}
</script>

<style lang="scss" scoped>
.ka-button {
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
