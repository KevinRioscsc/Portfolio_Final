import React from "react";
import Three from "./Three/Three";
import StartNavigation from "./Components/CallToAction/StartNavigation";
import Navigation from "./Components/Navigation/Navigation";

import "./App.css";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Navigation />
      <StartNavigation />
      <Three />
    </div>
  );
}

export default App;
