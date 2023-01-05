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
  width: 700px;
  margin: 50px;
`;
export const TopLayer = styled.div`
  display: flex;
  gap: 10px;
`;
export const Img = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #613c17;
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
  flex-direction: column;
  gap: 40px;
  position: relative;
`;
export const Close = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999;
  color: white;
  cursor: pointer;
`;
