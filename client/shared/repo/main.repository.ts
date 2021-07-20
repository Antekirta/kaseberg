import axios from 'axios'

const base = 'http://localhost:5000'

export const getCategories = () => {
  return axios.get(`${base}/category`)
    .then(({ data }) => data)
}

export const getProducts = () => {
  return axios.get(`${base}/products`)
    .then(({ data }) => data)
}
