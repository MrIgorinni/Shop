import { useEffect, useRef, useState } from 'react'
import { useErrorPopupContext } from '../../../../context/error'
import { filterProducts } from '../../../../api/product'
import { handleRepeatRequest } from '../../../../utils/helpers'
import {
  Box,
  FilterBtn,
  FilterPanelContainer,
  InputBox,
  Select,
  Text,
} from './FilterPanel.styled'

type FilterPanelProps = {
  isLoading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  handleGetProducts: (args: {
    ids: string[]
    newPageNumber?: number | undefined
    isFiltering?: boolean
  }) => Promise<void>
  handleGetProductsIds: (args: {
    offset: number
    newPageNumber?: number | undefined
    isFilterIgnore?: boolean
  }) => Promise<void>
}

const FilterPanel = ({
  isLoading,
  setIsLoading,
  handleGetProducts,
  handleGetProductsIds,
}: FilterPanelProps) => {
  const { showError } = useErrorPopupContext()
  const [filterBy, setFilterBy] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const changeFilterBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(e.target.value)
  }

  const filter = async () => {
    if (
      inputRef === null ||
      !inputRef?.current ||
      inputRef.current.value === ''
    )
      return
    try {
      setIsLoading(true)

      const value =
        filterBy === 'price' ? +inputRef.current.value : inputRef.current.value

      const ids = await handleRepeatRequest({
        callback: filterProducts,
        props: {
          params: {
            [filterBy]: value,
          },
        },
        showError,
      })
      await handleGetProducts({ ids, isFiltering: true })
    } catch (error) {
      setIsLoading(false)
      showError(error)
      console.error(error)
    }
  }

  useEffect(() => {
    if (filterBy === '')
      handleGetProductsIds({ offset: 0, isFilterIgnore: true })
  }, [filterBy])

  return (
    <FilterPanelContainer>
      <Box>
        <Text>Фильтрация по:</Text>
        <Select onChange={changeFilterBy} disabled={isLoading}>
          <option value=''>не выбрано</option>
          <option value='product'>названию</option>
          <option value='price'>цене</option>
          <option value='brand'>бренду</option>
        </Select>
        {filterBy && (
          <InputBox>
            <input
              disabled={isLoading}
              ref={inputRef}
              type={filterBy === 'price' ? 'number' : 'text'}
              placeholder='Введите значение...'
            />
          </InputBox>
        )}
        {filterBy && (
          <FilterBtn onClick={filter} disabled={isLoading}>
            Отфильтровать
          </FilterBtn>
        )}
      </Box>
    </FilterPanelContainer>
  )
}

export default FilterPanel
