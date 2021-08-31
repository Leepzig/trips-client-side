import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Users = ( ) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9393/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>TripLand Users:</h3>
      <ul>

        {users.map( user => <li key={user.id}><Link to={`/users/${user.id}/trips`}>{user.username}</Link></li>)}
      </ul>
    </div>
  )
}

export default Users
