import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

export default combineReducers({
    quotes:quoteReducer
})
