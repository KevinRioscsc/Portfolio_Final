import React, { useEffect } from "react";
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

const Home = () => {
  const { Load, menuStack } = useLoad();
  const { clickIndex, isActive } = useAddToStack("start");

  const audio = new Audio(mySound);
  audio.volume = 0.1;

  useEffect(() => {
    const userPressed = (e) => {
      switch (e.key) {
        case "e":
          if (isActive) {
            console.log("pressed", isActive);
            clickIndex("startMenu");
            audio.play();
          }

          break;
      }
    };

    window.addEventListener("keydown", userPressed);

    return () => {
      window.removeEventListener("keydown", userPressed);
    };
  }, []);
  return (
    <>
      <div style={{ height: "100vh", background: "black" }}>
        <MainNavigation />
        <StartNavigation />
        <Three isActive={menuStack[0].state ? false : true} />
      </div>
      <Loading isLoaded={Load} />
      <StatMenu />
      <ProjectNav />
      <ShowCase />
      <BonOverlay />
    </>
  );
};

export default Home;
