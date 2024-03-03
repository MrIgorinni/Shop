import { createContext, useContext, useState } from 'react'

const ErrorPopupContext = createContext({
  error: null as string | null,
  showError: (error: any) => {},
})

export const useErrorPopupContext = () => useContext(ErrorPopupContext)

export const ErrorPopupProvider = ({ children }: { children: any }) => {
  const [error, setError] = useState<string | null>(null)

  const showError = (error: any) => {
    const errorData = error?.message || error?.error || error?.name || 'Error'
    const errorText =
      typeof errorData === 'string' ? errorData : JSON.stringify(errorData)
    setError(errorText)
    console.error(error)

    setTimeout(() => {
      setError(null)
    }, 5000)
  }

  return (
    <ErrorPopupContext.Provider value={{ error, showError }}>
      {children}
    </ErrorPopupContext.Provider>
  )
}
