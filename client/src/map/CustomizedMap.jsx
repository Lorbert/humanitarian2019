import React from 'react';
import {Map, TileLayer, Marker, Popup} from "./../../node_modules/react-leaflet"
import L from 'leaflet';

// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

// const { Map: Map, TileLayer, Marker, Popup } = ReactLeaflet

export default class CustomizedMap extends React.Component {

  constructor() {
    super();
    this.state ={
      map: null,
      
    };
  }

  componentDidMount() {
    setTimeout(() => {
      var map = L.map('map', {
          minZoom: 2,
          maxZoom: 20,
          zoom: 13,
          layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
          attributionControl: false,
          center:[51.505, 31.03],
          // marker:marker,
      });
      // map.fitWorld();
      var marker = L.marker([51.506, 31.03]).bindPopup("test").addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      
      // console.log(marker)
      // var circle = L.circle([51.508, 31.03], {
      //   color: 'red',
      //   fillColor: '#f03',
      //   fillOpacity: 0.5,
      //   radius: 500
      // }).addTo(map);
      return this.setState({
          map: map
      });
    }, 100)
  }

  render() {
    return <div id="map" style={{ height: 300 }}></div>;
  }


 
  
}