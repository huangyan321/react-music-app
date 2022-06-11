import React, { memo } from 'react';

import TopBanner from './c-cpns/top-banner';
import Rcmd from './c-cpns/rcmd';
import NewAlbum from './c-cpns/new-album';
import HotTop from './c-cpns/hot-top';
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';
const Recommend = memo((props) => {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <Rcmd></Rcmd>
          <NewAlbum></NewAlbum>
          <HotTop></HotTop>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
export default Recommend;

//! 不使用hooks
// const Recommend = memo((props) => {
//   const { getTopBanners, topBanners } = props;
//   console.log(topBanners);
//   useEffect(() => {
//     getTopBanners();
//   }, []);
//   console.log(topBanners);
//   return (
//     <div>
//       <h1>{topBanners.banners && topBanners.banners.length}</h1>
//     </div>
//   );
// });
// const mapStateToProps = (state) => {
//   return {
//     topBanners: state.recommendReducer.topBanners,
//   };
// };
// const mapActionToProps = (dispatch) => {
//   return {
//     getTopBanners: () => {
//       dispatch(getTopBannerAction());
//     },
//   };
// };
// export default connect(mapStateToProps, mapActionToProps)(Recommend);
