import React, { memo, useEffect, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from '../../store/actions';
import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
const index = memo(() => {
  //state
  const [curIndex, setCurIndex] = useState(0);
  const dispatch = useDispatch();
  //useSelector:传入两个参数，第一个是回调函数，第二个是比较的参数，如果比较的参数没有变化，就不会执行回调函数
  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.getIn(['recommendReducer', 'topBanners']),
    };
  }, shallowEqual);
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  //切换按钮点击监听
  const carouselRef = useRef();
  const shiftPrev = useCallback(() => {
    console.log('shiftPrev');
    carouselRef && carouselRef.current.prev();
  }, []);
  const shiftNext = useCallback(() => {
    console.log('shiftNext');
    carouselRef && carouselRef.current.next();
  }, []);
  //监听轮播图索引变化
  const carouselBeforeChange = useCallback((form, to) => {
    setCurIndex(to);
  }, []);
  //索引变化后切换背景图
  const curImage =
    topBanners[curIndex] &&
    topBanners[curIndex].imageUrl + '?imageView&blur=40x20';
  return (
    <BannerWrapper coverImg={curImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={carouselRef}
            beforeChange={carouselBeforeChange}
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-pic" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={(e) => shiftPrev()}></button>
          <button className="btn right" onClick={(e) => shiftNext()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default index;
