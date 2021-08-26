import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Sign up</NavLink>
      <NavLink to="/">My Trips</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
