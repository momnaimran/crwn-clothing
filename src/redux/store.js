import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';  //console logs our actions and make things easy for debugging
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

//setting up middleware
const middlewares=[thunk];
if(process.env.NODE_ENV=== 'development')
{
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
// eslint-disable-next-line
export default {store, persistor};