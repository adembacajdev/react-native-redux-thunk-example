import { combineReducers } from 'redux';
import { drawerStatus, currentRoute } from './routeActions';

export default combineReducers({
    //Route State
    drawerStatus, currentRoute,
});