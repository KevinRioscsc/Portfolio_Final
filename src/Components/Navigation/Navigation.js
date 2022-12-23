import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 600px;
  width: 500px;
  background-color: #050505;
  opacity: 0.7;
  left: 10%;
  top: 10%;
  z-index: 99;
`;
const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;
const Category = styled.div`
  width: 200px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  border-left: 50px solid rgba(0, 0, 0, 0.2);
  border-right: 50px solid rgba(0, 0, 0, 0.2);
  font-size: 17px;
  color: white;
  transition: all 0.2s ease-in-out;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  cursor: pointer;
  &:hover {
    background: #cf5300;
  }
`;

const Navigation = () => {
  return (
    <>
      <Container>
        <List>
          <Category>Level up</Category>
          <Category>Travel</Category>
          <Category>About Me</Category>
          <Category>Contact Me</Category>
        </List>
      </Container>
    </>
  );
};

export default Navigation;
