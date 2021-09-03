import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { baseUrl } from './globals'

const NewUser = ( { changeUser }) => {
  const [form, setForm] = useState({
    username:"",
    name:""
  })

  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()
    const options = {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(form)
    }
    fetch(`${baseUrl}/users`, options)
    .then(resp => resp.json())
    .then(data => findCurrentUser(data.username))
  }

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  //will this be able to find the current user after just creating it?
  function findCurrentUser(username) {
    fetch(`${baseUrl}/users/${username}`)
    .then(response => response.json())
    .then( user => {
      changeUser(user)
      history.push(`/users/${user.id}/trips`)
    })
  }

  return (
    <div><br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" >Name: </label>
          <input type="text" value={form.name} onChange={handleChange} name="name"/>
        </div>
        <div>
          <label htmlFor="username" >Username: </label>
          <input type="text" value={form.username} onChange={handleChange} name="username"/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
      
    </div>
  )
}

export default NewUser
