import React, { memo } from 'react';
import { SongItemWrapper } from './style';
import { formatImgUrl,formatQuantity } from '@/utils/usual';
const SongItem = memo((props) => {
  const { info = {} } = props;
  return (
    <SongItemWrapper>
      <div className="cover">
        <img src={formatImgUrl(info.picUrl, 140)} alt="" />
        <a className="mask sprite_cover" href="todo">
          &nbsp;
        </a>
        <div className="bottom sprite_cover">
          <i className="headset sprite_icon">&nbsp; </i>
          <span>{formatQuantity(info.playCount)}</span>
          <i className="play sprite_icon"></i>
        </div>
      </div>
      <p className="info">
        <a href="todo">{info.name}</a>
      </p>
    </SongItemWrapper>
  );
});

export default SongItem;
