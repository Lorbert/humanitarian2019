import React from 'react';
import L from 'leaflet';

import api from "./../api";

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
      // api.getInfos()
      //    .then(resData => {
      //       console.log(resData)
      //       var center = [resData[0]["latitude"], resData[0]["longitude"]];
      //       var map = L.map('map', {
      //         minZoom: 2,
      //         maxZoom: 20,
      //         zoom: 13,
      //         layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
      //         attributionControl: false,
      //         center:center,
      //         // marker:marker,
      //     });
      //     resData.map((cur, i) => {
      //       let marker = L.marker([cur["latitude"], cur["longitude"]]).addTo(map);
      //       marker.bindPopup(`<div>insName: ${cur.insta_username} </div><div>caption: ${cur.insta_caption}</div><img src=${cur.insta_image_link} />`).openPopup();
      //     })
      //     return this.setState({
      //       map: map
      //     });
      //    })

      // var map = L.map('map', {
      //     minZoom: 2,
      //     maxZoom: 20,
      //     zoom: 13,
      //     layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
      //     attributionControl: false,
      //     center:[51.505, 31.03],
      //     // marker:marker,
      // });
      // map.fitWorld();
      // var marker = L.marker([51.506, 31.03]).bindPopup("test").addTo(map);
      // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

      var resData = [{
        "latitude": 39.24616457,
        "longitude": 39.24616457,
        "insta_id": 22721881,
        "insta_username": "ardilgulez",
        "insta_link": "http://instagr.am/p/BWrVZ/",
        "insta_image_link": "https://factsd.com/wp-content/uploads/2018/11/water-pollution-feat-img-300x169.jpeg",
        "insta_caption": "Fucking textile producers #TextilePollution"
    },{
        "latitude": 39.24516457,
        "longitude": 39.24516457,
        "insta_id": 22721881,
        "insta_username": "ardilgulez",
        "insta_link": "http://instagr.am/p/BWrVZ/",
        "insta_image_link": "https://factsd.com/wp-content/uploads/2018/11/water-pollution-feat-img-300x169.jpeg",
        "insta_caption": "Fucking textile producers #TextilePollution"
    }]

    console.log(resData)
    var center = [resData[0]["latitude"], resData[0]["longitude"]];
    var map = L.map('map', {
        minZoom: 2,
        maxZoom: 20,
        zoom: 13,
        layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
        attributionControl: false,
        center:center,
        // marker:marker,
      });
      resData.map((cur, i) => {
        let marker = L.marker([cur["latitude"], cur["longitude"]]).addTo(map);
        marker.bindPopup(`<div>insName: ${cur.insta_username} </div><div>caption: ${cur.insta_caption}</div><img src=${cur.insta_image_link} class="myimage"/>`).openPopup();
      })
      return this.setState({
        map: map
      });

      // var map = L.map('map', {
      //     minZoom: 2,
      //     maxZoom: 20,
      //     zoom: 13,
      //     layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})],
      //     attributionControl: false,
      //     center:[51.505, 31.03],
      //     // marker:marker,
      // });
      // map.fitWorld();
      // var marker = L.marker([51.506, 31.03]).bindPopup("test").addTo(map);
      // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

      
      // return this.setState({
      //     map: map
      // });
    }, 100)
  }

  render() {
    return <div id="map" style={{ height: 300 }}></div>;
  }


 
  
}