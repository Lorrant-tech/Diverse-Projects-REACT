import { useEffect, useState } from "react"
import Suggestions from "./components/Suggestions"


function App() {
  
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchParam, setSearchParam] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredUsers, setFilteresUsers] = useState([])

  function handleClick (event) {
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteresUsers([])
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase()
    setSearchParam(query)

    if(query.length >= 1) {
      const filteredData = users && users.length ? 
      users.filter(item => item.toLowerCase().indexOf(query) > -1) : []

      setFilteresUsers(filteredData)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json();

      

      if(data && data.users && data.users.length) {
        setUsers(data.users.map(userItem => userItem.firstName))
        setLoading(false)
        setError(null)
      }

    } catch (error) {
      setLoading(false)
      console.log(error)
      setError(error);
    }
  }

  

  useEffect(() => {
    fetchListOfUsers()
  }, [])

  console.log(users, filteredUsers)

  return (
    <div className="search-container">
      {
        loading  ? <h1>Loading data...</h1> : (
          <input
            name="search-users"
            placeholder="Search users..."
            value={searchParam}
            onChange={handleChange}
          />
        )
      }
      
      {
        showDropdown && <Suggestions data={filteredUsers} handleClick={handleClick}/>
      }
    </ div>
  )
}

export default App
