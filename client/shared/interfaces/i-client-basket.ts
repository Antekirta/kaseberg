export interface IClientBasketProduct {
  id: string,
  quantity: number
}

export interface IClientBasket {
  // key is a product id, value is a quantity
  [index:string]: number
}
