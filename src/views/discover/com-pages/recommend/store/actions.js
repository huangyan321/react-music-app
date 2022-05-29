import { getTopBanner } from '@/api/recommend';
import { GET_BANNERS } from './constant';
function changeTopBannerAction(res) {
  return {
    type: GET_BANNERS,
    topBanners: res,
  };
}
export function getTopBannerAction() {
  return (dispatch) => {
    getTopBanner().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
}
