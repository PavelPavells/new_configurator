import axios from 'axios';
import { GET_DATA_TURNSTILE, GET_ERRORS_TURNSTILE } from './types';

export const getDataTurnstile = history => async dispatch => {
    try {
        await axios.post('http://something/api/data');
        history.push('/')
        dispatch({
            type: GET_DATA_TURNSTILE,
            payload: {}
        })    
    } catch (error) {
        dispatch({
            type: GET_ERRORS_TURNSTILE,
            payload: error.response.data
        })
    }
}