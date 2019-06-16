import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="main-description">
        <h1>Problems of water pollution related to textile industry</h1>
        <p className="attention-text">Human Health Impact</p>
        <p>
          Some natural and synthetic dyes require the use of heavy metals to
          help bond dyes to the fibers. They are defined by their adverse
          effects on people’s health, for example, cadmium, chrome, copper, and
          zinc are known carcinogens, yet are widely used in the production of
          synthetic dyes.
        </p>
        <p className="attention-text">Environmental Impact</p>
        <p>
          On average, approximately 200 litres of water are required to produce
          1 kg of textiles. The large volumes of wastewater generated also
          contain a wide variety of chemicals, used throughout processing. These
          can cause damage if not properly treated before being discharged into
          the environment. Of all the steps involved in textiles processing,{" "}
          <span style={{ fontWeight: "bold" }}>wet processing</span> creates the
          highest volume of wastewater. Heavy metals from industrial processes
          can accumulate in nearby lakes and rivers. These are toxic to marine
          life such as fish and shellfish, and can affect the rest of the food
          chain. This means that entire animal communities can be badly affected
          by this type of pollutant. Some toxins affect the reproductive success
          of marine life and can therefore disrupt the community structure of an
          aquatic environment.
        </p>
      </div>
    );
  }
}
