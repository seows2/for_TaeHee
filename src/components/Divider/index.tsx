import React, { FC } from "react";
import * as S from "./Divider.style";

const Divider: FC = () => {
  return (
    <S.Divider>
      <img src="/images/divider.png" alt="꽃으로 된 구분 선" />
    </S.Divider>
  );
};

export default Divider;
