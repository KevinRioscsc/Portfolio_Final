import React from "react";
import styled from "styled-components";
import { useLoad } from "../../Context/isLoaded";

const Wrapper = styled.div`
  background-color: black;
  height: 100px;
  width: 100%;
  position: absolute;
  z-index: 9999999999999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  color: #e78c4f;
  opacity: 0;
  visibility: hidden;

  animation: ${(props) =>
    props.isActive ? "overlay-animation 4s ease-in-out" : "unset"};

  @keyframes overlay-animation {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    30% {
      opacity: 1;
      visibility: visible;
    }

    90% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
const ShadowLeft = styled.div`
  animation: ${(props) =>
    props.isActive ? "left-animation 4s ease-in-out" : "unset"};

  @keyframes left-animation {
    0% {
      text-shadow: #ff4800 -15px 0px 20px;
    }
    50% {
      text-shadow: #ff4800 -30px -8px 20px;
    }

    100% {
      text-shadow: #ff4800 -15px 0px 20px;
    }
  }
`;
const ShadowMiddle = styled.div`
  animation: ${(props) =>
    props.isActive ? "middle-animation 4s ease-in-out" : "unset"};

  @keyframes middle-animation {
    0% {
      text-shadow: #ff4800 0px 0px 20px;
    }
    50% {
      text-shadow: #ff4800 0px -18px 20px;
    }

    100% {
      text-shadow: #ff4800 0px 0px 20px;
    }
  }
`;
const ShadowRight = styled.div`
  animation: ${(props) =>
    props.isActive ? "right-animation 4s ease-in-out" : "unset"};
  @keyframes right-animation {
    0% {
      text-shadow: #ff4800 10px 0px 20px;
    }
    50% {
      text-shadow: #ff4800 25px -8px 20px;
    }

    100% {
      text-shadow: #ff4800 10px 0px 20px;
    }
  }
`;

const BonOverlay = () => {
  const { menuStack } = useLoad();
  return (
    <div>
      <Wrapper isActive={!menuStack[0].state ? true : false}>
        <ShadowLeft isActive={!menuStack[0].state ? true : false}>
          BONF
        </ShadowLeft>
        <ShadowMiddle isActive={!menuStack[0].state ? true : false}>
          I
        </ShadowMiddle>
        <ShadowRight isActive={!menuStack[0].state ? true : false}>
          RE LIT
        </ShadowRight>
      </Wrapper>
    </div>
  );
};

export default BonOverlay;
