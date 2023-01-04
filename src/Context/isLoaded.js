import React, { createContext, useState, useContext } from "react";

const LoadContext = createContext();

export const useLoad = () => {
  return useContext(LoadContext);
};

const IsLoaded = ({ children }) => {
  const [Loaded, setLoaded] = useState(false);
  const [clicked, setClick] = useState(false);
  const [menuStack, setStack] = useState([
    {
      id: 1,
      title: "rest",
      state: true,
    },
    {
      id: 2,
      title: "menu",
      state: false,
    },
  ]);

  const findElement = (name) => {
    return menuStack.find((item) => item.title === name);
  };

  const value = {
    Loaded,
    setLoaded,
    clicked,
    setClick,
    findElement,
    menuStack,
    setStack,
  };
  return <LoadContext.Provider value={value}>{children}</LoadContext.Provider>;
};

export default IsLoaded;
