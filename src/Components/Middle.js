import React from "react";

import styled from "styled-components";
import Header from "./Header";
import Recommendations from "./Recommendations";
import Videos from "./Videos";

export default function Middle() {
  return (
    <Container>
      <Header />
      <Recommendations />
      <Videos />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 200px);
`;
