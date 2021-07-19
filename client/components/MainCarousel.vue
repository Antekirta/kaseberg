<template>
  <b-carousel class="main-carousel" controls>
    <b-carousel-slide
      class="main-carousel__slide"
      caption-html="Восхитительный камамбер"
      text-html="eee"
      img-src="https://static.wixstatic.com/media/f61af8_817eb9220c8d44b1b64f653d065084f9~mv2_d_2540_1400_s_2.jpg/v1/fill/w_1260,h_700,al_c,q_85,usm_0.66_1.00_0.01/f61af8_817eb9220c8d44b1b64f653d065084f9~mv2_d_2540_1400_s_2.webp"
    />
    <b-carousel-slide class="main-carousel__slide" caption="second slide" img-src="https://static.wixstatic.com/media/f61af8_c8c41a32bb184101817e356580044a1f~mv2_d_2540_1400_s_2.jpg/v1/fill/w_1260,h_700,al_c,q_85,usm_0.66_1.00_0.01/f61af8_c8c41a32bb184101817e356580044a1f~mv2_d_2540_1400_s_2.webp" />
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'

export default {
  name: 'MainCarousel',
  components: {
    BCarousel,
    BCarouselSlide
  }
}
</script>

<style lang="scss" scoped>
.main-carousel {
  &__slide {
    transition: 1s;
    font-family: 'Open Sans Condensed', sans-serif;
  }
}
</style>
