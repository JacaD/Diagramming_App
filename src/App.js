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
      <div id="mainDiv">
        <Palette paletteDiv="paletteDiv" />
        <Diagram diagramDiv="diagramDiv" />
        <Menu id="menuDiv" />
      </div>
    </React.Fragment>
  );
}

export default App;
