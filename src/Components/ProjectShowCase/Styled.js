import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  width: 1100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  z-index: 99;
`;
export const Wrapper = styled.div`
  padding: 3em;
  color: white;
  height: inherit;
  display: flex;
`;
export const VidContain = styled.div`
  background: black;
  height: 80%;
  width: 60%;
  z-index: 9999;
`;
export const Video = styled.div``;
export const DescrDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 25px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Catagories = styled.div``;
export const LinksDiv = styled.div`
  display: flex;
  gap: 10px;
`;
export const DescrTitle = styled.div``;
export const Tag = styled.div`
  border: 1px solid white;
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Para = styled.div`
  width: 100%;
  font-size: 20px;
`;
export const LinkTitle = styled.div`
  cursor: pointer;
  width: 70px;
  text-align: center;
  padding: 3px;
  border-bottom: 1px solid white;
`;
export const GitHubTitle = styled.div`
  cursor: pointer;
  width: 70px;
  text-align: center;
  padding: 3px;
  border-bottom: 1px solid white;
`;
export const Back = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 9999999;
  color: white;
  height: 50px;
  width: 50px;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const Flex = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
