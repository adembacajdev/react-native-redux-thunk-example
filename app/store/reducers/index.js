import { combineReducers } from 'redux';
import { drawerStatus, currentRoute } from './routeActions';
import { isLoggedIn, accountType } from './authorization';
import { allSliders, oneSlider } from './sliders';
import { searchPosts } from './search';
import { allPostComments, allUserComments, oneComment } from './comments';
import { allFavourites, oneFavourite } from './favourites';
import { allPosts, allMyPosts, onePost, discountPosts, lastPosts, rentPosts, allPostsByCategory, postingPost } from './posts';
import { allUsers, oneUser, myProfile, postingUser } from './users';
import { allShops } from './shops';

export default combineReducers({
    //Route State
    drawerStatus, currentRoute,
    //Authorizatiom
    isLoggedIn, accountType,
    //Home
    allSliders, oneSlider,
    //Search
    searchPosts,
    //Comments
    allPostComments, allUserComments, oneComment,
    //Favourites
    allFavourites, oneFavourite,
    //Posts
    allPosts, allMyPosts, onePost, discountPosts, lastPosts, rentPosts, allPostsByCategory, postingPost,
    //Users
    allUsers, oneUser, myProfile, postingUser,
    //Shops
    allShops
});