import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import usersReducer from './usersRedux';
import productsReducer from './productsRedux';
import cartReducer from './cartRedux';
import orderReducer from './orderRedux';

const subreducers = {
  user: usersReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
