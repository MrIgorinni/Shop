import { TProduct } from '../../../../interfaces/product.interface'
import {
  Brand,
  EmptyProducts,
  Id,
  Price,
  ProductBox,
  ProductListBox,
  Title,
} from './ProductsList.styled'

const ProductsList = ({
  products,
  isLoading,
}: {
  products: TProduct[]
  isLoading: boolean
}) => {
  return (
    <ProductListBox>
      {products.length === 0 && (
        <EmptyProducts>
          <p>{isLoading ? 'Идёт загрузка...' : 'Список товаров пуст'}</p>
        </EmptyProducts>
      )}
      {products.length !== 0 &&
        products.map((product) => (
          <ProductBox key={product.id} $isLoading={isLoading}>
            <Id>{product.id}</Id>
            {product.brand && <Brand>{product.brand}</Brand>}
            <Title>{product.product}</Title>
            <Price>{product.price}</Price>
          </ProductBox>
        ))}
    </ProductListBox>
  )
}

export default ProductsList
