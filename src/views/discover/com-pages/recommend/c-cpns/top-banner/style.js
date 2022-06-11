import styled from 'styled-components';
export const BannerWrapper = styled.div`
  background-image: url(${(props) => props.coverImg});
  background-size: 6000px;
  .banner {
    display: flex;
    position: relative;
  }
`;
export const BannerLeft = styled.div`
  width: 729px;
  overflow: hidden;
  .banner-pic {
    .image {
      width: 729px;
      height: 284px;
    }
  }
`;
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/discover/toplist?id=19723756',
  target: '_blank',
})`
  width: 251px;
  height: 285px;
  background-image: url(${require('@/assets/img/download.png')});
`;
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
