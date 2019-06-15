import React from "react";
import CustomizedMap from "./map/CustomizedMap";
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
      <PollutionMap />

      <div>
        just left map here temporarily
        <CustomizedMap />
      </div>
    </div>
  );
}

export default App;
