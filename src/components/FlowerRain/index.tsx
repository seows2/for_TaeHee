import React, { FC } from "react";
import FlowerLeaf from "./FlowerLeaf/FlowerLeaf";

const renderFlowerLeafs = (n = 12) =>
  Array.from({ length: n }).map((_, idx) => <FlowerLeaf key={idx} />);

const FlowerRain: FC = () => {
  return <div>{renderFlowerLeafs()}</div>;
};

export default FlowerRain;
