import React from "react";
import useAddToStack from "../../Hooks/useAddToStack";
import Navigation from "../Navigation/Navigation";
import Delayed from "../Delay/Delay";

const MainNavigation = ({ pressed }) => {
  const { isActive } = useAddToStack("startMenu");
  const style = {
    Title: "startMenu",
    navTitle: [
      {
        title: "Stats",
      },
      {
        title: "Projects",
      },

      {
        title: "Contact Me",
      },
    ],
    isActive: isActive,
  };
  return (
    <>
      {pressed ? (
        <Delayed waitBeforeShow={3000}>
          <Navigation {...style} />
        </Delayed>
      ) : (
        <Navigation {...style} />
      )}
    </>
  );
};

export default MainNavigation;
