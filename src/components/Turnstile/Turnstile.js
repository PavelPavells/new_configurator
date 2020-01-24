import React from 'react';
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
export default Turnstile