import { IClientBasket, IClientBasketProduct } from '~/shared/interfaces/i-client-basket'
import { hasKey } from '~/shared/helpers/object'
import { localstorageCustom } from '~/modules/Localstorage'
import { IClientLocalstorageKeys } from '~/shared/interfaces/i-client-localstorage'

export interface IClientState {
  basket: IClientBasket
}

export const state = () : IClientState => ({
  basket: {} // being init in plugin
})

const saveBasketToLocalstorage = (basket : IClientBasket) => {
  localstorageCustom.set(IClientLocalstorageKeys.BASKET, JSON.stringify({
    ...basket
  }))
}

export const MUTATIONS = {
  M_INIT_BASKET: 'M_INIT_BASKET',
  M_ADD_TO_BASKET: 'M_ADD_TO_BASKET',
  M_REMOVE_FROM_BASKET: 'M_REMOVE_FROM_BASKET',
  M_CLEAR_BASKET: 'M_CLEAR_BASKET'
}

export const mutations = {
  [MUTATIONS.M_INIT_BASKET]: (s : IClientState, basket : IClientBasket) => {
    s.basket = { ...basket }

    saveBasketToLocalstorage(basket)
  },

  [MUTATIONS.M_ADD_TO_BASKET]: (s : IClientState, { id, quantity }: IClientBasketProduct) => {
    const { basket } = s

    basket[id] = quantity

    s.basket = { ...basket }

    saveBasketToLocalstorage(basket)
  },

  [MUTATIONS.M_REMOVE_FROM_BASKET]: (s: IClientState, productId : string) => {
    const { basket } = s

    if (hasKey(basket, productId)) {
      delete basket[productId]
    }

    s.basket = { ...basket }

    saveBasketToLocalstorage(basket)
  },

  [MUTATIONS.M_CLEAR_BASKET]: (s: IClientState) => {
    s.basket = {}

    saveBasketToLocalstorage(s.basket)
  }
}
