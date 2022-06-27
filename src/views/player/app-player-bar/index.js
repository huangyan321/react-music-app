import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { PlayerBarWrapper, Control, MusicInfo, Operation } from './style';
import { Slider } from 'antd';

import { getSongDetailAction } from '../store/actions';
import { formatImgUrl, formatDt, getMusicUrl } from '@/utils/usual';
const Player = memo(() => {
  //data hooks
  const [playStatus, setPlayStatus] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const dispatch = useDispatch();
  const { currentSong } = useSelector((state) => {
    return {
      currentSong: state.getIn(['songsDetailsReducer', 'currentSong']),
    };
  }, shallowEqual);

  //other hooks
  useEffect(() => {
    dispatch(getSongDetailAction({ ids: 1958954250 }));
  }, [dispatch]);

  const playerRef = useRef();

  //获取audio标签ref
  //页面展示相关
  const musicName = currentSong && currentSong.name;
  const artistName =
    currentSong &&
    currentSong.ar &&
    currentSong.ar[0] &&
    currentSong.ar[0].name;
  const album = currentSong && currentSong.al && currentSong.al.picUrl;
  const duration = currentSong && currentSong.dt;
  const showDuration = formatDt(duration);
  const showCurrentTime = formatDt(currentTime);
  const musicId = currentSong && currentSong.id;
  useEffect(() => {
    playerRef.current.src = getMusicUrl(musicId);
  }, [currentSong, musicId]);
  //触发播放
  const togglePlay = useCallback(() => {
    if (musicId) {
      if (playStatus) {
        playerRef.current.pause();
      } else {
        // playerRef.current.src = getMusicUrl(33894312);
        playerRef.current.play();
      }
      setPlayStatus(!playStatus);
    }
    // setPlayStatus(!playStatus);
  }, [playStatus, musicId]);

  const timeUpdate = (e) => {
    if (!isDrag) {
      setCurrentTime((e.target.currentTime * 1000).toFixed(0));
    }
  };

  const sliderChange = useCallback((value) => {
    setIsDrag(true);
    setCurrentTime(value);
  }, []);
  const sliderAfterChange = useCallback((value) => {
    setIsDrag(false);
    playerRef.current.currentTime = value / 1000;
    playerRef.current.play();
    setPlayStatus(true);
  }, []);
  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control playStatus={playStatus}>
          <button className="sprite_player pre"></button>
          <button className="sprite_player play" onClick={togglePlay}></button>
          <button className="sprite_player next"></button>
        </Control>
        <MusicInfo>
          <div className="image">
            <img
              className="cover"
              src={album && formatImgUrl(album, 34)}
              alt=""
            />
            <a className="mask sprite_player" href="/todo">
              {' '}
            </a>
          </div>
          <div className="info">
            <div className="top-info">
              <a href="/todo" className="name">
                {musicName}
              </a>
              <a href="/todo" className="mv sprite_player">
                {' '}
              </a>
              <span className="singer-name">
                <a href="/todo"> {artistName}</a>
              </span>
              <a href="/todo" className="link sprite_player">
                {' '}
              </a>
            </div>
            <div className="bar">
              <Slider
                tooltipVisible={false}
                max={duration}
                value={currentTime}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              ></Slider>
              <div className="timer">
                <em>{showCurrentTime}</em>/{showDuration}
              </div>
            </div>
          </div>
        </MusicInfo>
        <Operation>
          <div>
            <a href="/todo" className="ico huazhonghua">
              画中画歌词
            </a>
            <a href="/todo" className="ico sprite_player like">
              收藏
            </a>
            <a href="/todo" className="ico sprite_player share">
              分享
            </a>
          </div>
          <div className="ctrl sprite_player">
            <a href="/todo" className="ico volume sprite_player">
              音量
            </a>
            <a href="/todo" className="ico loop sprite_player">
              循环
            </a>
            <span className="add sprite_player">
              <a href="/todo" className="list sprite_player ico">
                10
              </a>
            </span>
          </div>
        </Operation>
      </div>
      <audio ref={playerRef} onTimeUpdate={timeUpdate}></audio>
    </PlayerBarWrapper>
  );
});

export default Player;
