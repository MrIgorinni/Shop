import md5 from 'md5'

export const generateXAuth = () => {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
  const password = 'Valantis'
  return md5(`${password}_${timestamp}`)
}

export const clearOfDuplicateElem = <T extends { id: string }>(
  array: T[]
): T[] => {
  const uniqueIds = new Set<string>()
  const clearArray = array.filter((item) => {
    if (uniqueIds.has(item.id)) {
      return false
    } else {
      uniqueIds.add(item.id)
      return true
    }
  })

  return clearArray
}

// решение без использования axios-retry
export const handleRepeatRequest = async <TCallback, TProps>({
  callback,
  props,
  showError,
  count = 1,
}: {
  callback: (props: any) => Promise<TCallback>
  props: TProps
  showError: (error: any) => void
  count?: number
}): Promise<TCallback> => {
  try {
    return await callback(props)
  } catch (error: any) {
    if (count >= 5) throw new Error(error)
    showError(error)
    return await handleRepeatRequest({
      callback,
      props,
      showError,
      count: count + 1,
    })
  }
}
