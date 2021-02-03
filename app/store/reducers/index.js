import { combineReducers } from 'redux';
import { drawerStatus, currentRoute } from './routeActions';
import { isLoggedIn } from './authorization';
import { allSliders, lastPosts, discountPosts } from './home';
import {searchPosts} from './search';
import {allCategoryPosts} from './category';

export default combineReducers({
    //Route State
    drawerStatus, currentRoute,
    //Authorizatiom
    isLoggedIn,
    //Home
    allSliders, lastPosts, discountPosts,
    //Search
    searchPosts,
    //Category
    allCategoryPosts,
});