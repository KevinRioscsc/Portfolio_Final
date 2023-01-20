import React from "react";
import { useLoad } from "../Context/isLoaded";

const useRemoveFromStack = (Title) => {
  const { setStack } = useLoad();

  const goBack = () => {
    setStack((prev) => {
      return prev
        .filter((item) => item.title !== Title)
        .map((item, index) => {
          if (index === prev.length - 2) {
            return { ...item, state: true };
          }
          return { ...item };
        });
    });
  };
  return { goBack };
};

export default useRemoveFromStack;
