import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ThemeHeader from '@/components/theme-header';
import { getTopListAction } from '../../store/actions';
import { HotTopWrapper } from './style';
const HotTop = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch]);
  const { topList } = useSelector((state) => {
    return {
      topList: state.getIn(['recommendReducer', 'topList']),
    };
  }, shallowEqual);
  return (
    <HotTopWrapper>
      <ThemeHeader title="榜单"></ThemeHeader>
      <div className="bill top-bg">
        {topList.map((item, index) => {
          return (
            <div className="blk">
              <div className="blk-top">
                <div className="cover">
                  <img src={item && item.coverImg} alt="" />
                  <a href="todo" className="msk">
                    &nbsp;
                  </a>
                </div>
                <div className="title">
                  <a href="todo">
                    <h3>{item.name}</h3>
                  </a>
                  <div className="bottom">
                    <button className="play sprite_02"></button>
                    <button className="subscribe sprite_02"></button>
                  </div>
                </div>
              </div>
              <div>
                <ol className="blist">
                  {item.list.map((i, idx) => {
                    return (
                      <li className="list-item">
                        <span className="top-number">{idx + 1}</span>
                        <a href="todo" className="thide">
                          {i.name}
                        </a>
                        <div className="opera">
                          <a
                            href="todo"
                            className="sprite_02 item-play list-item"
                          >
                            &nbsp;
                          </a>
                          <a
                            href="todo"
                            className="sprite_icon2 item-add list-item"
                          >
                            &nbsp;
                          </a>
                          <a
                            href="todo"
                            className="sprite_02 item-sub list-item"
                          >
                            &nbsp;
                          </a>
                        </div>
                      </li>
                    );
                  })}
                  <p className="showmore">
                    <a href="todo">查看全部></a>
                  </p>
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </HotTopWrapper>
  );
});

export default HotTop;
