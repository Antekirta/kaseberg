<template>
  <b-container class="basket-page mt-5">
    <h2 v-if="!products.length">
      Корзина пуста. Скорей же её наполните!
    </h2>

    <b-row v-else>
      <b-col cols="6">
        <h5 class="basket-page__title">
          Товары в корзине
        </h5>

        <div class="basket-page__products mt-4">
          <hr class="basket-page__hr my-4">

          <div v-for="product in products" :key="product._id" class="basket-page__product">
            <product-in-basket :product="product" class="mt-2" @remove="fetchProducts" />

            <hr class="basket-page__hr my-4">
          </div>
        </div>

        <label class="basket-page__label">
          Куда доставить? <br>
          <textarea v-model="deliveryAddress" placeholder="Укажите адрес доставки" class="basket-page__textarea mt-1 p-2" />
        </label>

        <label class="basket-page__label">
          Особые пожелания, комментарии? <br>
          <textarea
            v-model="comment"
            placeholder="Любая дополнительная информация. Можете просто передать привет 😉"
            class="basket-page__textarea mt-1 p-2"
          />
        </label>
      </b-col>

      <b-col cols="4" class="ml-5">
        <h5 class="basket-page__title">
          Детали заказа
        </h5>

        <div class="basket-page__details mt-4 pr-5">
          <hr class="basket-page__hr my-4">

          <div class="basket-page__detail pr-4">
            <div class="basket-page__detail-label">
              Сумма:
            </div>
            <div v-if="products.length" class="basket-page__detail-value">
              {{ sum }} <span class="basket-page__currency">₽</span>
            </div>
          </div>

          <div class="basket-page__detail pr-4">
            <div class="basket-page__detail-label">
              Доставка
            </div>
            <div v-if="products.length" class="basket-page__detail-value">
              {{ deliveryCost }} <span class="basket-page__currency">₽</span>
            </div>
          </div>

          <hr class="basket-page__hr my-4">

          <div class="basket-page__detail pr-4">
            <div class="basket-page__detail-label">
              Итого
            </div>
            <div v-if="products.length" class="basket-page__detail-value">
              {{ sum + deliveryCost }} <span class="basket-page__currency">₽</span>
            </div>
          </div>

          <div class="basket-page__order-btn py-2 mt-4">
            <svg
              class="basket-page__order-svg mr-2 mt-1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 329.458 329.458"
              style="enable-background:new 0 0 329.458 329.458;"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M150.493,312.365l18.232-93.682c4.284-22.037,25.621-43.35,47.666-47.601l79.79-15.42
		c22.037-4.251,23.548-15.68,3.373-25.516L40.594,3.975c-20.183-9.836-30.092-0.788-22.142,20.2l109.882,290.076
		C136.284,335.239,146.201,334.401,150.493,312.365z"
                />
              </g>
            </svg>

            <span v-b-modal.order-modal>Оформить заказ</span>

            <b-modal
              id="order-modal"
              title="Уже почти всё"
              :cancel-title-html="orderModal.cancelTitleHtml"
              :ok-title-html="orderModal.okTitleHtml"
              ok-variant="success"
              title-class="basket-page__modal-title"
              :ok-disabled="!phone"
              @ok="order"
            >
              <div class="basket-page__modal-content">
                Укажите свой номер телефона и нажмите кнопку "Заказать". Мне на почту придёт письмо, я с Вами свяжусь,
                и мы обсудим время доставки.

                <div class="basket-page__label mt-3">
                  <b>Телефон</b> (не ошибитесь, а до я до Вас не дозвонюсь!): * <br>
                  <input v-model="phone" placeholder="8911..." type="tel" class="basket-page__input mt-1 p-2">
                </div>
              </div>
            </b-modal>
          </div>
        </div>
      </b-col>
    </b-row>

    <b-toast
      v-model="isToasterVisible"
      toaster="b-toaster-top-full"
      variant="success"
      title="Ваш заказ успешно отправлен!"
      solid
      header-class="basket-page__toaster-header"
      body-class="basket-page__toaster-body"
      :auto-hide-delay="toasterTimeout"
    >
      Скоро я с Вами свяжусь! А до тех пор погуляйте по моему инстаграму: <a
        target="_blank"
        href="https://www.instagram.com/foam_born/"
      >Kaseberg39</a>
    </b-toast>
  </b-container>
