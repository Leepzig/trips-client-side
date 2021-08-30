import React from 'react'
import { Link } from "react-router-dom"

const TripCard = ( { trip } ) => {



  return (
    <li>
      <div>
        <div><Link to={`/trips/${trip.id}`}>{trip.title}</Link></div>
        <div>{trip.location}</div>
        <div>{trip.trip_length} days</div>
      </div>
    </li>
  )
}

export default TripCard
