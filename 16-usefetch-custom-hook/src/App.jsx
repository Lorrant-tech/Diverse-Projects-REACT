import useFetch from "./customHooks/useFetch"

function App() {

  const { data, error, pending } = useFetch('https://dummyjson.com/products', {})

  console.log(error, data, pending)

  return (
    <div>
      <h1>useFetch Hook</h1>
      {
        pending ? <h3>Pending... Please wait</h3> : null
      }
      {
        error ? <h3>{error}</h3> : null
      }

      {
        data && data.products && data.products.length ?
        data.products.map(productItem => <p key={productItem.key}>{productItem.title}</p>) : null
      }
    </div>
  )
}

export default App
