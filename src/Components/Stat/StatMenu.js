import React from "react";
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
  Back,
} from "./styled.js";
import useAddToStack from "../../Hooks/useAddToStack";
import { IoMdArrowBack } from "react-icons/io";
import useRemoveFromStack from "../../Hooks/useRemoveFromStack";

const StatMenu = () => {
  const { isActive } = useAddToStack("Stats");
  const { goBack } = useRemoveFromStack("Stats");

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
        <Back onClick={goBack}>
          <IoMdArrowBack size={40} color={"white"} />
        </Back>
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
        </Wrapper>
      </Level>
    </>
  );
};

export default StatMenu;
