import { useState } from "react"
import Modal from './components/Modal.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Popup</button>
      {
        showModal && <Modal closeModal={closeModal} body={<div>Customized body</div>} />
      }
    </ div>
  )
}

export default App
