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
  const { Load } = useLoad();

  useEffect(() => {
    const userPressed = (e) => {
      switch (e.key) {
        case "e":
          setPressed(true);
          break;
        case "q":
          setPressed(false);
          break;
      }
    };
    console.log("loaded");
    window.addEventListener("keydown", userPressed);

    return () => {
      window.removeEventListener("keydown", userPressed);
    };
  }, []);
  return (
    <>
      <div style={{ height: "100vh", background: "black" }}>
        <MainNavigation isActive={pressed} />
        <StartNavigation isActive={pressed} />
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
