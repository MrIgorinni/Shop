import { LIMIT_DISPLAYED_PRODUCTS } from '../../utils/constants'
import { ArrowButton, Box, Container, NumberButton } from './Pagination.styled'
import ArrowSvg from './components/ArrowSvg'

type PaginationProps = {
  currentPage: number
  isLoading: boolean
  productsCount: number | null
  handleGetProductsIds: (args: {
    offset: number
    newPageNumber?: number | undefined
  }) => Promise<void>
}

const Pagination = ({
  currentPage,
  isLoading,
  productsCount,
  handleGetProductsIds,
}: PaginationProps) => {
  const handleNumberClick = (newPageNumber: number) => {
    const newOffset =
      newPageNumber * LIMIT_DISPLAYED_PRODUCTS - LIMIT_DISPLAYED_PRODUCTS
    handleGetProductsIds({ offset: newOffset, newPageNumber })
  }

  const isDisplayNextPage = (() => {
    if (productsCount === null) return true
    if (currentPage * LIMIT_DISPLAYED_PRODUCTS < productsCount) return true
    return false
  })()

  return (
    <Container>
      <Box>
        {currentPage >= 2 && (
          <ArrowButton
            disabled={isLoading}
            onClick={() => handleNumberClick(currentPage - 1)}
          >
            <ArrowSvg rotation={0} />
          </ArrowButton>
        )}
        {currentPage > 1 && (
          <NumberButton
            disabled={isLoading}
            onClick={() => handleNumberClick(currentPage - 1)}
          >
            {currentPage - 1}
          </NumberButton>
        )}
        <NumberButton $isCurrentPage={true} disabled={isLoading}>
          {currentPage}
        </NumberButton>
        {isDisplayNextPage && (
          <>
            <NumberButton
              disabled={isLoading}
              onClick={() => handleNumberClick(currentPage + 1)}
            >
              {currentPage + 1}
            </NumberButton>
            <ArrowButton
              disabled={isLoading}
              onClick={() => handleNumberClick(currentPage + 1)}
            >
              <ArrowSvg rotation={180} />
            </ArrowButton>
          </>
        )}
      </Box>
    </Container>
  )
}

export default Pagination
