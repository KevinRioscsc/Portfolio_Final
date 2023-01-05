import React from "react";
import styled from "styled-components";
import VintageContainer from "../LeatheryDiv/VintageContainer";
import { IoMdArrowBack } from "react-icons/io";
import { useLoad } from "../../Context/isLoaded";
import {
  Container,
  Wrapper,
  VidContain,
  Video,
  DescrDiv,
  Title,
  Description,
  Catagories,
  LinksDiv,
  GitHubTitle,
  DescrTitle,
  Tag,
  Para,
  LinkTitle,
  Back,
} from "./Styled";

const ShowCase = () => {
  const { menuStack, setStack } = useLoad();
  const statState = menuStack.find((item) => item.title === "BlockChain");
  const isActive = statState ? statState.state : false;

  const goBack = () => {
    setStack((prev) => {
      return prev
        .filter((item) => item.title !== "BlockChain")
        .map((item, index) => {
          console.log(item);
          if (index === prev.length - 2) {
            console.log("this item is", item);
            return { ...item, state: true };
          }
          return { ...item };
        });
    });
  };

  const style = {
    left: "50%",
    right: "50%",
    height: "600px",
    width: "1100px",
    transform: "translate(-50%, -50%)",
    isActive: isActive,
  };
  return (
    <>
      <VintageContainer {...style} />
      <Container isActive={isActive}>
        <Back onClick={goBack}>
          <IoMdArrowBack size={40} color={"white"} />
        </Back>
        <Wrapper>
          <VidContain>
            <Video></Video>
          </VidContain>
          <DescrDiv>
            <Title>BlockChain Website</Title>

            <Catagories>
              <DescrTitle>Material Learned: </DescrTitle>
              <Tag></Tag>
            </Catagories>
            <Description>
              <DescrTitle>Description: </DescrTitle>
              <Para>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                possimus inventore tenetur tempore consequuntur mollitia
                exercitationem, officiis dignissimos fugit, ipsa asperiores
                dolore, minima aperiam labore blanditiis modi dolor facere
                culpa.
              </Para>
            </Description>
            <LinksDiv>
              <LinkTitle>Website</LinkTitle>
              <GitHubTitle> Github</GitHubTitle>
            </LinksDiv>
          </DescrDiv>
        </Wrapper>
      </Container>
    </>
  );
};

export default ShowCase;
