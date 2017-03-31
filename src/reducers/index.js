import { combineReducers } from 'redux';
import counter from './counter';
import map from './map';


const rootReducer = combineReducers({
    counter,
    map,
});

export default rootReducer;
