import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { getDataTurnstile } from '../../actions/actions_turnstile';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import Slider from "../Carousel/Carousel";
import photo from "../../images/turnstile_str_compact.png";
//import photo_carousel from '../../images/turnstile_str_compact.png'
import "./Turnstile.scss";

class Turnstile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isChecked: false
    };
  }
  componentDidMount() {}
  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  };
  render() {
    return (
      <div className="wrapper">

        {/** ================ BLOCK IN HEADER ================ */}

        <header className="slider">
          <div className="slider-block slider-block-one">
            <img src={photo} className="slider-block__photo-header" alt="" />
            <p>Компактные турникеты серии STR</p>
          </div>
          <div className="slider-block slider-block-two">
            <img src={photo} className="slider-block__photo-header" alt="" />
            <p>Тумбовые турникеты серии STR</p>
          </div>
          <div className="slider-block slider-block-three">
            <img src={photo} className="slider-block__photo-header" alt="" />
            <p>Компактные турникеты серии STX</p>
          </div>
          <div className="slider-block slider-block-four">
            <img src={photo} className="slider-block__photo-header" alt="" />
            <p>Тумбовые турникеты серии STX</p>
          </div>
        </header>

        {/** ================ MAIN INFO ================ */}

        <main className="main">
          <div className="main-left__block">
            <Slider />
          </div>
          <div className="main-right__block">
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-one" />
              <label htmlFor="switch-one"></label>
              <div>
                <strong>Универсальный сетевой контроллер EP-2000</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-two" />
              <label htmlFor="switch-two"></label>
              <div>
                <strong>RFID идентификаторы EMMarin 125 kHz</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-three" />
              <label htmlFor="switch-three"></label>
              <div>
                <strong>RFID идентификаторы Mifare 13,56 MHz</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select"> 
              <input type="checkbox" id="switch-four" />
              <label htmlFor="switch-four"></label>
              <div>
                <strong>Биометрическая идентификация по отпечаткам пальцев</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-five" />
              <label htmlFor="switch-five"></label>
              <div>
                <strong>Информационный дисплей учета рабочего времени</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-six" />
              <label htmlFor="switch-six"></label>
              <div>
                <strong>Контроль разовых посещений по 2D штрих-кодам</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-seven" />
              <label htmlFor="switch-seven"></label>
              <div>
                <strong>Гостевой доступ по 2D штрих-кодам</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-eight" />
              <label htmlFor="switch-eight"></label>
              <div>
                <strong>Корпус кожуха из нержавеющей стали</strong>
                <p>
                  Идейные соображения высшего порядка, а также консультация с широким активом позволяет выполнять важные задания по разработке новых предложений. 
                  Не следует, однако забывать, что консультация с широким активом позволяет оценить значение новых предложений.
                </p>
              </div>
            </div>
            <div className="main-block__variation">
              <ul>
                <li><strong>Корпус кожуха из нержавеющей стали</strong></li>
                <li><strong>Гостевой доступ по 2D штрих-кодам</strong></li>
                <li><strong>Контроль разовых посещений по 2D штрих-кодам</strong></li>
                <li><strong>RFID идентификаторы EMMarin 125 kHz</strong></li>
              </ul>
            </div>
          </div>
        </main>
        <footer className='footer'>
          <div><strong>Стоимость оборудования: 452 298.43 руб</strong></div>
        </footer>
      </div>
    );
  }
}
Turnstile.propTypes = {
  data: PropTypes.array,
  errors: PropTypes.object
};
const mapStateToProps = state => ({
  data: state.data,
  errors: state.errors
});
export default connect(
  mapStateToProps, 
  null
)(Turnstile);