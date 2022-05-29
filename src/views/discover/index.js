//导入的第三方库
import React, { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
//导入的功能性函数
import { discoverMenu } from '@/common/local-data.js';
//导入的组件
import { DiscoverWrapper, TopMenu } from './style';
const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      <h1>
        <Outlet></Outlet>
      </h1>
    </DiscoverWrapper>
  );
});

export default Discover;
