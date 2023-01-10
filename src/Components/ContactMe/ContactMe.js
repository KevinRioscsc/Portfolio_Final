import React from "react";
import VintageContainer from "../LeatheryDiv/VintageContainer";
import {
  Wrapper,
  Title,
  YourName,
  Name,
  YourMesg,
  Msg,
  Enter,
  Submit,
  Back,
} from "./Styled";
import { IoMdArrowBack } from "react-icons/io";
import useRemoveFromStack from "../../Hooks/useRemoveFromStack";
import useAddToStack from "../../Hooks/useAddToStack";

const ContactMe = () => {
  const { goBack } = useRemoveFromStack("Contact Me");
  const { isActive } = useAddToStack("Contact Me");

  const style = {
    left: "50%",
    right: "10%",
    height: "400px",
    width: "800px",
    margin: "50px",
    transform: "translate(-50%, 0)",
    isActive: isActive,
  };
  return (
    <>
      <VintageContainer {...style} />
      <Wrapper isActive={isActive}>
        <Back onClick={goBack}>
          <IoMdArrowBack size={40} color={"white"} />
        </Back>
        <Title>Speak Your Mind...</Title>
        <YourName>
          Name:
          <Name type="text"></Name>
        </YourName>
        <YourMesg>
          What do you want to ask me?
          <Msg></Msg>
        </YourMesg>
        <Enter>
          <Submit type="submit"></Submit>
        </Enter>
      </Wrapper>
    </>
  );
};

export default ContactMe;
