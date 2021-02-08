import { combineReducers } from 'redux';
import { drawerStatus, currentRoute } from './routeActions';
import { isLoggedIn, accountType } from './authorization';
import { allSliders, oneSlider } from './sliders';
import { searchPosts } from './search';
import { allCategories, oneCategory } from './category';
import { allCities, oneCity } from './cities';
import { allComments, oneComment } from './comments';
import { allFavourites, oneFavourite } from './favourites';
import { allPosts, onePost, discountPosts, lastPosts, rentPosts } from './posts';
import { allSizes, oneSize } from './sizes';
import { allUsers, oneUser } from './users';

export default combineReducers({
    //Route State
    drawerStatus, currentRoute,
    //Authorizatiom
    isLoggedIn, accountType,
    //Home
    allSliders, oneSlider,
    //Search
    searchPosts,
    //Category
    allCategories, oneCategory,
    //Cities
    allCities, oneCity,
    //Comments
    allComments, oneComment,
    //Favourites
    allFavourites, oneFavourite,
    //Posts
    allPosts, onePost, discountPosts, lastPosts, rentPosts,
    //Sizes
    allSizes, oneSize,
    //Users
    allUsers, oneUser,
});