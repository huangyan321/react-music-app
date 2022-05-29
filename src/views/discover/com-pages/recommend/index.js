import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/actions';
const Recommend = memo((props) => {
  const dispatch = useDispatch();
  //useSelector:传入两个参数，第一个是回调函数，第二个是比较的参数，如果比较的参数没有变化，就不会执行回调函数
  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.getIn(['recommendReducer', 'topBanners']),
    };
  }, shallowEqual);
  console.log(topBanners);
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <div>
      <h1>{topBanners.banners && topBanners.banners.length}</h1>
    </div>
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
