import { request } from '../service';
export function getTopBanner(query) {
  return request({
    method: 'get',
    url: '/banner',
    query,
  });
}
export function getPersonalized(params) {
  return request({
    method: 'get',
    url: '/personalized',
    params,
  });
}
export function getNewAlbum(params) {
  return request({
    method: 'get',
    url: '/album/new',
    params,
  });
}
export function getTopList(params) {
  return request({
    method: 'get',
    url: '/toplist',
    params,
  });
}
export function getUpList(params) {
  return request({
    method: 'get',
    url: '/playlist/detail?id=19723756',
    params,
  });
}
export function getNewList(params) {
  return request({
    method: 'get',
    url: '/playlist/detail?id=3779629',
    params,
  });
}
export function getOriginList(params) {
  return request({
    method: 'get',
    url: '/playlist/detail?id=2884035',
    params,
  });
}