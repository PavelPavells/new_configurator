import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import photo_carousel from '../../images/turnstile_str_compact.png'
import './Carousel.scss'

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentDidMount(){}
    render() {
        return (
        <Carousel autoPlay infiniteLoop>
            <div className="main-right-block_wrapper-photo">
                <img className="photo" src={photo_carousel} alt="" />
            </div>
            <div className="main-right-block_wrapper-photo">
                <img className="photo" src={photo_carousel} alt="" />
            </div>
            <div className="main-right-block_wrapper-photo">
                <img className="photo" src={photo_carousel} alt="" />
            </div>
        </Carousel>
        )
    }
}
Slider.propTypes = {
    data: PropTypes.array,
    errors: PropTypes.object
}
const mapStateToProps = state => ({
    data: state.data,
    errors: state.errors
})
export default connect(
    mapStateToProps,
    null
)(Slider)
//export default Slider