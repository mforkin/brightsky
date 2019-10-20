import { combineReducers } from 'redux'
import data from './data'
import search from './search'

const rootReducer = combineReducers({
    data,
    search
});

export default rootReducer;