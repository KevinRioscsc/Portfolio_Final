import styled from "styled-components";
export const Level = styled.div`
  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  color: white;
  height: 600px;
  width: 1000px;
  margin: 10px;
`;
export const TopLayer = styled.div`
  margin: 0 auto;
  width: 40%;
`;
export const Img = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid yellow;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  z-index: 99999999999999999999;
`;
export const Title = styled.div`
  font-size: 20px;
`;

export const Stats = styled.div`
  border: 1px solid #613c17;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  font-size: 20px;
`;
export const Name = styled.div`
  align-self: center;
  margin-top: 20px;
  border: 1px solid #613c17;
  width: 250px;
  text-align: center;
`;
export const Attribute = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const Photo = styled.div`
  height: 20px;
  width: 20px;
  border: 1px solid #613c17;
`;
export const AtName = styled.div``;
export const MYLevel = styled.div`
  border-bottom: 1px solid #613c17;
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding-bottom: 10px;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const Exp = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 80px;
  gap: 40px;
  position: relative;
`;
export const Back = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
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
export const Descrip = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;
export const Flex = styled.div`
  display: flex;
  gap: 10px;
`;
export const Paragraph = styled.div`
  margin-top: 10px;
  font-size: 20px;
  line-height: 24px;
`;
