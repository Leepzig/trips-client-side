import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = ( {currentUser, logout}) => {
  return (
    <div>
      
      <nav>
      <NavLink to="/">Home</NavLink>
      {currentUser ? <NavLink to={`/users/${currentUser.id}/trips`}>My Trips</NavLink> : <NavLink to="/">Sign up</NavLink>}
      {currentUser?  <NavLink to="/" onClick={logout}>Logout</NavLink>: <NavLink to="/login">Login</NavLink> }
      </nav>
    </div>
  )
}

export default NavBar
