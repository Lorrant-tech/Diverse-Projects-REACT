import ProductsGrid from "./components/ProductsGrid"

function App() {
  const url = 'https://dummyjson.com/products'
  const limit = 20

  return (
    <>
      <ProductsGrid url={url} limit={limit}/>
    </>
  )
}

export default App
