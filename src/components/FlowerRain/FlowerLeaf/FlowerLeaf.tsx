import React, { FC } from "react";
import * as S from "./FlowerLeaf.style";

const getRandomLeaf = () => {
  const imageNumber = Math.floor(Math.random() * (6 - 1) + 1);
  return `/images/floral-leaf/floral-leaf-${imageNumber}.png`;
};

const makeRandomLeafStyleProps = () => {
  const fallDelay = Math.random() * 12;
  const shakeDelay = Math.random() * 3;

  const shakeDegree = Math.random() * 360;

  const leftPosition = Math.random() * 100;
  const translateX = Math.random() * (80 - 20) + 20;

  const fallDuration = Math.random() * (16 - 9) + 9;
  const shakeDuration = Math.random() * (3 - 2) + 2;

  return {
    fallDelay: fallDelay + "s",
    shakeDelay: shakeDelay + "s",

    shakeDegree: shakeDegree + "deg",

    leftPosition: leftPosition + "%",
    translateX: translateX + "px",

    fallDuration: fallDuration + "s",
    shakeDuration: shakeDuration + "s",
  };
};

const FlowerLeaf: FC = () => {
  const imageUrl = getRandomLeaf();

  return <S.FlowerLeaf src={imageUrl} {...makeRandomLeafStyleProps()} />;
};

export default FlowerLeaf;
