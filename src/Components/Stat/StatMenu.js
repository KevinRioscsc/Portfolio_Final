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
  Descrip,
  Flex,
  Paragraph,
} from "./styled.js";
import useAddToStack from "../../Hooks/useAddToStack";
import { IoMdArrowBack } from "react-icons/io";
import useRemoveFromStack from "../../Hooks/useRemoveFromStack";
import krios from "../../Images/kriosPic.png";
import JS from "../../Images/javascript.png";
import CSS from "../../Images/CSS.png";
import HTML from "../../Images/HTML.png";
import REACT from "../../Images/REACT.png";
import AGE from "../../Images/icon_level.png";
import EXP from "../../Images/icon_attunement.png";

const StatMenu = () => {
  const { isActive } = useAddToStack("Stats");
  const { goBack } = useRemoveFromStack("Stats");

  const style = {
    left: "50%",
    right: "50%",
    height: "600px",
    width: "1000px",
    transform: "translate(-50%, -50%)",
    isActive: isActive,
    responsWidth: "95%",
    responsTop: "50%",
    responsMax: "1050px",
    responsHeight: "80%",
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
            <Flex>
              <Img img={krios}></Img>
              <Title>Kevin's Stats</Title>
            </Flex>
            <Descrip>Description:</Descrip>
            <Paragraph>
              As a recent graduate of CSUDH, I am thrilled to have discovered my
              passion for the field of computer science. It was during my
              freshman year, while taking a programming class, that I fell in
              love with the art of solving puzzles and exploring the vast realm
              of the internet. This passion has only grown stronger in the years
              since, and I am now eager to pursue a career in web development.
            </Paragraph>
          </TopLayer>

          <Stats>
            <Name>Kevin A Rios</Name>
            <MYLevel>
              <Attribute>
                <Wrap>
                  <Photo img={AGE}></Photo>
                  <AtName>Age</AtName>
                </Wrap>
                <Exp>23 yrs</Exp>
              </Attribute>
              <Attribute>
                <Wrap>
                  <Photo img={EXP}></Photo>
                  <AtName>Experience</AtName>
                </Wrap>
                <Exp>5 yrs</Exp>
              </Attribute>
            </MYLevel>
            <Attribute>
              <Wrap>
                <Photo img={JS}></Photo>
                <AtName>Javascript</AtName>
              </Wrap>
              <Exp>5 yrs</Exp>
            </Attribute>
            <Attribute>
              <Wrap>
                <Photo img={CSS}></Photo>
                <AtName>CSS</AtName>
              </Wrap>
              <Exp>4 yrs</Exp>
            </Attribute>
            <Attribute>
              <Wrap>
                <Photo img={HTML}></Photo>
                <AtName>HTML</AtName>
              </Wrap>
              <Exp>5 yrs</Exp>
            </Attribute>
            <Attribute>
              <Wrap>
                <Photo img={REACT}></Photo>
                <AtName>REACT</AtName>
              </Wrap>
              <Exp>2 yrs</Exp>
            </Attribute>
          </Stats>
        </Wrapper>
      </Level>
    </>
  );
};

export default StatMenu;
