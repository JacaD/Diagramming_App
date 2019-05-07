import React from "react";
import Diagram from "./components/diagram";
import Palette from "./components/palette";
import UpperBar from "./components/upperBar";
import "../src/styles/styles.css";
import Menu from "./components/menu";

function App() {
  return (
    <React.Fragment>
      <UpperBar id="upperBar" />
      <div id="main">
        <Palette id="palette" />
        <Diagram id="diagram" />
        <Menu id="menu" />
      </div>
    </React.Fragment>
  );
}

export default App;
