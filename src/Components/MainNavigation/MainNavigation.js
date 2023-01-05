import React from "react";
import { useLoad } from "../../Context/isLoaded";
import Navigation from "../Navigation/Navigation";

const MainNavigation = () => {
  const { setClick, menuStack } = useLoad();
  const style = {
    Title: "",
    navTitle: [
      {
        title: "Stats",
        click: setClick,
      },
      {
        title: "Projects",
        click: null,
      },
      {
        title: "About Me",
        click: null,
      },
      {
        title: "Contact Me",
        click: null,
      },
    ],
    isActive: menuStack[1].state,
  };
  return (
    <div>
      <Navigation {...style} />
    </div>
  );
};

export default MainNavigation;
