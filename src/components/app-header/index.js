import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'
import { HeaderWrapper } from './style';
const MusicHeader = memo(() => {
  return (
    <div>
      <HeaderWrapper>
        <NavLink to="/">发现音乐</NavLink>
        <NavLink to="/mine">我的音乐</NavLink>
        <NavLink to="/friends">关注</NavLink>
      </HeaderWrapper>
    </div>
  );
});

export default MusicHeader;
