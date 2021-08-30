import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"

const TripDetails = ( {currentUser}) => {
  const [trip, setTrip] = useState()
  const { id } = useParams()
  const history = useHistory()

  useEffect(() =>{
    fetch(`http://localhost:9393/trips/${id}`)
    .then(resp => resp.json())
    .then(data => setTrip(data))
  },[id])

  const handleEditClick = e => {
    history.push(`/trips/${id}/edit`)
  }

  const handleDeleteClick = e => {
    const options = {
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    }
    fetch(`http://localhost:9393/trips/${id}`, options)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      history.push(`/users/${currentUser.id}/trips`)
    })
  }

  if (!trip) return <h2>Loading...</h2>

  //if current user exist compares trip id with current user
    const isCurrentUser = () => {
      if (currentUser) {
        return currentUser.id === trip.user_id
      } else {
        return false
      }
    }

  return (
    <div>
      <h2>{trip.title}</h2>
        <h3>Destination:{trip.location}</h3>
        <h3>For {trip.trip_length} Days</h3>
        {isCurrentUser() ? <button onClick={handleEditClick}>Edit</button>: null}
        {isCurrentUser() ? <button onClick={handleDeleteClick}>Delete</button>: null}
    </div>
  )
}

export default TripDetails
