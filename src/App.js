import React from "react";
import Admin from "./components/Admin";
import DataBaseProvider from "./context/DataBase";

function App() {
  return (
    <div>
      <DataBaseProvider>
        <Admin />
      </DataBaseProvider>
    </div>
  );
}

export default App;
