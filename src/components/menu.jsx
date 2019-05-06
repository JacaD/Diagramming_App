import React, { Component } from "react";
import { connect } from "react-redux";
import Inspector from "./inspector";
import Tools from "./tools";
import Thumbnail from "./thumbnail";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div id={this.props.id}>
        {Object.keys(this.props.diagram).length !== 0 && (
          <Inspector diagram={this.props.diagram.diagram} id="inspectorDiv" />
        )}
        <Tools tools={this.tools} />
        <Thumbnail />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    diagram: state.diagram
  };
};

export default (Menu = connect(mapStateToProps)(Menu));
