import React from "react";
import "./App.css";
import Description from "./components/Description";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h1 className="backpackers-title">#stoptextilepollution</h1>
      <Description />
      <div className="carousel-slider">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
