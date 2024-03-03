import axios from 'axios'
import { clearOfDuplicateElem, generateXAuth } from '../utils/helpers'
import type { TProduct } from '../interfaces/product.interface'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

axiosInstance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['X-Auth'] = generateXAuth()
    config.headers['Content-Type'] = 'application/json'
  }
  return config
})

export const getProductsIds = async ({
  offset,
  limit,
}: {
  offset: number
  limit: number
}): Promise<string[]> => {
  const response = await axiosInstance.post('', {
    action: 'get_ids',
    params: { offset, limit },
  })
  return response.data.result
}

export const getProducts = async ({
  ids,
}: {
  ids: string[]
}): Promise<TProduct[]> => {
  const response = await axiosInstance.post('', {
    action: 'get_items',
    params: { ids },
  })
  return clearOfDuplicateElem(response.data.result)
}

export const filterProducts = async ({
  params,
}: {
  params: {
    brand?: string
    product?: string
    price?: string
  }
}) => {
  const response = await axiosInstance.post('', {
    action: 'filter',
    params,
  })
  return response.data.result
}
