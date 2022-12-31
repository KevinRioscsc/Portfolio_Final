import React from "react";
import Navigation from "../Navigation/Navigation";

const ProjectNav = () => {
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
    isActive: false,
  };
  return (
    <>
      <Navigation {...style} />
    </>
  );
};

export default ProjectNav;
