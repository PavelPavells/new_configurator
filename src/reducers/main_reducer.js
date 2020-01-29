import { combineReducers } from 'redux'
import barrier_reducer from './barrier_reducer';
import turnstile_reducer from './turnstile_reducer';
import error_reducer from './error_reducer';

export default combineReducers({
    errors: error_reducer,
    barrier: barrier_reducer,
    turnstile: turnstile_reducer
})