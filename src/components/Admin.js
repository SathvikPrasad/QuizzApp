import React, { useContext } from "react";
import { DataBaseContext } from "../context/DataBase";

import ViewController from "./ViewController";
import Students from "./Students";

export default function Admin() {
  const { user } = useContext(DataBaseContext);

  return <div>{user ? <ViewController /> : <Students />}</div>;
}
