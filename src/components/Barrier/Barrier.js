import React from "react";
//import "slick-carousel/slick/slick.css";  
//import "slick-carousel/slick/slick-theme.css";
//import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import Slider from '../Carousel/Carousel'
import photo from '../../images/turnstile_str_compact.png'
//import photo_carousel from '../../images/turnstile_str_compact.png'
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
    return (
      <div className='wrapper'>

        {/** ================ BLOCK IN HEADER ================ */}

        <div className='slider'>
          <div className='slider-block slider-block-one'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <span style={{'padding': '10px'}}>Компактные турникеты серии STR</span>
          </div>
          <div className='slider-block slider-block-two'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <span style={{'padding': '10px'}}>Тумбовые турникеты серии STR</span>
          </div>
          <div className='slider-block slider-block-three'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <span style={{'padding': '10px'}}>Компактные турникеты серии STX</span>
          </div>
          <div className='slider-block slider-block-four'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <span style={{'padding': '10px'}}>Тумбовые турникеты серии STX</span>
          </div>
        </div>

        {/** ================ MAIN INFO ================ */}

        <main className='main'>
            <div className='main-left__block'>
              <Slider />
            </div>
            <div className='main-right__block'>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      Универсальный сетевой контроллер EP-2000
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      RFID идентификаторы EMMarin 125 kHz
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      RFID идентификаторы Mifare 13,56 MHz
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      Биометрическая идентификация по отпечаткам пальцев
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      Информационный дисплей учета рабочего времени
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      Контроль разовых посещений по 2D штрих-кодам
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      Гостевой доступ по 2D штрих-кодам
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch" /><label for="switch"></label>
                    <div style={{'padding': '15px 0'}}>
                      Корпус кожуха из нержавеющей стали
                      <p style={{'font-size': '15px', 'opacity': '0.5'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
            </div>
        </main>
      </div>
    );
  }
}
export default Barrier;