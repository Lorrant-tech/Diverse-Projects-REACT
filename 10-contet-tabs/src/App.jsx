import { useState } from "react"
import Tab from "./components/Tab.jsx"


function App() {

  const [activeId, setActiveId] = useState(1)

  const tabsArray = [1, 2, 3]

  const renderContent = () => {
    switch(activeId) {
      case 1:
        return <div className="content">Content for id {activeId}</div>
      case 2:
        return <div className="content">Content for id {activeId}</div>
      case 3:
        return <div className="content">Content for id {activeId}</div>
      default:
        return <div className="content">No content available</div>
    }
  }

  return (
    <>
      <div className="container">
        {
        tabsArray.map((element) => {
          return (
            <Tab key={element} tabId={element} activeId={activeId} setActiveId={setActiveId}/>
          )}
        )
        }
      </div>

      {renderContent()}
    </>
  )
}

export default App
