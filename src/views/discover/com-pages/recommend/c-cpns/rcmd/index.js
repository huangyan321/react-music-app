import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ThemeHeader from '@/components/theme-header';
import SongItem from '@/components/song-item';

import { getPersonalizedAction } from '../../store/actions';
import { RcmdWrapper } from './style';
const Rcmd = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonalizedAction({ limit: 8 }));
  }, [dispatch]);
  const { rcmds = [] } = useSelector((state) => {
    return {
      rcmds: state.getIn(['recommendReducer', 'rcmd']),
    };
  }, shallowEqual);
  return (
    <RcmdWrapper>
      <ThemeHeader
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      ></ThemeHeader>
      <ul className="container">
        {rcmds.map((item, index) => {
          return (
            <li key={item.id}>
              <SongItem info={item}></SongItem>
            </li>
          );
        })}
      </ul>
    </RcmdWrapper>
  );
});

export default Rcmd;
