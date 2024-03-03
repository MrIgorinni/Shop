import { ErrorPopupProvider, useErrorPopupContext } from './context/error'
import Header from './components/header'
import Products from './components/products'
import { Container, ErrorPopup } from './styles/App.styled'

const App = () => {
  const { error } = useErrorPopupContext()

  return (
    <Container>
      {error && <ErrorPopup>{error}</ErrorPopup>}
      <Header />
      <Products />
    </Container>
  )
}

const AppWithProvider = () => (
  <ErrorPopupProvider>
    <App />
  </ErrorPopupProvider>
)

export default AppWithProvider
