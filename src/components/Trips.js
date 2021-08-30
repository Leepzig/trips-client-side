import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import TripCard from './TripCard'

const Trips = ( ) => {

  const [trips, setTrips] = useState([])

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:9393/users/${id}/trips`)
    .then(response => response.json())
    .then(data => setTrips(data.trips))
  },[id])

  const display = trips.map(trip =>  <TripCard key={trip.id} trip={trip} />)
  return (
    <div className="cards">
      <ul>
      {display}
      </ul>
    </div>
  )
}

export default Trips
