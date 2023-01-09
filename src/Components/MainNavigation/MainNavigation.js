import React from "react";
import useAddToStack from "../../Hooks/useAddToStack";
import Navigation from "../Navigation/Navigation";

const MainNavigation = () => {
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
    <div>
      <Navigation {...style} />
    </div>
  );
};

export default MainNavigation;
