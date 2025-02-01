import { useState } from 'react'
import Star from './components/Star.jsx'

function App() {
  const [selected, setSelected] = useState(null)
  const [hoverId, setHoverId] = useState(null)

  let numberOfStars = 5
  let ratingArray = []

  for (let i = 0; i < numberOfStars; i++) {
    const id = i + 1 // i + 1 to match the number of stars
    ratingArray.push(
      <Star
        key={id} 
        id={id}
        handleSelectedStar={handleSelectedStar}
        handleHoverStar={handleHoverStar}
        handleExitHoverStar={handleExitHoverStar}
        active={id <= (hoverId || selected) ? 'active' : 'innactive'}
      />
    )
  }

  function handleHoverStar(currentId) {
    setHoverId(currentId)
  }

  function handleExitHoverStar() {
    setHoverId(null)
  }

  function handleSelectedStar(currentId) {
    currentId === selected ? setSelected(null) : setSelected(currentId)
  }
  

  return (
    <div className='rating-container'>
      {ratingArray}
    </div>
  )
}

export default App
