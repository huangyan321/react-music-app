import styled from 'styled-components';
export const HotTopWrapper = styled.div`
  .bill {
    height: 472px;
    margin-top: 20px;
    display: flex;

    padding-left: 1px;
    background: url(${require('@/assets/img/recommend-top-bg.png')}) no-repeat;
    .blk {
      width: 230px;
    }
    .blk-top {
      box-sizing: content-box;
      height: 100px;
      padding: 20px 0 0 19px;
      display: flex;
      justify-content: flex-start;
      .cover {
        width: 80px;
        height: 80px;
        display: inline-block;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .msk {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .title {
        width: 116px;
        margin: 6px 0 0 10px;
        .bottom {
          margin-top: 10px;
          .play {
            width: 22px;
            height: 22px;
            margin-right: 10px;
            background-position: -267px -205px;
          }
          .subscribe {
            width: 22px;
            height: 22px;
            margin-right: 10px;
            background-position: -300px -205px;
          }
        }
      }
    }
    .blist {
      height: 319px;
      margin-left: 50px;
      line-height: 32px;
      .list-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        &:hover {
          .thide {
            width: 110px !important;
          }
          .opera {
            display: flex;
          }
        }
        width: 170px;
        height: 32px;
        .top-number {
          position: absolute;
          top: 0;
          left: -35px;
          display: inline-block;
          overflow: hidden;
          width: 35px;
          height: 32px;
          text-align: center;
          color: #666;
          font-size: 16px;
        }
        .thide {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 170px;
          height: 32px;
        }
        .opera {
          display: none;
          width: 82px;
          justify-content: center;
          align-items: center;
          .list-item {
            display: inline-block;
            width: 17px;
            height: 17px;
            margin-left: 5px;
            vertical-align: middle;
          }
          .item-play {
            background-position: -267px -268px;
          }
          .item-add {
            background-position: 1px -700px;
            margin-top: 4px;
          }
          .item-sub {
            background-position: -297px -268px;
          }
        }
      }
      .showmore {
          padding-left: 80px;
      }
    }
  }
`;
