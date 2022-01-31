import React from "react";
import styled from "styled-components";
import Divider from "./components/Divider";
import FlowerRain from "./components/FlowerRain";
import Intro from "./components/Intro";
import GlobalStyle from "./styles/globalStyle";

const Main = styled.div`
  max-width: 460px;
  margin: 0 auto;
  font-size: 1rem;
  color: #202121;
  background-color: #fffdf9;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <FlowerRain />
        <Intro />
        <Divider />
      </Main>
    </>
  );
}

export default App;
