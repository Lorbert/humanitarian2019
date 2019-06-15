import React from "react";
import "./App.css";
import PollutionMap from "./components/PollutionMap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1 className="backpackers-title">
        Backpacker's Guide Through Worldwide Textile Water Pollution
      </h1>
      <NavBar />
      <PollutionMap />
    </div>
  );
}

export default App;
