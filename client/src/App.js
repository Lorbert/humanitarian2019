import React from "react";
import CustomizedMap from "./map/CustomizedMap";
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

      <div>
        just left map here temporarily
        <CustomizedMap />
      </div>
    </div>
  );
}

export default App;
