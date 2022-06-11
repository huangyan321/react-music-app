import * as actionTypes from './constant';
import { Map } from 'immutable';
const defaultInit = Map({
  topBanners: [],
  rcmd: [],
  newAlbums: [],
  topList: []
});

export default function recommendReducer(state = defaultInit, action) {
  switch (action.type) {
    case actionTypes.GET_BANNERS:
      return state.set(
        'topBanners',
        action.topBanners && action.topBanners.banners
      );
    case actionTypes.GET_RCMD:
      return state.set('rcmd', action.rcmd && action.rcmd.result);
    case actionTypes.GET_NEW_ALBUM:
      return state.set(
        'newAlbums',
        action.newAlbums && action.newAlbums.albums
      );
    case actionTypes.GET_TOP_LIST:
      return state.set(
        'topList',
        action.list
      );
    default:
      return state;
  }
}
