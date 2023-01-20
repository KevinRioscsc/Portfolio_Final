import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import VintageContainer from "../LeatheryDiv/VintageContainer";
import ConfirmAnim from "./Confirmation/ConfirmAnim";
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
  Space,
  Form,
  Wrapper2,
} from "./Styled";
import { IoMdArrowBack } from "react-icons/io";
import useRemoveFromStack from "../../Hooks/useRemoveFromStack";
import useAddToStack from "../../Hooks/useAddToStack";

const ContactMe = () => {
  const { goBack } = useRemoveFromStack("Contact Me");
  const { isActive } = useAddToStack("Contact Me");
  const [confirm, setConfirm] = useState(false);

  const style = {
    left: "50%",
    right: "10%",
    height: "500px",
    width: "800px",
    margin: "50px",
    transform: "translate(-50%, 0)",
    isActive: isActive,
    responsWidth: "95%",
    responsMax: "945px",
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result) setConfirm(true);
        },
        (error) => {
          if (error) {
            setConfirm(false);
          }
        }
      );
  };

  return (
    <>
      {!confirm ? (
        <div>
          <VintageContainer {...style} />
          <Wrapper isActive={isActive}>
            <Form ref={form} onSubmit={sendEmail}>
              <Space>
                <Back onClick={goBack}>
                  <IoMdArrowBack size={40} color={"white"} />
                </Back>
                <Title>Speak Your Mind...</Title>

                <YourName>
                  Name:
                  <Name type="text" name="from_name"></Name>
                </YourName>
                <YourMesg>
                  What do you want to ask me?
                  <Msg name="message"></Msg>
                </YourMesg>
              </Space>
              <Enter>
                <Submit type="submit"></Submit>
              </Enter>
            </Form>
          </Wrapper>
        </div>
      ) : (
        <div>
          <VintageContainer {...style} />
          <Wrapper2 isActive={isActive}>
            <Back
              onClick={() => {
                goBack();
                setConfirm(false);
              }}
            >
              <IoMdArrowBack size={40} color={"white"} />
            </Back>
            <ConfirmAnim />
          </Wrapper2>
        </div>
      )}
    </>
  );
};

export default ContactMe;
