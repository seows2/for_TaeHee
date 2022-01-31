import React from "react";
import * as S from "./Intro.style";

const Intro = () => {
  return (
    <S.Wrapper>
      <div className="image">
        <img src="/images/intro_image.png" alt="결혼축하 문구" />
      </div>
      <img src="/images/hands.png" alt="맞잡은 손" className="hands" />

      <p className="header">
        &quot;우리 손 잡을까요?&quot;
        <br />
      </p>
      <p>
        누군가에게 자신을 이해시키는 일은 어렵습니다.
        <br />
        자기도 자신을 100% 다 이해하지 못하는데, 다른 사람은 오죽할까요.
        <br />
        하지만 여기 서로를 간절하게 이해하고 싶어하는 두 사람이 있네요.
        <br />
        당신이 어떤 사람인지
        <br />
        어떤 과정을 통해 이런 사람이 되었는지를
        <br />
        사랑한다는 말이 어울리는 사람과 함께
        <br />
      </p>
      <p className="header">
        22년 3월 27일 일요일
        <br />
        오전 11시
        <br />
      </p>
      <p>
        이제는 손을 잡고 함께 나란히 걸어가고~~
        <br />
        대충 영원히 사랑하라는 오글거리는 말
        <br />
        대충 영원히 사랑하라는 오글거리는 말
        <br />
        대충 영원히 사랑하라는 오글거리는 말
        <br />
        대충 영원히 사랑하라는 오글거리는 말
        <br />
        대충 영원히 사랑하라는 오글거리는 말
        <br />
        대충 영원히 사랑하라는 오글거리는 말
        <br />
        대충 영원히 사랑하라는 오글거리는 말
        <br />
      </p>
    </S.Wrapper>
  );
};

export default Intro;
