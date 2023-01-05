import React from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  position: absolute;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  box-shadow: 2px 3px 20px whitesmoke, 0 0 50px #613c17 inset;
  background: black;
  filter: url(#wavy2);
  left: ${(props) => props.left};
  top: ${(props) => props.right};
  transform: ${(props) => props.transform};
  z-index: 98;
`;

const VintageContainer = ({ ...props }) => {
  const { left, right, height, width, transform, isActive } = props;
  return (
    <>
      <Container
        height={height}
        width={width}
        left={left}
        right={right}
        isActive={isActive}
        transform={transform}
      ></Container>
      <svg style={{ display: "none" }}>
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          />
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg>
    </>
  );
};

export default VintageContainer;
