import axios from 'axios'
import { Product } from '../../../server/dist/modules/Product/schemas/product.schema'
import { Category } from '../../../server/dist/modules/Category/schemas/category.schema'

const base = 'http://localhost:5000'

export const getCategories = () : Promise<Category> => {
  return axios.get(`${base}/category`)
    .then(({ data }) => data)
}

export const getProducts = () : Promise<Product[]> => {
  return axios.get(`${base}/products`)
    .then(({ data }) => data)
}

export const getProductById = (id: string) : Promise<Product> => {
  return axios.get(`${base}/products/${id}`)
    .then(({ data }) => data)
}
