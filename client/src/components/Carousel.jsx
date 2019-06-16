import React, { Component } from "react";
import Slider from "react-slick";
import CustomizedMap from "./../map/CustomizedMap";
import Aqueduct from "./Aqueduct";
import Cadmium from "./Cadmium";
import Participation from "./Participation";
import previous from "./../images/previous.png";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTag: 0,
      preSlide: 0
    };
  }

  toggle(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e)
    let curid = parseInt(e.target.id.split("-")[1]);
    // console.log(curid)

    this.setState({
      curTag: curid
    });
  }

  goBack(e) {
    e.preventDefault();
    e.stopPropagation();
    let preTag = this.state.curTag;
    this.setState({
      curTag: 0,
      preSlide: preTag - 1
    });
  }

  addClass() {}

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.state.preSlide,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
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
            <div className="all-previous" onClick={e => this.goBack(e)}>
              <img
                className="previous-icon"
                src={previous}
                width="20"
                height="20"
                alt=""
              />
              GO BACK
            </div>
            <div className="slide-topic-one">
              <Aqueduct />
            </div>
          </div>
        )}

        {this.state.curTag === 2 && (
          <div>
            <div className="all-previous" onClick={e => this.goBack(e)}>
              <img
                className="previous-icon"
                src={previous}
                width="20"
                height="20"
                alt=""
              />
              GO BACK
            </div>
            <div className="slide-topic-two">
              <div className="description-instamap">
                <h3>Data on water pollution collected by you!</h3>
                <a
                  href={"http://localhost:8000/login"}
                  className={"btn btn-primary"}
                >
                  Login with Instagram
                </a>
              </div>
              <CustomizedMap />
            </div>
          </div>
        )}

        {this.state.curTag === 3 && (
          <div>
            <div className="all-previous" onClick={e => this.goBack(e)}>
              <img
                className="previous-icon"
                src={previous}
                width="20"
                height="20"
                alt=""
              />
              GO BACK
            </div>
            <div className="slide-topic-three">
              <Cadmium />
            </div>
          </div>
        )}

        {this.state.curTag === 4 && (
          <div>
            <div className="all-previous" onClick={e => this.goBack(e)}>
              <img
                className="previous-icon"
                src={previous}
                width="20"
                height="20"
                alt=""
              />
              GO BACK
            </div>
            <div className="slide-topic-four">
              <Participation />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
