import { useRef, useState } from "react"
import useOutsideClick from "./useOutsideClick"

function App() {
  const [showContent, setShowContent] = useState(false)
  const ref = useRef()
  useOutsideClick(ref, () => {setShowContent(false)})

  

  return (
    <div>
      {
        showContent ? 
          <div ref={ref} className="content-container">
            <h1>This is a random content</h1>
            <p>Please, click outside to close this. It won't close if you click inside.</p>
          </div>
          :
          <button onClick={() => setShowContent(true)}>Show Content</button>
      }
    </div>
  )
}

export default App
