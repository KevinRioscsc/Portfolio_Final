import React, { useState, useEffect } from "react";
import { useLoad } from "../Context/isLoaded";

const useAddToStack = (Title) => {
  const { menuStack, setStack } = useLoad();

  const statState = menuStack.find((item) => item.title === Title);
  const isActive = statState ? statState.state : false;

  const clickIndex = (title) => {
    setStack((prev) => {
      const newArr = prev.map((item) => {
        return { ...item, state: false };
      });
      return [...newArr, { title, state: true }];
    });
    {
    }
  };

  return { isActive, clickIndex };
};

export default useAddToStack;
