import { useRef } from "react"


function App() {

  const ref = useRef()

  const data = [
    {
      label: 'First Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'red'
      },
    },
    {
      label: 'Second Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'orange'
      },
    },
    {
      label: 'Third Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'green'
      },
    },
    {
      label: 'Fourth Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'blue'
      },
    },
    {
      label: 'Fifth Card',
      style: {
        width: '100%',
        height: '600px',
        background: 'gray'
      },
    },
  ]


  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top

    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click to Scroll</button>
      {
        data.map((item, index) => <div ref={index === 3 ? ref : null} style={item.style}><h3>{item.label}</h3></div>)
      }
    </div>
  )
}

export default App
