import styled from "styled-components";

const GalleryContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  margin-left: -22px;
  margin-right: -22px;
  overflow-x: auto;
`;

const GalleryInner = styled.div`
  display: flex;
  width: 3000px;
`;

const GalleryItem = styled.div`
  flex: 0 0 240px;
  position: relative;
  width: 240px;
  height: 360px;
  margin-right: 10px;

  &:before {
    position: absolute;
    top: 0;
    left: -1px;
    display: block;
    content: "";
    width: 2px;
    height: 360px;
    background-color: #fffdf9;
    z-index: 11;
  }
  &:after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    content: "";
    width: 2px;
    height: 360px;
    background-color: #fffdf9;
    z-index: 11;
  }
`;

const GalleryImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 360px;
  overflow: hidden;
  img {
    position: relative;
    left: 20px;
    transition: transform 100ms;
    width: 296px;
    height: 360px;
  }
`;

const GalleryArch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 360px;
  background-image: url("/images/arch.png");
  background-repeat: no-repeat;
  background-size: 240px auto;
  background-position: top left;
  z-index: 10;
`;

export {
  GalleryContainer,
  GalleryInner,
  GalleryItem,
  GalleryImage,
  GalleryArch,
};
