import { GET_DATA_BARRIER } from '../actions/types';
const initialState = {
    data: []
}
export default function(state = initialState, action) {
    switch(action.type) {
        case GET_DATA_BARRIER:
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
}