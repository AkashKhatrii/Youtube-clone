import styled from "styled-components";

import React from "react";

export default function Recommendation({ type }) {
  return (
    <Button>
      <p>{type}</p>
    </Button>
  );
}

const Button = styled.a`
  border-radius: 20px;
  padding: 0px 15px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-right: 20px;
  text-decoration: none;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* a {
    text-decoration: none;
    color: black;
    width: 100%;
    background-color: transparent;
  } */
`;
