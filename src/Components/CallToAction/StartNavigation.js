import React from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: all 0.2s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  position: absolute;
  background-blend-mode: hue;
  height: 40px;
  width: 600px;
  background-color: black;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-right: 40px solid rgba(0, 0, 0, 0.2);
  border-left: 40px solid rgba(0, 0, 0, 0.2);

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

const StartNavigation = ({ isActive }) => {
  return (
    <>
      <Container isActive={isActive}>
        <Content>Press E: Rest At Bonfire</Content>
      </Container>
    </>
  );
};

export default StartNavigation;
