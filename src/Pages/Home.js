import React, { useState, useEffect } from "react";
import Navigation from "../Components/Navigation/Navigation";
import StartNavigation from "../Components/CallToAction/StartNavigation";
import Three from "../Three/Three";
import Loading from "../Components/LoadingScreen/Loading";
import { useLoad } from "../Context/isLoaded";
import StatMenu from "../Components/Stat/StatMenu";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import ProjectNav from "../Components/ProjectNav/ProjectNav";
import ShowCase from "../Components/ProjectShowCase/ShowCase";

const Home = () => {
  const [pressed, setPressed] = useState(false);
  const { Load, setStack, menuStack } = useLoad();

  const startMenu = () => {
    console.log("state before", menuStack[0]);
    setStack((prev) => {
      return prev.map((item) => {
        if (item.title === "start") {
          return { ...item, state: false };
        }
        if (item.title === "startMenu") {
          return { ...item, state: true };
        }
      });
    });
    console.log("state before", menuStack[0]);
  };

  useEffect(() => {
    const userPressed = (e) => {
      switch (e.key) {
        case "e":
          startMenu();
          break;
        case "q":
          setPressed(false);
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
        <Three isActive={pressed} />
      </div>
      <Loading isLoaded={Load} />
      <StatMenu />
      <ProjectNav />
      <ShowCase />
    </>
  );
};

export default Home;
