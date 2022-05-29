import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const storeEnhance = applyMiddleware(reduxThunk);
const store = createStore(reducer, composeEnhancers(storeEnhance));

export default store;