</template>

<script>
import ProductInBasket from '@/components/ProductInBasket'
import { mapState, mapMutations } from 'vuex'
import { MUTATIONS } from '@/store'
import { commitOrder, getProductByIds } from '~/shared/repo/main.repository'

export default {
  name: 'Basket',
  components: {
    ProductInBasket
  },
  data () {
    return {
      products: [],
      deliveryAddress: '',
      comment: '',
      phone: '',
      orderModal: {
        isOpen: false,
        cancelTitleHtml: '<div class="basket-page__modal-btn basket-page__modal-btn--cancel">Вернуться в корзину</div>',
        okTitleHtml: '<div class="basket-page__modal-btn basket-page__modal-btn--ok">Заказать</div>'
      },
      isToasterVisible: false,
      toasterTimeout: 7000
    }
  },
  computed: {
    ...mapState(['basket']),

    sum () {
      return Object.keys(this.basket).reduce((acc, id) => {
        return this.basket[id] * this.products.find(({ _id }) => _id === id).price + acc
      }, 0)
    },

    deliveryCost () {
      return this.sum >= 600 ? 0 : 100
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    ...mapMutations([MUTATIONS.M_ADD_TO_BASKET, MUTATIONS.M_REMOVE_FROM_BASKET, MUTATIONS.M_CLEAR_BASKET]),

    async fetchProducts () {
      const ids = Object.keys(this.basket).map(key => key)

      if (ids.length) {
        this.products = await getProductByIds(ids)
      } else {
        this.products = []
      }
    },

    async order () {
      const dto = {
        deliveryAddress: this.deliveryAddress,
        comment: this.comment,
        promoCode: '',
        price: this.sum,
        weight: this.products.reduce((acc, { weight }) => {
          return acc + (weight || 0)
        }, 0),
        deliveryCost: this.deliveryCost,
        phone: this.phone,
        products: this.products.map((product) => {
          const quantity = this.basket[product._id]

          return {
            id: product._id,
            title: product.title,
            quantity,
            pricePerItem: product.price,
            sum: product.price * quantity
          }
        }),
        date: new Date()
      }

      await commitOrder(dto)

      console.log('dto: ', dto)

      this.isToasterVisible = true

      // this[MUTATIONS.M_CLEAR_BASKET]()

      // setTimeout(() => {
      //   this.$router.push({
      //     path: '/'
      //   })
      // }, this.toasterTimeout)
    }
  }
}
</script>

<style lang="scss">
@import "assets/styles/common";

.basket-page {
  $this: &;

  min-height: 80vh;

  &__title {
    font-size: 24px;
    font-weight: 600;
  }

  &__hr {
    border-top: solid 1px $my__color--black;
  }

  &__detail {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
  }

  &__detail-value {
    width: 100px;
    text-align: right;
  }

  &__currency {
    font-family: none;
    font-weight: 100;
    font-size: 16px;
  }

  &__order-svg {
    width: 20px;
    fill: $my__color--milk;
    transform: scale(-1, 1);
  }

  &__order-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px $my__color--black;
    background-color: $my__color--gold;
    border-radius: 1px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    color: $my__color--milk;
    cursor: pointer;
    transition: .1s;

    &:hover {
      background-color: $my__color--milk;
      color: $my__color--black;

      #{$this}__order-svg {
        fill: $my__color--black;
      }
    }
  }

  &__label {
    display: block;
    font-size: 18px;
  }

  &__input {
    width: 250px;
    height: 40px;
    border: solid 1px $my-_color--black;
    font-size: 20px;
    letter-spacing: 0.5px;
  }

  &__textarea {
    width: 300px;
    height: 100px;
    border: solid 1px $my-_color--black;
    resize: none;
  }

  &__modal-title {
    font-weight: 600;
    font-size: 24px;
  }

  &__modal-content {
    font-size: 20px;
    letter-spacing: 0.3px;
    line-height: 24px;
  }

  &__modal-btn {
    font-size: 22px;
  }

  &__toaster-header {
    font-size: 30px;
  }

  &__toaster-body {
    font-size: 24px;
  }
}

.b-toaster-top-full, .b-toaster-slot, #b-toaster-top-full {
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
}
</style>
