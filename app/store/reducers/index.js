import { combineReducers } from 'redux';
import { drawerStatus, currentRoute } from './routeActions';
import { isLoggedIn, accountType } from './authorization';
import { allSliders, lastPosts, discountPosts } from './home';
import { searchPosts } from './search';
import { allCategories, oneCategory } from './category';

export default combineReducers({
    //Route State
    drawerStatus, currentRoute,
    //Authorizatiom
    isLoggedIn, accountType,
    //Home
    allSliders, lastPosts, discountPosts,
    //Search
    searchPosts,
    //Category
    allCategories, oneCategory,
});