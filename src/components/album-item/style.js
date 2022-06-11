import styled from 'styled-components';
export const AlbumItemWrapper = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  background-position: -260px 100px;
  font-size: 12px;
  .cover {
    width: 100px;
    height: 100px;
    margin-bottom: 7px;
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
    }
  }
`;
