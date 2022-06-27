import { getSongDetail } from '@/api/player';
import * as actionTypes from './constant';
function changeGetSongDetailAction(currentSong) {
  return {
    type: actionTypes.GET_CURRENT_SONG,
    currentSong,
  };
}

export const getSongDetailAction = function (query) {
  return (dispatch) => {
    getSongDetail(query).then((res) => {
      dispatch(changeGetSongDetailAction(res.songs[0]));
    });
  };
};
