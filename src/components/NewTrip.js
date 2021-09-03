import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { baseUrl } from './globals'

const NewTrip = ( { currentUser } ) => {
  //form State
  const [form, setForm] = useState({
    title:"",
    location:"",
    trip_length:"",
    user_id: currentUser.id
  })

  const { id } = useParams()
  const history = useHistory()

  //if id exits fetch the trip for an edit
  
    useEffect( () => {
      if (id) {
        fetch(`${baseUrl}/trips/${id}`)
        .then(resp => resp.json())
        .then(data => setForm(data))
      }
    }, [id])

  //this is the same for both edit and new
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  
  //Patch or post depending on if an id exist
  const handleSubmit = e => {
    e.preventDefault()
    const options = {
      method: id ? "PATCH" : "POST",
      headers: {"Content-Type" : "application/json"},
      body:JSON.stringify(form)
    }
    const rootUrl = `${baseUrl}/trips`
    const URL = id ? rootUrl + `/${id}`: rootUrl
    fetch(URL, options)
      .then(resp => resp.json())
      .then(data => {
    })
    history.push(`/users/${currentUser.id}/trips`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Trip Title:</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="location">Trip Location:</label>
          <input type="text" name="location" value={form.location} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="trip_length">Trip Length:</label>
          <input type="text" name="trip_length" value={form.trip_length} onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewTrip
