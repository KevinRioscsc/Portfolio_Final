import React from "react";
import VintageContainer from "../LeatheryDiv/VintageContainer";
import { IoMdArrowBack } from "react-icons/io";
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
  Flex,
  Source,
} from "./Styled";
import useRemoveFromStack from "../../Hooks/useRemoveFromStack";
import useAddToStack from "../../Hooks/useAddToStack";
import { projects } from "../../Data/projectData";

const ShowCase = () => {
  const { lastProject } = useAddToStack();
  const { goBack } = useRemoveFromStack(lastProject.title);
  const project = projects.find((item) => item.title === lastProject.title);
  const { isActive } = useAddToStack(project ? project.title : "");

  const style = {
    left: "50%",
    right: "50%",
    height: "700px",
    width: "1500px",
    transform: "translate(-50%, -50%)",
    isActive: isActive,
    responsWidth: "95%",
    responsTop: "50%",
    responsMax: "1555px",
    responsHeight: "80%",
  };
  return (
    <>
      <VintageContainer {...style} />
      <Container isActive={isActive}>
        <Back onClick={goBack}>
          <IoMdArrowBack size={40} color={"white"} />
        </Back>
        <Wrapper>
          {project ? (
            <>
              <VidContain>
                <Video autoPlay muted loop>
                  <Source src={project.video}></Source>
                </Video>
              </VidContain>
              <DescrDiv>
                <Title>{project.title}</Title>

                <Catagories>
                  <DescrTitle>Material Learned: </DescrTitle>

                  <Flex>
                    {project.materialUsed.map((item, index) => {
                      return <Tag key={item + index}>{item}</Tag>;
                    })}
                  </Flex>
                </Catagories>
                <Description>
                  <DescrTitle>Description: </DescrTitle>
                  <Para>{project.Description}</Para>
                </Description>
                <LinksDiv>
                  <LinkTitle>Website</LinkTitle>
                  <GitHubTitle> Github</GitHubTitle>
                </LinksDiv>
              </DescrDiv>
            </>
          ) : null}
        </Wrapper>
      </Container>
    </>
  );
};

export default ShowCase;
