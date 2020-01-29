import axios from 'axios';
import { GET_DATA_BARRIER, GET_ERRORS_BARRIER } from './types';

export const getDataBarrier = history => async dispatch => {
    try {
        await axios.post('http://something/api/data');
        history.push('/')
        dispatch({
            type: GET_DATA_BARRIER,
            payload: {}
        })    
    } catch (error) {
        dispatch({
            type: GET_ERRORS_BARRIER,
            payload: error.response.data
        })
    }
}