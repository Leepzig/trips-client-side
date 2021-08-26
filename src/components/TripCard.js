import React from 'react'
import { Link } from "react-router-dom"

const TripCard = ( {trip}) => {



  return (
    <li>
      <div className="card">
        <div><Link to="/">{trip.title}</Link></div>
        <div>{trip.location}</div>
        <div>{trip.trip_length}</div>
      </div>
    </li>
  )
}

export default TripCard
