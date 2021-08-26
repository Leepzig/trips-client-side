import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Trips from "./Trips";
import NewTrip from "./NewTrip"
import Login from "./Login"

function App() {
  const [trips, setTrips] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  //Current USer Functions
  function findCurrentUser(username) {
    fetch(`http://localhost:9494/users/${username}`)
    .then(response => response.json())
    .then( user => setCurrentUser(user))
  }

  useEffect(() => {
    fetch("http://localhost:9494/trips")
    .then(response => response.json())
    .then(data => setTrips(data))
  }, [])




  return (
    <div>
      {currentUser ? <div>Currently Logged In As {currentUser.username}</div>: ""}
      <Router>
        <NavBar/>
        <Switch>

          <Route exact path="/">
            <Welcome/>
            <Trips trips={trips} />
          </Route>
          <Route exact path="/login">
            <Login findCurrentUser={findCurrentUser}/>
          </Route>
          <Route exact path="/trips/new">
            <NewTrip/>
          </Route>

        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
