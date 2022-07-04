//使用redux-immutable可在一定程度上提高性能
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/views/discover/com-pages/recommend/store';
import { reducer as playerReducer } from '@/views/player/store';
const cReducer = combineReducers({
  recommendReducer,
  playerReducer,
});

export default cReducer;
