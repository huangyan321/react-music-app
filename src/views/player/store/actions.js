import { getSongDetail } from '@/api/player';
import * as actionTypes from './constant';
import { getRandom } from '@/utils/usual';
function changeCurrentSongAction(currentSong) {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
  };
}
function changeCurrentSongIndexAction(currentSongIndex) {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex,
  };
}
function changePlayListAction(playList) {
  return {
    type: actionTypes.CHANGE_PLAY_LIST,
    playList,
  };
}
function changeCurrentSequenceAction(sequence) {
  return {
    type: actionTypes.CHANGE_CURRENT_SEQUENCE,
    sequence,
  };
}
//获取当前播放音乐数据
export const getSongDetailAction = function (query) {
  return (dispatch, getState) => {
    const ids = query.ids;
    const playList = getState().getIn(['playerReducer', 'playList']);
    const currentSongIndex = playList.findIndex((item) => item.id === ids);
    if (currentSongIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(currentSongIndex));
      dispatch(changeCurrentSongAction(playList[currentSongIndex]));
    } else {
      getSongDetail(query).then((res) => {
        const song = res.songs[0];
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }
  };
};
export const changeCurrentSong = function (tag) {
  return (dispatch, getState) => {
    const playList = getState().getIn(['playerReducer', 'playList']);
    const currentSongIndex = getState().getIn([
      'playerReducer',
      'currentSongIndex',
    ]);
    const sequence = getState().getIn(['playerReducer', 'sequence']);
    switch (sequence) {
      // 随机播放
      case 2:
        let randomIndex = getRandom(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandom(playList.length);
        }
        dispatch(
          getSongDetailAction({
            ids: playList[randomIndex].id,
          })
        );
        break;
      //单曲循环
      case 3:
        dispatch(
          getSongDetailAction({
            ids: playList[currentSongIndex].id,
          })
        );
        return;
      //顺序播放
      default:
        if (currentSongIndex === playList.length - 1 && tag > 0) {
          dispatch(
            getSongDetailAction({
              ids: playList[0].id,
            })
          );
        } else if (currentSongIndex === 0 && tag < 0) {
          dispatch(
            getSongDetailAction({
              ids: playList[playList.length - 1].id,
            })
          );
        } else {
          dispatch(
            getSongDetailAction({
              ids: playList[currentSongIndex + tag].id,
            })
          );
        }
    }
  };
};
export const changeCurrentSequence = function (seq) {
  return (dispatch, getState) => {
    dispatch(changeCurrentSequenceAction(seq));
  };
};
