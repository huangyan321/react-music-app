import { request } from '@/service';
export const getSongDetail = function (params) {
  return request({
    method: 'get',
    url: '/song/detail',
    params,
  });
};
