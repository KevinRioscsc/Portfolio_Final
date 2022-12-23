import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 40px;
  width: 600px;
  background-color: black;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 40px solid rgba(0, 0, 0, 0.2);
  border-left: 40px solid rgba(0, 0, 0, 0.2);
  opacity: 0.7;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.p`
  color: white;
`;

const StartNavigation = () => {
  return (
    <>
      <Container>
        <Content>Press E: Rest At Bonfire</Content>
      </Container>
    </>
  );
};

export default StartNavigation;
