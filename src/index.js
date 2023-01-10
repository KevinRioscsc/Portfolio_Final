import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import IsLoaded from "./Context/isLoaded";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IsLoaded>
      <Home />
    </IsLoaded>
  </React.StrictMode>
);
