import { useState } from "react";
import "./css/App.css";
import SideBar from "./component/SideBar";
import Home from "./component/Home";


function App() {

  return (
    <div id="App">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
