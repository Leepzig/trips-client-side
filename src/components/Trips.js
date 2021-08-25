import React from 'react'
import TripCard from './TripCard'

const Trips = ( ) => {



  trips = ["Spain", "Portugal", "Colombia", "France", "Houston", "Florida"]
  return (
    <div className="cards">
      <ul>
      {trips.map(trip => { <Trip trip={trip} />})}
      </ul>
    </div>
  )
}

export default Trips
