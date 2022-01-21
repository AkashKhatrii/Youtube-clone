import "./styles.css";
import styled from "styled-components";
import Person from "./Components/Person";
import Left from "./Components/Left";
import Middle from "./Components/Middle";

export default function App() {
  return (
    <Container>
      <Left />
      <Middle />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 2px;
`;
