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
  handleChange = event => {
    event.preventDefault()
    this.setState({ [event.target.id]: event.target.value })
  };
  render() {
    //const { data } = this.state;
    return (
      <div className='wrapper'>

        {/** ================ BLOCK IN HEADER ================ */}

        <div className='slider'>
          <div className='slider-block slider-block-one'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <p>Компактные турникеты серии STR</p>
          </div>
          <div className='slider-block slider-block-two'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <p>Тумбовые турникеты серии STR</p>
          </div>
          <div className='slider-block slider-block-three'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <p>Компактные турникеты серии STX</p>
          </div>
          <div className='slider-block slider-block-four'>
            <img src={photo} className='slider-block__photo-header' alt='' />
            <p>Тумбовые турникеты серии STX</p>
          </div>
        </div>

        {/** ================ MAIN INFO ================ */}

        <main className='main'>
            <div className='main-left__block'>
              <Slider />
            </div>
            <div className='main-right__block'>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-one" /><label for="switch-one"></label>
                    <div>
                      Универсальный сетевой контроллер EP-2000
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-two" /><label for="switch-two"></label>
                    <div>
                      RFID идентификаторы EMMarin 125 kHz
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-three" /><label for="switch-three"></label>
                    <div>
                      RFID идентификаторы Mifare 13,56 MHz
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-four" /><label for="switch-four"></label>
                    <div>
                      Биометрическая идентификация по отпечаткам пальцев
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-five" /><label for="switch-five"></label>
                    <div>
                      Информационный дисплей учета рабочего времени
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-six" /><label for="switch-six"></label>
                    <div>
                      Контроль разовых посещений по 2D штрих-кодам
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-seven" /><label for="switch-seven"></label>
                    <div>
                      Гостевой доступ по 2D штрих-кодам
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      </p>
                    </div>
                </div>
                <div className='main-right__block-wrapper-select'>
                    <input type="checkbox" id="switch-eight" /><label for="switch-eight"></label>
                    <div>
                      Корпус кожуха из нержавеющей стали
                      <p>
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