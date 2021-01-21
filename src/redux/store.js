import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';  //console logs our actions and make things easy for debugging
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';

//setting up middleware
const middlewares=[logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
// eslint-disable-next-line
export default {store, persistor};