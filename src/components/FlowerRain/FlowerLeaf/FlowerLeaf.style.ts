import styled, { keyframes } from "styled-components";

interface FlowerProps {
  fallDelay: string;
  shakeDelay: string;

  shakeDegree: string;

  leftPosition: string;
  translateX: string;

  fallDuration: string;
  shakeDuration: string;
}

const flowerleafsFall = keyframes`
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
`;

const flowerleafsShake = (translateX: string, shakeDegree: string) => keyframes`
    0% {
      transform: translateX(0px) rotate(0deg);
    }
    50% {
      transform: translateX(${translateX}) rotate(${shakeDegree});
    }
    100% {
      transform: translateX(0px) rotate(0deg);
    }
`;

const FlowerLeaf = styled.img<FlowerProps>`
  z-index: 100;
  left: ${(props) => props.leftPosition};
  animation-delay: ${(props) => `${props.fallDelay}, ${props.shakeDelay}`};
  position: fixed;
  top: -10%;
  user-select: none;
  cursor: default;
  animation-name: ${flowerleafsFall},
    ${(props) => flowerleafsShake(props.translateX, props.shakeDegree)};
  animation-duration: ${(props) =>
    `${props.fallDuration}, ${props.shakeDuration}`};
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
  animation-play-state: running, running;
`;

export { FlowerLeaf };
