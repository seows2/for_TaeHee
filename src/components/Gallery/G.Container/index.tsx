import React, { FC, useEffect, useState, UIEvent, useRef } from "react";
import * as S from "./style";

const GalleryContainer: FC = () => {
  const renderImages = (n = 12) =>
    Array.from({ length: n }, (_, i) => i).map((num, idx) => {
      const transfromStyle = `translateX(${
        (((scrollX - (num - 1) * 250) / 4.8 + 50 > 100
          ? 100
          : (scrollX - (num - 1) * 250) / 4.8 + 50 < 0
          ? 0
          : (scrollX - (num - 1) * 250) / 4.8 + 50) /
          100) *
        -55
      }px)`;

      return (
        <S.GalleryItem key={idx}>
          <S.GalleryImage>
            <img
              src={`/images/gallery/thm-${idx + 1}.jpeg`}
              alt="결혼 사진"
              style={{
                transform: transfromStyle,
              }}
            />
          </S.GalleryImage>
          <S.GalleryArch />
        </S.GalleryItem>
      );
    });
  const ContainerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const { current } = ContainerRef;
    if (!current) return;

    current.scrollLeft = 1430;
  }, []);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    setScrollX(event.currentTarget.scrollLeft);
  };

  return (
    <S.GalleryContainer ref={ContainerRef} onScroll={handleScroll}>
      <S.GalleryInner>{renderImages()}</S.GalleryInner>
    </S.GalleryContainer>
  );
};

export default GalleryContainer;
