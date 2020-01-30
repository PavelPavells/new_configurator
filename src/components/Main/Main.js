import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import photo from '../../images/turnstile_str_compact.png';
import './Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
    }
    componentDidMount() {}
    handleChange = event => {
        event.preventDefault()
        this.setState({ [event.target.id]: event.target.value })
    }
    render() {
        return (
            <div className='wrapper-main'>
                <header className='header'>
                    <h1>Конфигуратор турникетов и шлагбаумов</h1>
                    <p>Конфигуратор турникетов и шлагбаумов</p>
                    <p> 
                        Это недорогое и&nbsp;качественное оборудование с&nbsp;широким функционалом и&nbsp;повышенной
                        надежностью. Благодаря широкому выбору дополнительных модулей,
                        существует множество вариантов комплектаций для решения различных.
                    </p>
                </header>
                <main className='main'>
                    <NavLink exact to='/barrier' style={{textDecoration: 'none', color: 'black'}}>
                        <div className='main__barrier-block'>
                            <img src={photo} alt='фото турникета' />
                            <p>Шлагбаумы для контроля доступа</p>
                        </div>
                    </NavLink>
                    <NavLink exact to='/turnstile' style={{textDecoration: 'none', color: 'black'}}>
                        <div className='main__turnstile-block'> 
                            <img src={photo} alt='фото шлагбаума' />
                            <p>Турникеты для контроля доступа</p>
                        </div>
                    </NavLink>
                </main>
            </div>
        )
    }
}
Main.propTypes = {
    isChecked: PropTypes.bool
}
const mapStateToProps = state => ({
    isChecked: state.isChecked
})
export default connect(
    mapStateToProps,
    null
)(Main)