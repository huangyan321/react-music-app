import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import { headerLinks } from '@/common/local-data';
import { Input, Button } from 'antd';
const { Search } = Input;
const MusicHeader = memo(() => {
  function renderLink(route) {
    if (!route.external) {
      return (
        <li key={route.title}>
          <NavLink to={route.link}>
            <em>{route.title}</em>
            <div className="arrow sprite_01">&nbsp;</div>
          </NavLink>
        </li>
      );
    }
    return (
      <li key={route.title}>
        <a href={route.link}>{route.title}</a>
        <div className="arrow sprite_01">&nbsp;</div>
      </li>
    );
  }
  const onSearch = (value) => console.log(value);
  return (
    <HeaderWrapper>
      <div className="header_bar">
        <div className="wrap-v1 content">
          <HeaderLeft>
            <h1 className="logo sprite_01">
              <a href="/#">logo</a>
            </h1>
            <ul className="select_title">
              {headerLinks.map((route) => {
                return renderLink(route);
              })}
            </ul>
          </HeaderLeft>
          <HeaderRight>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
            <Button className="creator" ghost>
              创作者中心
            </Button>
            <Button className="login_btn" type="text">
              登录
            </Button>
          </HeaderRight>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default MusicHeader;
