import React from "react";
import GalleryContainer from "./G.Container";
import * as S from "./Gallery.style";

const Gallery = () => {
  return (
    <S.GalleryWrapper>
      <img src="/images/bunny.png" alt="토키 한 쌍" className="bunny" />
      <S.Title>Photo Gallery</S.Title>
      <GalleryContainer />
    </S.GalleryWrapper>
  );
};

export default Gallery;
