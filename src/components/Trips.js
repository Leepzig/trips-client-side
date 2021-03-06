import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { baseUrl } from './globals'
import TripCard from './TripCard'

const Trips = ( { logout, currentUser } ) => {

  const [trips, setTrips] = useState([])

  const { id } = useParams()
  const history = useHistory()

  //TODO WHY SOMETIMES THE EDIT DISPLAYS other times no
  useEffect(() => {
    fetch(`${baseUrl}/users/${id}/trips`)
    .then(response => response.json())
    .then(data => setTrips(data.trips))
  },[id])

  const handleDelete = () => {
    const options = {
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    }
    fetch(`${baseUrl}/users/${id}`, options)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      history.push(`/home`)
      logout()
    })
  }

  //if current user exist compares trip id with current user
  const isCurrentUser = () => {
    if (currentUser) {
      return currentUser.id === parseInt(id)
    } else {
      return false
    }
  }

  const display = trips.map(trip =>  <TripCard key={trip.id} trip={trip} />)
  return (
    <div className="cards">
      <ul>
      {display}
      </ul>
      {isCurrentUser() ? <button onClick={handleDelete}>Delete Account</button> : null}
    </div>
  )
}

export default Trips
