import axios from 'axios';
import { GET_DATA, GET_ERRORS } from './types';

export const getData = history => async dispatch => {
    try {
        await axios.post('http://something/api/data');
        history.push('/')
        dispatch({
            type: GET_DATA,
            payload: {}
        })    
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}