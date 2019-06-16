import React from "react";
import L from "leaflet";

import api from "./../api";

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

// const { Map: Map, TileLayer, Marker, Popup } = ReactLeaflet

export default class CustomizedMap extends React.Component {
  constructor() {
    super();
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      api.getInfos()
         .then(resData => {
            var center = [resData[0]["latitude"], resData[0]["longitude"]];
            var map = L.map('map', {
              minZoom: 2,
              maxZoom: 20,
              zoom: 13,
              layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
              attributionControl: false,
              center:center,
          });
          resData.map((cur, i) => {
            let marker = L.marker([cur["latitude"], cur["longitude"]]).addTo(map);
            marker.bindPopup(`<div>insName: ${cur.insta_username} </div><div>caption: ${cur.insta_caption}</div><img width="200" height="130" src=${cur.insta_image_link} />`).openPopup();
          })
          return this.setState({
            map: map
          });
         })
    }, 100)
  }

  render() {
    return <div id="map" style={{ height: 500 }} />;
  }
}
