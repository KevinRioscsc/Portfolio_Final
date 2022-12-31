import React from "react";
import styled from "styled-components";
import VintageContainer from "../LeatheryDiv/VintageContainer";

const Container = styled.div`
  height: 600px;
  width: 1100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
const Wrapper = styled.div`
  padding: 2.5em;
  color: white;
  height: inherit;
  display: flex;
`;
const VidContain = styled.div`
  background: black;
  height: 85%;
  width: 50%;
  z-index: 999999999999999;
`;
const Video = styled.div``;
const DescrDiv = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
`;
const Title = styled.div`
  text-align: center;
  font-size: 25px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Catagories = styled.div``;
const LinksDiv = styled.div`
  display: flex;
  gap: 10px;
`;
const DescrTitle = styled.div``;
const Tag = styled.div``;
const Para = styled.div`
  width: 90%;
  align-self: center;
`;
const LinkTitle = styled.div`
  cursor: pointer;
  width: 70px;
  text-align: center;
  padding: 3px;
  border-bottom: 1px solid white;
`;
const GitHubTitle = styled.div`
  cursor: pointer;
  width: 70px;
  text-align: center;
  padding: 3px;
  border-bottom: 1px solid white;
`;
const weUpdate = styled.div``;

const ShowCase = () => {
  const style = {
    left: "50%",
    right: "50%",
    height: "600px",
    width: "1100px",
    transform: "translate(-50%, -50%)",
    isActive: true,
  };
  return (
    <div>
      <VintageContainer {...style} />
      <Container>
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
    </div>
  );
};

export default ShowCase;
