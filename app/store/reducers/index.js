import { combineReducers } from 'redux';
import { drawerStatus, currentRoute } from './routeActions';
import { isLoggedIn } from './authorization';
import { allSliders, lastPosts, discountPosts } from './home';

export default combineReducers({
    //Route State
    drawerStatus, currentRoute,
    //Authorizatiom
    isLoggedIn,
    //Home
    allSliders, lastPosts, discountPosts
});