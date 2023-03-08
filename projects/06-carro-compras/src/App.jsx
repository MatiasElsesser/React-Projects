import { products as initialProducts } from '../mocks/products.json'
import { Products } from '../components/Products'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useFilters } from './hooks/useFilters'
import { Cart } from '../components/Cart'
// import { IS_DEVELOPMENT } from './config'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {/* IS_DEVELOPMENT && <Footer filters={filters} /> */}
      <Footer />
    </>
  )
}

export default App