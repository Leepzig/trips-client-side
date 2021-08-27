import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Trips from "./Trips";
import NewTrip from "./NewTrip"
import Users from "./Users"
import Login from "./Login"


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])

  const history = useHistory()

  //Current USer Functions
  function findCurrentUser(username) {
    fetch(`http://localhost:9393/users/${username}`)
    .then(response => response.json())
    .then( user => {
      setCurrentUser(user)
    })
    // history.push(`/users/${user.id}/trips`)
  }

  const logout = () => {
    setCurrentUser(null)
  }

  useEffect(() => {
    fetch("http://localhost:9393/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])




  return (
    <div>
      {currentUser ? <div>Currently Logged In As {currentUser.username}</div>: ""}
      <Router>
        <NavBar currentUser={currentUser} logout={logout}/>
        <Switch>

          <Route exact path="/">
            <Welcome/>
            <Users users={users} />
          </Route>
          <Route exact path="/login">
            <Login findCurrentUser={findCurrentUser}/>
          </Route>
          <Route exact path="/trips/new">
            <NewTrip/>
          </Route>
          <Route exact path="/users/:id/trips">
            <Trips />
          </Route>

        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
