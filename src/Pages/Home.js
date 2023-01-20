import React, { useState } from "react";
import StartNavigation from "../Components/CallToAction/StartNavigation";
import Three from "../Three/Three";
import Loading from "../Components/LoadingScreen/Loading";
import { useLoad } from "../Context/isLoaded";
import StatMenu from "../Components/Stat/StatMenu";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import ProjectNav from "../Components/ProjectNav/ProjectNav";
import ShowCase from "../Components/ProjectShowCase/ShowCase";
import useAddToStack from "../Hooks/useAddToStack";
import BonOverlay from "../Components/BonfireLitOverlay/BonOverlay";

import mySound from "../Sound/bonfireSound.mp3";
import ContactMe from "../Components/ContactMe/ContactMe";

const Home = () => {
  const { Load, menuStack } = useLoad();
  const [pressed, setPressed] = useState(false);
  const { clickIndex, isActive } = useAddToStack("start");

  const audio = new Audio(mySound);
  audio.volume = 0.1;

  const startNav = () => {
    if (isActive) {
      clickIndex("startMenu");
      setPressed(true);
      audio.play();
    }
  };

  return (
    <>
      <div style={{ height: "100vh", background: "black" }}>
        <MainNavigation pressed={pressed} />
        <StartNavigation clicked={startNav} />
        <Three isActive={menuStack[0].state ? false : true} />
      </div>
      <Loading isLoaded={Load} />
      <StatMenu />
      <ProjectNav />
      <ShowCase />
      <BonOverlay />
      <ContactMe />
    </>
  );
};

export default Home;
