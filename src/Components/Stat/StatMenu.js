import React from "react";
import styled from "styled-components";
import { useLoad } from "../../Context/isLoaded";
import { VscClose } from "react-icons/vsc";
import VintageContainer from "../LeatheryDiv/VintageContainer";

const Contain = styled.div`
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  position: absolute;
  height: 600px;
  width: 700px;
  box-shadow: 2px 3px 20px whitesmoke, 0 0 50px #613c17 inset;
  background: black;
  filter: url(#wavy2);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 98;
`;
const Level = styled.div`
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  color: white;
  height: 600px;
  width: 700px;
  margin: 50px;
`;
const TopLayer = styled.div`
  display: flex;
  gap: 10px;
`;
const Img = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #613c17;
`;
const Title = styled.div`
  font-size: 20px;
`;

const Stats = styled.div`
  border: 1px solid #613c17;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;
const Name = styled.div`
  align-self: center;
  margin-top: 20px;
  border: 1px solid #613c17;
  width: 250px;
  text-align: center;
`;
const Attribute = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const Photo = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid #613c17;
`;
const AtName = styled.div``;
const MYLevel = styled.div`
  border-bottom: 1px solid #613c17;
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding-bottom: 10px;
`;
const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;
const Exp = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
`;
const Close = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999;
  color: white;
  cursor: pointer;
`;

const StatMenu = () => {
  const { clicked } = useLoad();

  const style = {
    left: "50%",
    right: "50%",
    height: "600px",
    width: "700px",
    transform: "translate(-50%, -50%)",
    isActive: clicked,
  };

  return (
    <>
      {console.log(clicked)}
      <VintageContainer {...style} />
      <Level isActive={clicked}>
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
