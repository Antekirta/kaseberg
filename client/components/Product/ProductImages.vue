<template>
  <div class="product-images">
    <div class="product-images__main">
      <img :src="mainImage" :alt="product.title">
    </div>

    <div class="product-images__mini-list mt-3">
      <div v-for="(image, index) in miniImages" :key="image" class="product-images__item product-images__item--mini mr-2" @click="setMainImage(image, index)">
        <img :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductImages',
  props: {
    product: {
      type: Object,
      required: true,
      /** @return {Product | null} */
      default: () => null
    }
  },
  data () {
    return {
      mainImage: this.product.coverPrimary,
      miniImages: [
        this.product.coverPrimary,
        this.product.coverSecondary
      ]
    }
  },
  methods: {
    setMainImage (image, index) {
      this.miniImages.splice(index, 1)
      this.miniImages.push(this.mainImage)

      this.mainImage = image
    }
  }
}
</script>

<style lang="scss" scoped>
.product-images {
  &__main {
    img {
      width: 100%;
    }
  }

  &__mini-list {
    display: flex;
  }

  &__item {
    cursor: pointer;

    &--mini {
      img {
        width: 70px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
