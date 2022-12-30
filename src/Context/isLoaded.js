import React, { createContext, useState, useContext } from "react";

const LoadContext = createContext();

export const useLoad = () => {
  return useContext(LoadContext);
};

const IsLoaded = ({ children }) => {
  const [Loaded, setLoaded] = useState(false);
  const [clicked, setClick] = useState(false);

  const value = {
    Loaded,
    setLoaded,
    clicked,
    setClick,
  };
  return <LoadContext.Provider value={value}>{children}</LoadContext.Provider>;
};

export default IsLoaded;
