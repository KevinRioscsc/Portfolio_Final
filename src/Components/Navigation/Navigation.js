import React from "react";
import styled from "styled-components";
import { useLoad } from "../../Context/isLoaded";

const Container = styled.div`
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  position: absolute;
  height: 600px;
  width: 500px;
  box-shadow: 2px 3px 20px whitesmoke, 0 0 50px #613c17 inset;
  background: black;
  filter: url(#wavy2);
  left: 10%;
  top: 20%;
  z-index: 98;
`;
const List = styled.div`
  position: absolute;
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  left: 10%;
  top: -5%;
  z-index: 999;
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 150px;
`;
const Category = styled.div`
  width: 250px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  font-size: 17px;
  color: white;
  border-left: 15px solid rgb(0, 0, 0, 1);
  border-right: 15px solid rgb(0, 0, 0, 1);
  box-shadow: 0;

  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 20px 10px black inset;
    background-color: #cf5300b3;
  }
`;

const Navigation = ({ isActive }) => {
  const { setClick } = useLoad();

  return (
    <>
      <Container isActive={isActive}></Container>
      <List isActive={isActive}>
        <Category onClick={() => setClick(true)}>Level up</Category>
        <Category>Travel</Category>
        <Category>About Me</Category>
        <Category>Contact Me</Category>
      </List>

      <svg>
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </>
  );
};

export default Navigation;
