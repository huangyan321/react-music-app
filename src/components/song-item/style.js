import styled from 'styled-components';
export const SongItemWrapper = styled.div`
  width: 140px;
  height: 180px;
  .cover {
    width: 140px;
    height: 140px;
    position: relative;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      color: #ccc;
      display: flex;
      align-items: center;
      .headset {
        width: 14px;
        height: 11px;
        display: inline-block;
        margin: 0 6px 0 10px;
        background-position: 0 -24px;
      }
      .play {
        position: absolute;
        right: 10px;
        bottom: 5px;
        width: 16px;
        height: 17px;
        background-position: 0 -60px;
      }
    }
  }
  .info {
    width: 100%;
    margin: 8px 0 3px;
    font-size: 14px;
  }
`;
