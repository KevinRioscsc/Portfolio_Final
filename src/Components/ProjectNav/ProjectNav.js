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
        title: "Tech Repair Landing-Site",
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
