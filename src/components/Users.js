import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { baseUrl } from './globals'

const Users = ( ) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/users`)
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>TripLand Users:</h3>
      <ul>

        {users.map( user => <li className="clickable" key={user.id}><Link to={`/users/${user.id}/trips`}>{user.username}</Link></li>)}
      </ul>
    </div>
  )
}

export default Users
