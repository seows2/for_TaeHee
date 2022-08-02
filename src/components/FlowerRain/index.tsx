import React, { FC } from "react";
import FlowerLeaf from "./FlowerLeaf/FlowerLeaf";

const renderFlowerLeafs = Array.from({ length: 12 }).map((_, idx) => (
  <FlowerLeaf key={idx} />
));

const FlowerRain: FC = () => {
  return <div>{renderFlowerLeafs}</div>;
};

export default FlowerRain;
