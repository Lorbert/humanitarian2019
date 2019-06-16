import React, { Component } from "react";
//import institutelogo from "../images/worldrecourcesinstitute.png";
import aquelogo from "../images/aqueductlogo.png";

export default class Aqueduct extends Component {
  render() {
    return (
      <div>
        <h3>Aqueduct Water Risk Atlas</h3>
        <p>
          Awareness around the physical, regulatory, and reputational water
          risks to companies and their investors is on the rise and robust,
          comparable and comprehensive data is needed to help assess these
          water-related risks. In response to this demand, the World Resources
          Institute developed the Aqueduct Water Risk Atlas, including 12 global
          indicators and maps of water-related risk. Companies can use this
          information to prioritize actions, investors to leverage financial
          interest to improve water management, and governments to engage with
          the private sector to seek solutions for more equitable and
          sustainable water governance.
        </p>
        <a href="https://www.wri.org/applications/maps/aqueduct-atlas/#x=61.70&y=0.38&s=ws!20!28!c&t=waterrisk&w=def&g=0&i=BWS-16!WSV-4!SV-2!HFO-4!DRO-4!STOR-8!GW-8!WRI-4!ECOS-2!MC-4!WCG-8!ECOV-2!&tr=ind-1!prj-1&l=3&b=terrain&m=group&init=y">
          <img className="aqueduct-logo" src={aquelogo} alt="" />
        </a>
      </div>
    );
  }
}
