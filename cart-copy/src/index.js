import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware, compose, combineReducers} from 'redux';
import {ItemList} from './redux/reducer';
import cartReducer from './redux/cartReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Main from './component/connect'

const rootReducer = combineReducers({
    ItemList: ItemList,
    cartItems: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))



ReactDOM.render(
<Provider store={store}>
<BrowserRouter><Main/></BrowserRouter></Provider>, document.getElementById('root'));

