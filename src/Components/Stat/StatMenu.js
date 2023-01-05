import React from "react";
import styled from "styled-components";
import { useLoad } from "../../Context/isLoaded";
import { VscClose } from "react-icons/vsc";
import VintageContainer from "../LeatheryDiv/VintageContainer";
import {
  Level,
  TopLayer,
  Img,
  Title,
  Stats,
  Name,
  Attribute,
  Photo,
  AtName,
  MYLevel,
  Wrap,
  Exp,
  Wrapper,
  Close,
} from "./styled.js";

const StatMenu = () => {
  const { menuStack } = useLoad();
  console.log(menuStack);
  const statState = menuStack.find((item) => item.title === "Stats");
  const isActive = statState ? statState.state : false;

  console.log(statState ? statState : "not in our stack");
  const style = {
    left: "50%",
    right: "50%",
    height: "600px",
    width: "700px",
    transform: "translate(-50%, -50%)",
    isActive: isActive,
  };

  return (
    <>
      <VintageContainer {...style} />
      <Level isActive={isActive}>
        <Wrapper>
          <TopLayer>
            <Img></Img>
            <Title>Stats</Title>
          </TopLayer>
          <Stats>
            <Name>Kevin A Rios</Name>
            <MYLevel>
              <Attribute>
                <Wrap>
                  <Photo></Photo>
                  <AtName>Age</AtName>
                </Wrap>
                <Exp>23 yrs</Exp>
              </Attribute>
              <Attribute>
                <Wrap>
                  <Photo></Photo>
                  <AtName>Experience</AtName>
                </Wrap>
                <Exp>23 yrs</Exp>
              </Attribute>
              <Attribute>
                <Wrap>
                  <Photo></Photo>
                  <AtName>Javascript</AtName>
                </Wrap>
                <Exp>23 yrs</Exp>
              </Attribute>
            </MYLevel>
            <Attribute>
              <Wrap>
                <Photo></Photo>
                <AtName>Javascript</AtName>
              </Wrap>
              <Exp>23 yrs</Exp>
            </Attribute>
            <Attribute>
              <Wrap>
                <Photo></Photo>
                <AtName>Javascript</AtName>
              </Wrap>
              <Exp>23 yrs</Exp>
            </Attribute>
            <Attribute>
              <Wrap>
                <Photo></Photo>
                <AtName>Javascript</AtName>
              </Wrap>
              <Exp>23 yrs</Exp>
            </Attribute>
            <Attribute>
              <Wrap>
                <Photo></Photo>
                <AtName>Javascript</AtName>
              </Wrap>
              <Exp>23 yrs</Exp>
            </Attribute>
          </Stats>
          <Close>
            <VscClose color="white" />
          </Close>
        </Wrapper>
      </Level>
    </>
  );
};

export default StatMenu;
