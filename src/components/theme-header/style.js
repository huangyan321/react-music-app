import styled from 'styled-components';
export const ThemeHeaderWrapper = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;
  .left {
    display: flex;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    .title {
      font-size: 20px;
    }
    .keywords {
      margin: 7px 0 0 20px;
      .divider {
        margin: 0 10px;
      }
    }
  }
  .right {
    margin-top: 9px;
    .more-icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
`;
