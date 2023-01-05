import React from "react";
import { useLoad } from "../../Context/isLoaded";
import Navigation from "../Navigation/Navigation";

const ProjectNav = () => {
  const { menuStack } = useLoad();
  console.log(menuStack);
  const statState = menuStack.find((item) => item.title === "Projects");
  const isActive = statState ? statState.state : false;
  const style = {
    Title: "Projects",
    navTitle: [
      {
        title: "BlockChain",
        click: null,
      },
      {
        title: "Portfolio Template",
        click: null,
      },
      {
        title: "E-Commerce Website",
        click: null,
      },
      {
        title: "Kimo Wireless Landing Site",
        click: null,
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

export default ProjectNav;
