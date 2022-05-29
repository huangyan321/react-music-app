import * as actionTypes from './constant';
import { Map } from 'immutable';
const defaultInit = Map({
  topBanners: [],
});

export default function recommendReducer(state = defaultInit, action) {
  switch (action.type) {
    case actionTypes.GET_BANNERS:
      return state.set('topBanners', action.topBanners);
    default:
      return state;
  }
}
