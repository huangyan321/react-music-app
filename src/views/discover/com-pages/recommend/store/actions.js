import {
  getTopBanner,
  getPersonalized,
  getNewAlbum,
  getTopList,
  getUpList,
  getNewList,
  getOriginList,
} from '@/api/recommend';
import { GET_BANNERS, GET_RCMD, GET_NEW_ALBUM, GET_TOP_LIST } from './constant';
function changeTopBannerAction(res) {
  return {
    type: GET_BANNERS,
    topBanners: res,
  };
}
function changePersonalizedAction(res) {
  return {
    type: GET_RCMD,
    rcmd: res,
  };
}
function changeNewAlbumAction(res) {
  return {
    type: GET_NEW_ALBUM,
    newAlbums: res,
  };
}
function changeTopListAction(res) {
  return {
    type: GET_TOP_LIST,
    list: res,
  };
}
//获取顶部轮播图
export function getTopBannerAction() {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
}
//获取推荐歌单
export function getPersonalizedAction(params) {
  return (dispatch) => {
    getPersonalized(params).then((res) => {
      dispatch(changePersonalizedAction(res));
    });
  };
}
//获取新碟上架
export function getNewAlbumAction(params) {
  return (dispatch) => {
    getNewAlbum(params).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
}
// //获取热门榜单
// export function getTopListAction(params) {
//   return (dispatch) => {
//     getTopList(params).then((res) => {
//       const list = res.list.splice(0,3)
//       dispatch(changeTopListAction(list));
//     });
//   };
// }
//获取飙升榜 新歌榜 原创榜
export function getTopListAction(params) {
  return (dispatch) => {
    Promise.all([getUpList(), getNewList(), getOriginList()]).then((res) => {
      console.log(res);
      const list = res.map((item) => {
        return {
          name: item.playlist.name,
          coverImg: item.playlist.coverImgUrl,
          list: item.playlist.tracks.slice(0, 10),
        };
      });
      dispatch(changeTopListAction(list));
    });
  };
}
