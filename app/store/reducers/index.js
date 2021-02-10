import { combineReducers } from 'redux';
import { drawerStatus, currentRoute } from './routeActions';
import { isLoggedIn, accountType } from './authorization';
import { allSliders, oneSlider } from './sliders';
import { searchPosts } from './search';
import { allCategories, oneCategory } from './category';
import { allCities, oneCity } from './cities';
import { allPostComments, allUserComments, oneComment } from './comments';
import { allFavourites, oneFavourite } from './favourites';
import { allPosts, allMyPosts, onePost, discountPosts, lastPosts, rentPosts, allPostsByCategory } from './posts';
import { allSizes, oneSize } from './sizes';
import { allUsers, oneUser, myProfile, postingUser } from './users';

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
    allPostComments, allUserComments, oneComment,
    //Favourites
    allFavourites, oneFavourite,
    //Posts
    allPosts, allMyPosts, onePost, discountPosts, lastPosts, rentPosts, allPostsByCategory,
    //Sizes
    allSizes, oneSize,
    //Users
    allUsers, oneUser, myProfile, postingUser,
});