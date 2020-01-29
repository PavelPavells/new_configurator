import { GET_ERRORS_BARRIER, GET_ERRORS_TURNSTILE } from '../actions/types';
const initialState = {}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS_BARRIER:
            return action.payload
        case GET_ERRORS_TURNSTILE:
            return action.payload
        default: return state
    }
}