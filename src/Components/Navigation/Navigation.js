import React from "react";
import styled from "styled-components";
import { useLoad } from "../../Context/isLoaded";
import VintageContainer from "../LeatheryDiv/VintageContainer";

const List = styled.div`
  position: absolute;
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  left: 10%;
  top: 0%;
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
const TitleDiv = styled.div`
  position: absolute;
  z-index: 9999;
  color: white;
  font-size: 25px;
  left: 13%;
  top: 24%;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
`;

const Navigation = ({ ...props }) => {
  const { navTitle, isActive, Title } = props;

  const style = {
    left: "10%",
    right: "20%",
    height: "600px",
    width: "500px",
    transform: "0",
    isActive: isActive,
  };

  return (
    <>
      <VintageContainer {...style} />
      <TitleDiv isActive={isActive}>{Title}</TitleDiv>
      <List isActive={isActive}>
        {navTitle.map((item, index) => {
          return (
            <Category key={index + item.title} onClick={() => item.click(true)}>
              {item.title}
            </Category>
          );
        })}
      </List>
    </>
  );
};

export default Navigation;
