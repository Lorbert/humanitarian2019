import React from "react";
import "./App.css";
import PollutionMap from "./components/PollutionMap";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h1 className="backpackers-title">
        Backpacker's Guide Through Worldwide Textile Water Pollution
      </h1>
      <NavBar />
      <Carousel />
    </div>
  );
}

export default App;
