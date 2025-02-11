import useWindowResize from "./useWindowResize"


function App() {

  const windowSize = useWindowResize()
  const {width, height} = windowSize

  return (
    <div>
      <h1>Use Window Resize Hook</h1>
      <p>
        Width is {width}
      </p>
      <p>
        Heigth is {height}
      </p>
    </div>
  )
}

export default App
