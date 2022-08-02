import React, { FC } from "react";
import * as S from "./Celebrate.style";

const Celebrate: FC = () => {
  return (
    <S.Celebrate>
      <div className="title">How to celebrate</div>
      <h2>두 사람에게 축하의 마음 전하는 방법</h2>
      <p className="black">
        직접 만나지는 못해도
        <br />
        축하해주고 싶은 마음이 가득한 당신!
        <br />
        축의금보다는 다른 형태로 쌀도 주고 선물도 주고~
        <br />
        부럽다 부러워
      </p>
      <img src="/images/goose.png" className="goose" alt="리본 달린 거위" />
      <h2>첫째. 쓸 때마다 당신을 떠올릴 선물하기</h2>
      <p className="black">
        [TODO] 선물 리스트, 이미지는 로컬에, <br /> 백처리는 firebase?
      </p>
    </S.Celebrate>
  );
};

export default Celebrate;
