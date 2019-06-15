import React, { Component } from "react";
import Slider from "react-slick";

class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      //autoplay: true,
      //autoplaySpeed: 3000,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true
    };

    return (
      <Slider {...settings}>
        <div className="carousel-preview1">
          <h3>1</h3>
        </div>
        <div className="carousel-preview2">
          <h3>2</h3>
        </div>
        <div className="carousel-preview3">
          <h3>3</h3>
        </div>
        <div className="carousel-preview4">
          <h3>4</h3>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
