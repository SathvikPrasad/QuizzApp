import React, { useContext } from "react";
import { DataBaseContext } from "../context/DataBase";
import Home from "./Home";
import Review from "./Review";
import Settings from "./Settings";
export default function ViewController() {
  const { uiState } = useContext(DataBaseContext);

  if (uiState === "home") {
    return <Home />;
  }
  if (uiState === "review") {
    return <Review />;
  }
  if (uiState === "settings") {
    return <Settings />;
  }
}
