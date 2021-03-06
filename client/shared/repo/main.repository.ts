import axios from 'axios'
import { Product } from '../../../server/dist/modules/Product/schemas/product.schema'
import { Category } from '../../../server/dist/modules/Category/schemas/category.schema'

const base = 'http://localhost:5000'

export const getCategories = (): Promise<Category[]> => {
  return axios.get(`${base}/category`)
    .then(({ data }) => data)
}

export const getCategoryById = (id: string): Promise<Category> => {
  return axios.get(`${base}/category/${id}`)
    .then(({ data }) => data)
}

export const getProductByIds = (ids: string[]): Promise<Product[]> => {
  return axios.get(`${base}/products`, {
    params: {
      ids
    }
  })
    .then(({ data }) => data)
}

export const getCategoriesWithProducts = (): Promise<Product[]> => {
  return axios.get(`${base}/products`)
    .then(({ data }) => data)
}

export const getPopularProducts = (): Promise<Product[]> => {
  return axios.get(`${base}/products/popular`)
    .then(({ data }) => data)
}

export const getProductById = (id: string): Promise<Product> => {
  return axios.get(`${base}/products/${id}`)
    .then(({ data }) => data)
}

export const commitOrder = (dto : any): Promise<any> => {
  return axios.post(`${base}/order`, dto)
    .then(({ data }) => data)
}
