import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  height: 500px;
  width: 800px;
  transform: translate(-50%, 0);
  color: white;
  z-index: 999999999999;

  transition: all 0.6s ease-in-out;
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  visibility: ${(props) => (props.isActive ? "visibile" : "hidden")};

  @media screen and (max-width: 945px) {
    width: 90%;
  }
`;
export const Title = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;
export const YourName = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 20px;
`;
export const Name = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #613c17;
  font-size: 20px;
  outline: none;
  color: white;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 0;
    border-bottom: 1px solid #613c17;
  }
`;
export const YourMesg = styled.div`
  font-size: 20px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-bottom: 70px;
`;
export const Msg = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #613c17;
  font-size: 20px;
  height: 30px;
  outline: none;
  color: white;
  transition: all 0.2s ease-in-out;
  max-width: 300px;
  &:focus {
    border: 0;
    border-bottom: 1px solid #613c17;
  }
`;
export const Enter = styled.div`
  display: flex;
  justify-content: center;
`;
export const Submit = styled.input`
  background-color: black;
  border-bottom: 1px solid white;
  font-size: 25px;
  color: white;
  border-left: 15px solid rgb(0, 0, 0, 1);
  border-right: 15px solid rgb(0, 0, 0, 1);
  box-shadow: 0;
  transition: all 0.2s ease-in-out;
  width: 400px;
  font-family: optimus;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 10px 20px 10px black inset;
    background-color: #cf5300b3;
  }
`;
export const Back = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
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
export const Space = styled.div`
  padding: 70px 0 0 70px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 500px) {
    padding: 70px 0 0 20px;
  }
`;
