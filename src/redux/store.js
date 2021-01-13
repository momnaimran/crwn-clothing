import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';  //console logs our actions and make things easy for debugging
import rootReducer from './root-reducer';

//setting up middleware
const middlewares=[logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;