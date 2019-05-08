import React from "react";
import { connect } from "react-redux";
import Inspector from "./inspector";
import Tools from "./tools";
import Thumbnail from "./thumbnail";

const Menu = ({ id, diagram }) => {
  return (
    <div id={id}>
      {Object.keys(diagram).length !== 0 && (
        <Inspector diagram={diagram.diagram} id="inspector" />
      )}
      <Tools />
      <Thumbnail />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    diagram: state.diagram
  };
};

export default connect(mapStateToProps)(Menu);
