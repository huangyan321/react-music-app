import React, { memo } from 'react';
import { ThemeHeaderWrapper } from './style';
const ThemeHeader = memo((props) => {
  const { title, keywords = [] } = props;
  return (
    <ThemeHeaderWrapper className="wrap-v2">
      <div className="left sprite_02">
        <div className="title">{title}</div>
        <div className="keywords flex-center">
          {keywords.map((item, index) => {
            return (
              <div>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="sprite_02 more-icon">&nbsp; </i>
      </div>
    </ThemeHeaderWrapper>
  );
});

export default ThemeHeader;
