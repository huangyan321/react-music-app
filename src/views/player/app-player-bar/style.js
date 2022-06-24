import styled from 'styled-components';
export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat-x;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 47px;
  }
`;
export const Control = styled.div`
  display: flex;
  align-items: center;
  .pre,
  .next {
    width: 28px;
    height: 28px;
    margin: 0 8px;
    text-indent: -9999px;
  }
  .pre {
    background-position: 0 -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    background-position: 0 -204px;
    text-indent: -9999px;
  }
  .next {
    background-position: -80px -130px;
  }
`;
export const MusicInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;
  .image {
    position: relative;
    .cover {
      width: 34px;
      height: 34px;
    }
    .mask {
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }
  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
    .top-info {
      display: flex;
      align-items: center;
    }
    .name {
      max-width: 300px;
    }
    .mv {
      width: 19px;
      height: 17px;
      margin: 0 5px;
      display: inline-block;
      background-position: 0 -57px;
    }
    .singer-name {
      max-width: 220px;
      margin-left: 15px;
      color: #9b9b9b;
      a {
        display: inline-block;
        color: #9b9b9b;
      }
    }
    .link {
      width: 14px;
      height: 15px;
      margin: 0 5px;
      display: inline-block;
      background-position: -110px -103px;
    }
    .ant-slider {
      margin: 2px 6px 2px;
    }
  }
`;
export const Operation = styled.div``;
