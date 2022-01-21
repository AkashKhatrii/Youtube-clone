import styled from "styled-components";

import React from "react";
import Recommendation from "./Recommendation";

export default function Recommendations() {
  return (
    <Container>
      <Recommendation type="All" />
      <Recommendation type="Live" />
      <Recommendation type="Battlegrounds Mobile India" />
      <Recommendation type="JavaScript" />
      <Recommendation type="Computer Programming" />
      <Recommendation type="Esports" />
      <Recommendation type="Iphone" />
      <Recommendation type="PUBG MOBILE" />
      <Recommendation type="County News" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
