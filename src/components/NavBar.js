import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = ( {currentUser, logout}) => {
  return (
    <div>
      
      <ul className="navbar">
        <li><NavLink to="/home">Home</NavLink></li> 
        <li>{currentUser ? <NavLink to={`/users/${currentUser.id}/trips`}>My Trips</NavLink> : <NavLink to="/users/new">Sign up</NavLink>}</li>
        <li>{currentUser ?  <NavLink to="/" onClick={logout}>Logout</NavLink>: <NavLink to="/login">Login</NavLink> }</li>
        <li>{currentUser ?  <NavLink to="/trips/new" >New Trip</NavLink>: "" }</li>
        </ul>
    </div>
  )
}

export default NavBar
