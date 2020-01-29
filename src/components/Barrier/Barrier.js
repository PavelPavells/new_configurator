import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { getDataBarrier } from '../../actions/actions_barrier';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "../Carousel/Carousel";
import photo from "../../images/turnstile_str_compact.png";
import "./Barrier.scss";

class Barrier extends React.Component {
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
    this.setState({ [event.target.id]: event.taget.value });
  };
  render() {
    return (
      <div className="wrapper-turnstile">
        
        {/** ================ BLOCK IN HEADER ================ */}

        <header className="slider">
          <div className="slider-block slider-block-one">
            <img src={photo} className="slider-block__photo-header" alt="" />
            <p>Компактные турникеты серии STR</p>
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
                Универсальный сетевой контроллер EP-2000
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-two" />
              <label htmlFor="switch-two"></label>
              <div>
                RFID идентификаторы EMMarin 125 kHz
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-three" />
              <label htmlFor="switch-three"></label>
              <div>
                RFID идентификаторы Mifare 13,56 MHz
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-four" />
              <label htmlFor="switch-four"></label>
              <div>
                Биометрическая идентификация по отпечаткам пальцев
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-five" />
              <label htmlFor="switch-five"></label>
              <div>
                Информационный дисплей учета рабочего времени
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-six" />
              <label htmlFor="switch-six"></label>
              <div>
                Контроль разовых посещений по 2D штрих-кодам
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-seven" />
              <label htmlFor="switch-seven"></label>
              <div>
                Гостевой доступ по 2D штрих-кодам
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-right__block-wrapper-select">
              <input type="checkbox" id="switch-eight" />
              <label htmlFor="switch-eight"></label>
              <div>
                Корпус кожуха из нержавеющей стали
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
            </div>
            <div className="main-block__variation">
              <ul>
                <li>Корпус кожуха из нержавеющей стали</li>
                <li>Гостевой доступ по 2D штрих-кодам</li>
                <li>Контроль разовых посещений по 2D штрих-кодам</li>
                <li>RFID идентификаторы EMMarin 125 kHz</li>
              </ul>
            </div>
          </div>
        </main>
        <footer className='footer'>
          <div>452 298.43 руб</div>
        </footer>
      </div>
    );
  }
}
Barrier.propTypes = {
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
)(Barrier);