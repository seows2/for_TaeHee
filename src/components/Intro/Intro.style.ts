import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: 22px;
  padding-right: 22px;
  text-align: center;

  & > p {
    margin-bottom: 16px;
    line-height: 24px;

    &.header {
      color: #295238;
    }
  }

  & .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  
  & .image {
    display: flex;
    flex: 1;
    padding-left: 22px;
    padding-right: 22px;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 30px;
    img {
      max-width: 130%;
      max-height: 130%;
    }
`;

export { Wrapper };
