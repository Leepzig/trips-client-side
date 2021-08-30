import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Trips from "./Trips";
import NewTrip from "./NewTrip"
import Users from "./Users"
import NewUser from "./NewUser"
import Login from "./Login"
import TripDetails from "./TripDetails";
import PageNotFound from "./PageNotFound";


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  

  const changeUser = (user) => {
    setCurrentUser(user)
  }

  const logout = () => {
    setCurrentUser(null)
  }

  return (
    <div>
      {currentUser ? <div>Currently Logged In As {currentUser.username}</div>: ""}
      <Router>
        <NavBar currentUser={currentUser} logout={logout}/>
        <Switch>

          <Route exact path="/">
            <Welcome/>
            <Users />
          </Route>
          <Route exact path="/login">
            <Login changeUser={changeUser}/>
          </Route>
          <Route exact path="/users/new">
            <NewUser changeUser={changeUser}/>
          </Route>
          <Route exact path="/trips/new">
            <NewTrip currentUser={currentUser}/>
          </Route>
          <Route exact path="/users/:id/trips">
            <Trips />
          </Route>
          <Route exact path="/trips/:id">
            <TripDetails currentUser={currentUser}/>
          </Route>
          <Route exact path="/trips/:id/edit">
            <NewTrip currentUser={currentUser}/>
          </Route>
          <Route>
            <PageNotFound/>
          </Route>

        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
