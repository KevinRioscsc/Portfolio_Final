import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  width: 1500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  z-index: 99;
  @media screen and (max-width: 1555px) {
    width: 95%;
    flex-direction: column;
    height: 80%;
  }
`;
export const Wrapper = styled.div`
  padding: 3em;
  color: white;
  height: inherit;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1555px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 450px) {
    padding: 1em;
  }
`;
export const VidContain = styled.div`
  background: black;
  height: 80%;
  width: 60%;
  z-index: 9999;
  @media screen and (max-width: 1555px) {
    width: 80%;
    height: 70%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 60%;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const Video = styled.video`
  height: 100%;
  width: 100%;
`;
export const DescrDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  @media screen and (max-width: 1555px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    margin-top: 100px;
    gap: 30px;
  }
`;
export const Title = styled.div`
  text-align: center;
  font-size: 25px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Catagories = styled.div``;
export const LinksDiv = styled.div`
  display: flex;

  gap: 30px;
`;
export const DescrTitle = styled.div``;
export const Tag = styled.div`
  border: 1px solid white;
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 420px) {
    width: 49px;
    height: 20px;
    font-size: 14px;
  }
`;
export const Para = styled.div`
  width: 100%;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
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
export const Source = styled.source``;
