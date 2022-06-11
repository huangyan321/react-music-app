import React, { memo } from 'react';
import { formatImgUrl } from '@/utils/usual';
import { AlbumItemWrapper } from './style';
const AlbumItem = memo((props) => {
  const { info } = props;
  return (
    <AlbumItemWrapper className="sprite_02">
      <div className="cover">
        <img src={formatImgUrl(info.picUrl, 100)} alt="" />
        <a title={info.name} href="todo" className="mask sprite_cover">
          &nbsp;
        </a>
      </div>
      <p>{info.artist && info.artist.name}</p>
      <p>{info.name}</p>
    </AlbumItemWrapper>
  );
});

export default AlbumItem;
