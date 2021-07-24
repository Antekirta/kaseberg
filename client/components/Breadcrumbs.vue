<template>
  <b-row class="breadcrumbs justify-content-start">
    <div class="breadcrumbs__item">
      <NuxtLink class="breadcrumbs__link" to="/">
        Главная
      </NuxtLink>
    </div>

    <div v-for="breadcrumb in breadcrumbs" :key="breadcrumb.link" class="breadcrumbs__item ml-2">
      <NuxtLink v-if="breadcrumb.link" class="breadcrumbs__link" :to="breadcrumb.link">
        {{ breadcrumb.text }}
      </NuxtLink>

      <span v-else class="breadcrumbs__link">
        {{ breadcrumb.text }}
      </span>
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/common";

.breadcrumbs {
  &__item {
    &::after {
      content: '›';
      position: relative;
      top: 0;
      left: 3px;
    }

    &:last-of-type {
      &::after {
        content: '';
      }
    }
  }

  &__link {
    color: $my__color--black;

    &:hover {
      text-decoration: none;
      color: $my-_color--gold
    }
  }
}
</style>
