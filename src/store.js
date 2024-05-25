import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducers, productsListReducers } from './reducers/productsReducers';
import { userLoginReducer, userSignupReducer } from './reducers/userReducers';

const reducer = combineReducers({
    productsList: productsListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
});

const initialState = {};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
