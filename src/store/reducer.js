//使用redux-immutable可在一定程度上提高性能
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/views/discover/com-pages/recommend/store';
const cReducer = combineReducers({
  recommendReducer,
});

export default cReducer;
