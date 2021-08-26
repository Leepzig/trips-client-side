import React from 'react'
import TripCard from './TripCard'

const Trips = ( {trips} ) => {



  return (
    <div className="cards">
      <ul>
      {trips.map(trip =>  <TripCard key={trip.id} trip={trip} />)}
      </ul>
    </div>
  )
}

export default Trips
