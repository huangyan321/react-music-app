import styled from 'styled-components';
import sprite_01 from '@/assets/img/sprite_01.png';
export const HeaderWrapper = styled.div`
  font-size: 22px;
  .header_bar {
    height: 70px;
    background-color: #242424;
    .content {
      height: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .divider {
    height: 5px;
    background-color: #b2281e;
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    width: 176px;
    height: 69px;
    text-indent: -9999px;
    cursor: pointer;
    //可使用该方式导入背景图片
    /* background: url(${sprite_01}) no-repeat 0 9999px; */
    background-position: 0 0;
  }
  .select_title {
    height: 100%;
    display: flex;
    position: relative;
    a {
      height: 100%;
      display: block;
      line-height: 70px;
      padding: 0 20px;
      font-size: 14px;
      text-decoration: none;
      position: relative;
    }
    .active {
      background-color: #000000;
      color: #ffffff;
      .arrow {
        position: absolute;
        width: 12px;
        height: 7px;
        left: 50%;
        margin-left: -6px;
        background-position: -226px 0;
        overflow: hidden;
        top: 64px;
      }
    }
    a:hover {
      background-color: #000000;
      color: #ffffff;
    }
    li {
      position: relative;
      :last-of-type {
        ::after {
          content: '';
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background-position: -190px 0;
          background-image: url(${sprite_01});
          background-repeat: no-repeat;
        }
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > span,
  > button {
    margin: 0 5px;
  }
  .ant-input-search {
    width: 159px !important;
  }
`;
