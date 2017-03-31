import { combineReducers } from 'redux';
import counter from './counter';
import map from './map';
import event from './event';


const rootReducer = combineReducers({
    counter,
    map,
    event
});

export default rootReducer;
