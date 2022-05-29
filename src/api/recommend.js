import { request } from '../service';
export function getTopBanner(query) {
  return request({
    method: 'get',
    url: '/banner',
    query
  });
}
