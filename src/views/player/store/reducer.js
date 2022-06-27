import * as actionTypes from './constant';
import { Map } from 'immutable';
const defaultInit = Map({
  currentSong: [],
});
export default function songsDetailsReducer(state = defaultInit, action) {
  switch (action.type) {
    case actionTypes.GET_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    default:
      return state;
  }
}
