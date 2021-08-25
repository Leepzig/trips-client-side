import React from "react";
import { useState, useEffect } from "react";

import Welcome from "./Welcome";
import NavBar from "./NavBar";
import Trips from "./Trips";

function App() {




  return (
    <div>
      <NavBar/>
      <Welcome/>
      <Trips />
    </div>
  );
}

export default App;
