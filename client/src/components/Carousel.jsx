import React, { Component } from "react";
import Slider from "react-slick";
import CustomizedMap from "./../map/CustomizedMap";
import previous from "./../images/previous.png";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTag: 0
    };
  }

  toggle(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    let curId = parseInt(e.target.id.split("-")[1]);
    //console.log(curId)
    this.setState({
      curTag: curId
    });
  }

  goBack(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    // let curId = parseInt(e.target.id.split("-")[1])

    this.setState({
      curTag: 0
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // autoplay: true,
      // autoplaySpeed: 3000,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true
    };

    return (
      <div>
        {this.state.curTag === 0 && (
          <Slider {...settings}>
            <div className="carousel-preview1">
              <h3 id="pic-1" onClick={e => this.toggle(e)}>
                1
              </h3>
            </div>
            <div className="carousel-preview2">
              <h3 id="pic-2" onClick={e => this.toggle(e)}>
                2
              </h3>
            </div>
            <div className="carousel-preview3">
              <h3 id="pic-3" onClick={e => this.toggle(e)}>
                3
              </h3>
            </div>
            <div className="carousel-preview4">
              <h3 id="pic-4" onClick={e => this.toggle(e)}>
                4
              </h3>
            </div>
          </Slider>
        )}

        {this.state.curTag === 1 && (
          <div>
            <div onClick={e => this.goBack(e)}>
              <img src={previous} width="20" height="20" />
              go back
            </div>
            111111
          </div>
        )}

        {this.state.curTag === 2 && (
          <div>
            <div onClick={e => this.goBack(e)}>
              <img src={previous} width="20" height="20" />
              go back
            </div>
            <div>
              <CustomizedMap />
            </div>
          </div>
        )}

        {this.state.curTag === 3 && (
          <div>
            <div onClick={e => this.goBack(e)}>
              <img src={previous} width="20" height="20" />
              go back
            </div>
            33333
          </div>
        )}

        {this.state.curTag === 4 && (
          <div>
            <div onClick={e => this.goBack(e)}>
              <img src={previous} width="20" height="20" />
              go back
            </div>
            444444
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
