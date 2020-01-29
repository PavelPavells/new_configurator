import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Turnstile.scss';

class Turnstile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {

    }
    handleChange = event => {
        event.preventDefault()
    }
    render() {
        //const { data } = this.state
        return (
            <div className="wrapper-turnstile">HELLO, TURNSTILE</div>
        )
    }
}
Turnstile.propTypes = {
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
)(Turnstile)