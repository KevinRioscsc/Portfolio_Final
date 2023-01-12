import React from "react";
import { useLoad } from "../../Context/isLoaded";
import useAddToStack from "../../Hooks/useAddToStack";
import Navigation from "../Navigation/Navigation";

const ProjectNav = () => {
  const { isActive } = useAddToStack("Projects");

  const style = {
    Title: "Projects",
    navTitle: [
      {
        title: "BlockChain",
      },
      {
        title: "Portfolio Template",
      },
      {
        title: "E-Commerce Website",
      },
      {
        title: "Tech Repair Landing-Site",
      },
      {
        title: "Game of Life Circuit",
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
