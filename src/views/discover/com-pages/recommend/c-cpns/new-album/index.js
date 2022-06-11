import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';

import ThemeHeader from '@/components/theme-header';
import AlbumItem from '@/components/album-item';
import { getNewAlbumAction } from '../../store/actions';
import { NewAlbumWrapper } from './style';

const NewAlbum = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction({ limit: 10, id: 32311 }));
  }, [dispatch]);
  const { newAlbums } = useSelector((state) => {
    return {
      newAlbums: state.getIn(['recommendReducer', 'newAlbums']),
    };
  }, shallowEqual);
  return (
    <NewAlbumWrapper>
      <ThemeHeader title="新碟上架"></ThemeHeader>
      <div className="disk">
        <div className="inner">
          <Carousel autoplay dots={false} className="carousel">
            {[0, 1]
              .map((item) => {
                return newAlbums.slice(item * 5, item * 5 + 5);
              })
              .map((item) => {
                return (
                  <div className="onehang">
                    {item.map((item) => {
                      return <AlbumItem key={item.id} info={item}></AlbumItem>;
                    })}
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  );
});

export default NewAlbum;
