import { useState } from 'react'
import { useErrorPopupContext } from '../../context/error'
import { getProductsIds, getProducts } from '../../api/product'
import { LIMIT_DISPLAYED_PRODUCTS } from '../../utils/constants'
import { handleRepeatRequest } from '../../utils/helpers'
import Pagination from '../pagination'
import ProductsList from './components/productList'
import FilterPanel from './components/filterPanel'
import { TProduct } from '../../interfaces/product.interface'

const Products = () => {
  const { showError } = useErrorPopupContext()
  const [products, setProducts] = useState<TProduct[]>([])
  const [filteringProducts, setFilteringProducts] = useState<TProduct[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isUseFiltering, setIsUseFiltering] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGetProducts = async ({
    ids,
    newPageNumber,
    isFiltering,
  }: {
    ids: string[]
    newPageNumber?: number
    isFiltering?: boolean
  }) => {
    try {
      const products = await handleRepeatRequest({
        callback: getProducts,
        props: { ids },
        showError,
      })
      if (newPageNumber) setCurrentPage(newPageNumber)
      if (!newPageNumber) setCurrentPage(1)

      if (isFiltering) {
        setIsUseFiltering(true)
        setFilteringProducts(products)
        const newProducts = products.slice(0, LIMIT_DISPLAYED_PRODUCTS)
        setProducts(newProducts)
        return
      }

      setProducts(products)
      setFilteringProducts([])
      setIsUseFiltering(false)
    } catch (error) {
      showError(error)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetProductsIds = async ({
    offset,
    newPageNumber,
    isFilterIgnore,
  }: {
    offset: number
    newPageNumber?: number
    isFilterIgnore?: boolean
  }) => {
    try {
      if (isUseFiltering && !isFilterIgnore) {
        const lastIndex = offset + LIMIT_DISPLAYED_PRODUCTS
        const newProducts = filteringProducts.slice(offset, lastIndex)
        setProducts(newProducts)
        if (newPageNumber) setCurrentPage(newPageNumber)
        return
      }

      setIsLoading(true)
      const ids = await handleRepeatRequest({
        callback: getProductsIds,
        props: {
          offset,
          limit: LIMIT_DISPLAYED_PRODUCTS,
        },
        showError,
      })

      await handleGetProducts({ ids, newPageNumber })
    } catch (error) {
      setIsLoading(false)
      showError(error)
      console.error(error)
    }
  }

  return (
    <div>
      <FilterPanel
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleGetProducts={handleGetProducts}
        handleGetProductsIds={handleGetProductsIds}
      />
      <ProductsList products={products} isLoading={isLoading} />
      {products.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          isLoading={isLoading}
          productsCount={isUseFiltering ? filteringProducts.length : null}
          handleGetProductsIds={handleGetProductsIds}
        />
      )}
    </div>
  )
}

export default Products
