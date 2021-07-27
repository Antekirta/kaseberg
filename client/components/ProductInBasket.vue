<template>
  <b-row class="product-in-basket justify-content-start align-items-start">
    <b-col class="product-in-basket__col" cols="2">
      <NuxtLink :to="link" class="product-in-basket__img">
        <img width="70" height="70" :src="product.coverPrimary" :alt="product.title">
      </NuxtLink>
    </b-col>

    <b-col class="product-in-basket__col" cols="2">
      <div class="product-in-basket__description">
        <div class="product-in-basket__title mb-0">
          {{ product.title }}
        </div>

        <div class="product-in-basket__weight mt-2">
          {{ weight }}
        </div>
      </div>
    </b-col>

    <b-col class="product-in-basket__col" cols="3">
      <div class="product-in-basket__quantity">
        <button class="product-in-basket__quantity-button" :disabled="quantity <= 1 || quantity >= product.quantity" @click="decrease">
          -
        </button>
        <div class="product-in-basket__quantity-value">
          {{ quantity }}
        </div>
        <button class="product-in-basket__quantity-button" @click="increase">
          +
        </button>
      </div>
    </b-col>

    <b-col cols="2">
      <div class="product-in-basket__price">
        {{ price }} <span class="product-in-basket__currency">₽</span>
      </div>
    </b-col>

    <b-col class="product-in-basket__col pr-4" cols="3">
      <div class="product-in-basket__remove" @click="remove">
        <svg
          class="product-in-basket__remove-icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.001 512.001"
          style="enable-background:new 0 0 512.001 512.001;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
			L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
			c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
			c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"
              />
            </g>
          </g>
        </svg>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { MUTATIONS } from '@/store'

export default {
  name: 'ProductInBasket',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState(['basket']),

    quantity () {
      return this.basket[this.product._id]
    },

    link () {
      return `/category/${this.product.urlAlias}?id=${this.product._id}`
    },

    weight () {
      return `${this.quantity * this.product.weight}г`
    },

    price () {
      return this.product.price * this.quantity
    }
  },
  methods: {
    ...mapMutations([MUTATIONS.M_ADD_TO_BASKET, MUTATIONS.M_REMOVE_FROM_BASKET, MUTATIONS.M_CLEAR_BASKET]),

    increase () {
      this[MUTATIONS.M_ADD_TO_BASKET]({
        id: this.product._id,
        quantity: this.quantity + 1
      })
    },

    decrease () {
      this[MUTATIONS.M_ADD_TO_BASKET]({
        id: this.product._id,
        quantity: this.quantity - 1
      })
    },

    remove () {
      this[MUTATIONS.M_REMOVE_FROM_BASKET](this.product._id)

      this.$emit('remove')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/common";

.product-in-basket {
  $this: &;
  font-size: 24px;

  &__img {
    position: relative;
    z-index: 1;

    &:hover {
      opacity: 0.8;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__title {
    position: relative;
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: $my--color--black;
  }

  &__weight {
    font-size: 16px;
  }


  &__quantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70px;
    height: 30px;
    border: solid 1px $my__color--black;
    border-radius: 2px;
    user-select: none;
    transform: scale(0.9);
  }

  &__quantity-value {
    font-size: 16px;
  }

  &__quantity-button {
    background: none;
    border: none;
    cursor: pointer;
  }

  &__price {
    font-size: 18px;
  }

  &__currency {
    font-family: none;
    font-weight: 100;
    font-size: 16px;
  }

  &__remove {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
  }

  &__remove-icon {
    width: 10px;
    cursor: pointer;
    fill: $my__color--black;
    transition: .2s;

    &:hover {
      fill: $my__color--gold;
      transform: rotate(90deg);
    }
  }
}
</style>
