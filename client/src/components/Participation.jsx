import React, { Component } from "react";
import todocycle from "../images/todocycle.jpg";

export default class Participation extends Component {
  render() {
    return (
      <div className="participation">
        {/* <ul className="participation-list">
          <li>
            Check Aqueduct if water polluted areas match your travel destination
          </li>
          <li>Order cadmium tubes online</li>
          <li>Test water on location</li>
          <li>Take a picture of the outcome compared to the color chart</li>
          <li>
            Upload on instagram{" "}
            <span style={{ fontWeight: "bold" }}>#stoptextilepollution</span>
          </li>
          <li>
            For everyone participating prizes will be raffled in early 2021
          </li>
        </ul> */}
        <img src={todocycle} alt="" />
      </div>
    );
  }
}
