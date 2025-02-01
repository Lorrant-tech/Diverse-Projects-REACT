import { useEffect, useState } from "react"

function App() {
  const [isHex, setIsHex] = useState(true)
  const [color, setColor] = useState(generateHexColor())

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function generateHexColor() {
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    const letters = ['A','B','C','D','E','F']
    const newColor = []

    for (let i = 0; i < 6; i++) {
      const characterType = generateRandomNumber(0,1)

      if (characterType) {
        newColor.push(letters[generateRandomNumber(0,5)])
      } else {
        newColor.push(numbers[generateRandomNumber(0,9)])
      }
    }

    const newColorString = newColor.join('')
    //console.log(newColorString)
    return '#' + newColorString
  }

  function generateRGBColor() {
    return `rgb(${generateRandomNumber(0,255)},${generateRandomNumber(0,255)},${generateRandomNumber(0,255)})`
  }

  function handleHexColorChange() {
    setIsHex(true)
    handleChangeColor()
  }

  function handleRGBColorChange() {
    setIsHex(false)
    handleChangeColor()
  }

  function handleChangeColor() {
    setColor(isHex ? generateHexColor() : generateRGBColor())
  }

  useEffect(() => {
    handleChangeColor()
  }, [isHex])

  return (
    <div className="app-container" style={{backgroundColor: color}}>
      <div className="button-container">
        <button onClick={handleHexColorChange}>Generate Hex Color</button>
        <button onClick={handleRGBColorChange}>Generate RGB Color</button>
        <button onClick={handleChangeColor}>Generate New Color</button>
      </div>

      <h1 className="title">{isHex ? 'HEX' : 'RGB'}</h1>
      
      <p>{color}</p>
    </div>
  )
}

export default App
