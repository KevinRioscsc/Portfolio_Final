import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesLinks from "./RoutesLinks";
import { BrowserRouter } from "react-router-dom";
import IsLoaded from "./Context/isLoaded";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IsLoaded>
      <BrowserRouter>
        <RoutesLinks />
      </BrowserRouter>
    </IsLoaded>
  </React.StrictMode>
);
