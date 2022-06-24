import React, { memo } from 'react';
import { PlayerBarWrapper, Control, MusicInfo, Operation } from './style';
import { Slider } from 'antd';
const Player = memo(() => {
  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player pre"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <MusicInfo>
          <div className="image">
            <img
              className="cover"
              src="http://p3.music.126.net/dvMso9LK9cQeS5lpBc9JWg==/109951164853338121.jpg?param=34y34"
              alt=""
            />
            <a className="mask sprite_player" href="/todo">
              123
            </a>
          </div>
          <div className="info">
            <div className="top-info">
              <a href="/todo" className="name">
                Lost
              </a>
              <a href="/todo" className="mv sprite_player"> </a>
              <span className="singer-name">
                <a href="/todo">Liza Anne</a>
              </span>
              <a href="/todo" className="link sprite_player"> </a>
            </div>
            <Slider></Slider>
          </div>
        </MusicInfo>
        <Operation>123</Operation>
      </div>
    </PlayerBarWrapper>
  );
});

export default Player;
