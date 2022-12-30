import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 9999;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "0" : "1")};
  visibility: ${(props) => (props.isActive ? "hidden" : "visible")};
`;
export const BonfireImg = styled.img``;
export const Wrapper = styled.div`
  position: absolute;
  z-index: 9999999999;
  bottom: 5%;
  left: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: bonfire-animation ease-in-out 1s infinite alternate;

  @keyframes bonfire-animation {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
export const LoadTitle = styled.h2`
  color: white;
  font-size: 30px;
`;
export const Logo = styled.img`
  z-index: 9999;
  filter: saturate();
`;
export const TextWrap = styled.div`
  z-index: 99999;
  height: 600px;
  width: 700px;
  color: white;
  border: 1px solid #9c6a31;
  font-size: 24px;
  padding: 10px;
`;
export const Flex = styled.div`
  display: flex;
  gap: 10px;
`;
export const Line = styled.div`
  font-size: ${(props) => (props.isTitle ? "30px" : "24px")};
  border-bottom: 1px solid #9c6a31;
  height: 50px;
  display: flex;
  align-items: flex-end;
`;
