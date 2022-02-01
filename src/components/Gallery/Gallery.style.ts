import styled from "styled-components";

const GalleryWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: 22px;
  padding-right: 22px;
  text-align: center;
  color: #295138;
  overflow: hidden;

  & .bunny {
    width: 75px;
    margin-bottom: 16px;
  }
`;

const Title = styled.div`
  font-size: 18px;
  letter-spacing: 5px;
  margin-bottom: 30px;
`;

export { GalleryWrapper, Title };
