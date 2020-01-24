import React from "react";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Barrier.scss";

class Barrier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {}
  handleChange = event => {};
  render() {
    //const { data } = this.state;
    const settings = {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    };
    return (
      <div className='wrapper-barrier'>
        <Slider {...settings} className='slider'>
          <div className='block'>
            <h3>SLIDE1</h3>
          </div>
          <div className='block'>
            <h3>SLIDE2</h3>
          </div>
          <div className='block'>
            <h3>SLIDE3</h3>
          </div>
          <div className='block'>
            <h3>SLIDE4</h3>
          </div>
          <div className='block'>
            <h3>SLIDE5</h3>
          </div>
          <div className='block'>
            <h3>SLIDE6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Barrier;
