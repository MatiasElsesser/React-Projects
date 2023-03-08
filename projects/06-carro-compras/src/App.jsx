import { products as initialProducts } from '../mocks/products.json'
import { Products } from '../components/Products'
import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useFilters } from './hooks/useFilters'
// import { IS_DEVELOPMENT } from './config'
function App () {
  const [products] = useState(initialProducts)
  const { filterProducts, filters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {/* IS_DEVELOPMENT && <Footer filters={filters} /> */}
      <Footer filters={filters} />
    </>
  )
}

export default App
