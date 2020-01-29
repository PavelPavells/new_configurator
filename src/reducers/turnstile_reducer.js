import { GET_DATA_TURNSTILE } from '../actions/types';
const initialState = {
    data: []
}
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DATA_TURNSTILE:
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
}