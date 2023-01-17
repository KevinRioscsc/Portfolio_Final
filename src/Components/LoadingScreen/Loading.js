import React from "react";
import bonfire from "../../Images/bonfire.jpg";
import logo from "../../Images/logo.png";
import { useLoad } from "../../Context/isLoaded";
import {
  Container,
  BonfireImg,
  Wrapper,
  LoadTitle,
  Logo,
  TextWrap,
  Flex,
  Line,
} from "./LoadingStyle";
//

const Loading = () => {
  const { Loaded } = useLoad();
  return (
    <>
      <Container isActive={Loaded}>
        <Flex>
          <Logo src={logo} height={70} style={{ opacity: "0.7" }} />
          <TextWrap>
            <Line isTitle={true}>JavaScript</Line>
            <Line>JavaScript is the wizard's magic</Line>
            <Line>that brings websites to life.</Line>
            <Line>
              {" "}
              With JavaScript, you can conjure interactive forms, animations,
            </Line>
            <Line>and games with the wave of a wand.</Line>
            <Line></Line>
            <Line>
              JavaScript is executed by the user's web browser, so it is{" "}
            </Line>
            <Line>
              important to test your code on multiple browsers to ensure
            </Line>
            <Line>compatibility.</Line>
            <Line></Line>
            <Line></Line>
          </TextWrap>
        </Flex>
        <Wrapper>
          <BonfireImg src={bonfire} />
          <LoadTitle>Portfolio</LoadTitle>
        </Wrapper>
      </Container>
    </>
  );
};

export default Loading;
